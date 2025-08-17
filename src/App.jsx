import SideBar from "./components/SideBar/SideBar.jsx";
import List from "./components/List/List.jsx";
import CustomInput from "./UI/CustomInput/CustomInput.jsx";
import CustomButton from "./UI/CustomButton/CustomButton.jsx";
import Modal from "./components/Modal/Modal.jsx";

function App() {
  return (
    <>
      {/* <Modal>
        <h1>Form name</h1>
        <CustomInput type="text" placeholder="Введите текст" />
        <CustomInput type="text" placeholder="Введите текст" />
        <CustomInput type="text" placeholder="Введите текст" />
        <CustomInput type="text" placeholder="Введите текст" />
        <CustomInput type="text" placeholder="Введите текст" />
        <CustomButton>Войти</CustomButton>
        <CustomButton>Зарегистрироваться</CustomButton>
      </Modal> */}
      <SideBar />
      <div className="content">
        <List
          itemArray={[
            "Помыть ножки",
            "Погладить нюшеньку",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tempora libero ducimus qui aspernatur facilis nesciunt, vitae obcaecati autem repudiandae illo quaerat maiores ab error ipsam, inventore in expedita quisquam?",
          ]}
        />
      </div>
    </>
  );
}

export default App;
