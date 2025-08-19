param(
    [string]$SourcePath = ".",
    [string]$ArchiveName = "project.zip"
)

# Абсолютный путь к корню проекта
$root = (Resolve-Path $SourcePath).Path.TrimEnd('\','/')

# Временная папка
$TempPath = Join-Path $env:TEMP ("ArchiveTemp_" + [guid]::NewGuid().ToString())
New-Item -ItemType Directory -Path $TempPath | Out-Null

# Паттерн исключений для директорий
$excludeDirsPattern = "\\(node_modules|dist|build|\.git|\.idea|\.vscode)(\\|/|$)"

# Копируем всё, сохраняя структуру, исключая служебные папки и сам архив
Get-ChildItem -Path $root -Recurse -Force |
    Where-Object {
        # Исключаем служебные директории по полному пути
        $_.FullName -notmatch $excludeDirsPattern
    } |
    Where-Object {
        # Исключаем сам архив по имени файла
        $_.Name -ne $ArchiveName
    } |
    ForEach-Object {
        $relative = $_.FullName.Substring($root.Length).TrimStart('\','/')
        $dest = Join-Path $TempPath $relative

        if ($_.PSIsContainer) {
            New-Item -ItemType Directory -Force -Path $dest | Out-Null
        } else {
            $parent = Split-Path -Parent $dest
            if (!(Test-Path $parent)) { New-Item -ItemType Directory -Force -Path $parent | Out-Null }
            Copy-Item -Path $_.FullName -Destination $dest -Force
        }
    }

# Путь к архиву в корне проекта
$destArchive = Join-Path $root $ArchiveName

# Удаляем предыдущий архив, если есть
if (Test-Path $destArchive) {
    Remove-Item $destArchive -Force
}

# Создаём архив
Compress-Archive -Path (Join-Path $TempPath '*') -DestinationPath $destArchive

# Чистим временную папку
Remove-Item -Path $TempPath -Recurse -Force

Write-Output "Архив создан: $destArchive"
