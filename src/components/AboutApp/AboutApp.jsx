import React from "react";

const AboutApp = () => {
  return (
    <div className=" AboutApp col-12 d-flex justify-content-center align-items-center flex-wrap-reverse  ">
      <div
        className="col-sm-4 
       col-12 d-none  d-md-flex  justify-content-center  align-items-center  p-3 "
      >
        <img className="col-10" src="/images/original.png" alt="" />
      </div>
      <div className="col-md-8  d-flex  justify-content-center flex-column   align-items-center p-3 text-center pt-4   ">
        <h3>اهداف</h3>
        <p className="pt-2  text-end " dir="rtl">
          برنامه انتخاب یار یک سامانه جامع در جهت شناخت کاندید های انتخاباتی و
          برسی سابقه فعالیت داوطلبان انتخاباتی در انواع دوره های انتخابات میباشد
          این سامانه شامل ثبت وعده های داوطلبان و پیگیری این وعده ها در آینده
          میباشد <br />
          برنامه انتخاب یار دارای ویژگی امکان گفتگو انلاین و پرسش و پاسخ با
          نماینده مدنظر جهت شناخت بهتر مواضع او میباشد <br /> به طور خلاصه هدف
          از ساخت این برنامه به چند مورد منتهی میشود
          <br /> 1- شفاف سازی انتخابات و شناخت بهتر داوطلبان
          <br /> 2- ارتباط مردم با نماینده مورد نظر و پرسش و پاسخ بر خط
        </p>
      </div>
    </div>
  );
};

export default AboutApp;
