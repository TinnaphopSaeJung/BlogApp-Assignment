# BlogApp-Assignment

Backend = api folder, Frontend = blog-app folder

สมาชิก :
  1. 6210110484   นายติณณภพ แซ่จุ้ง     //ทำในส่วน Backend
  2. 6210110599   นางสาวสิรินทรา พุ่มนุ่ม   //ทำในส่วน Frontend

เครื่องมือที่ใช้ :
    - React
    - Node js
    - MongoDB

Link Youtube for Demo:  https://youtu.be/wVdAapyAMGU

เว็บที่ทำเป็น Blog Web โดยจะจากหน้า
  - Register โดยจะสามารถลงทะเบียนในการเข้าใช้เว็บ จะลิงค์ Username, Email, Password กับฐานข้อมูล MongoDB
  - Login เมื่อลงทะเบียนเสร็จสามารถ login เข้าไปใช้งานได้
  - Home จะแสดงข้อมูลโพสต์ทั้งหมดที่ผู้ใช้ทุกคนได้โพสต์ และสามารถ click ไปดูรายละเอียดของโพสต์นั้นได้
    - Single Post จะแสดงข้อมูลของโพสต์นั้นๆ ได้แก่ รูปภาพ, Username ที่โพสต์, Title, Description โดยที่หน้า Single Post ผู้ใช้จะไม่สามารถแก้ไขหรือลบโพสต์ที่ไม่ใช่ของตนเองได้
  - Write (จะต้องทำการ login ก่อนที่จะสามารถใช้งานได้) เป็นหน้าที่จะโพสต์ Blog โดยผู้ใช้สามารถเพิ่มรูป, Title และ Description ได้ และเมื่อกดโพสต์ข้อมูลจะไปอยู่ที่หน้า Home 
  - Account สามารถแก้ไขรูปภาพ, Username, Password และสามารถลบบัญชีผู้ใช้ได้
  - Logout จะทำการ logout ออกจากเว็บ
