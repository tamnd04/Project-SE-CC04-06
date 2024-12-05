import React from "react";
import "./print_history.css";

export default function Printhistory() {
  return (
    <div className="home-students">
      <div className="rectangle-1" />
      <div className="group-4">
        <div className="hcmut-ssps">
          HCMUT
          <br />
          SSPS
        </div>
      </div>
      <img className="_01-logobachkhoatoi-1" src="images/logobk.png" />
      <div className="lichsuinan">LỊCH SỬ IN ẤN</div>
      <a href="">
        <div className="tao-ban-in">
          <div className="group-1">
            <div className="tao-ban-in-moi">Tạo bản in mới</div>
            <img className="vector" src="images/+.svg" />
          </div>
        </div>
      </a>
      <a href="student_homepage.html">
        <div className="trang-chu2">
          <img className="vector2" src="images/home.svg" />
          <div className="trang-chu3">Trang chủ</div>
        </div>
      </a>
      <a href="print_history.html">
        <div className="lich-su-in">
          <img className="vector5" src="images/history.svg" />
          <div className="lich-su-in-an">Lịch sử in ấn</div>
        </div>
      </a>
      <a href="">
        <div className="mua-trang-in">
          <img className="vector3" src="images/shopping_cart.svg" />
          <div className="mua-trang-in2">Mua trang in</div>
        </div>
      </a>
      <div className="khac">
        <img className="dot" src="images/3dot.svg" />
        <div className="khac2">Khác</div>
      </div>
      <a href="LoginAs.html">
        <div className="ng-xu-t">
          <img
            className="logout-24-outline"
            src="images/login-24-outline0.svg"
          />
          <div className="ng-xu-t2">Đăng xuất</div>
        </div>
      </a>
      <div className="container">
        <table
          id="example"
          className="table table-striped"
          style={{ width: "100%" }}
        >
          <thead>
            <tr>
              <th>Tên tệp</th>
              <th>Thời gian in</th>
              <th>Mã máy in</th>
              <th>Số trang</th>
              <th>Số bản</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fimga_tutorial.pdf</td>
              <td>25/04/2024 12:43:55</td>
              <td>LTK-B4</td>
              <td>3</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Lab1.docx</td>
              <td>22/07/2024 11:22:55</td>
              <td>LTK-A3</td>
              <td>5</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Assingment1_SofEn.pdf</td>
              <td>05/12/2024 9:12:21</td>
              <td>LTK-C6</td>
              <td>32</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Lich_Su_Dang.docx</td>
              <td>12/03/2024 11:22:55</td>
              <td>DA-H1</td>
              <td>9</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Math_Algebra_Introduction.pdf</td>
              <td>25/04/2024 12:43:55</td>
              <td>LTK-B4</td>
              <td>15</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Math_Calculus_Theory.pdf</td>
              <td>26/04/2024 09:12:40</td>
              <td>LTK-A4</td>
              <td>12</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Physics_Newton_Laws.pdf</td>
              <td>27/04/2024 11:23:30</td>
              <td>LTK-C6</td>
              <td>18</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Chemistry_Acids_and_Bases.pdf</td>
              <td>28/04/2024 08:15:25</td>
              <td>DA-H1</td>
              <td>22</td>
              <td>2</td>
            </tr>
            <tr>
              <td>English_Literature_Shakespeare.pdf</td>
              <td>29/04/2024 13:55:12</td>
              <td>DA-H7</td>
              <td>10</td>
              <td>1</td>
            </tr>
            <tr>
              <td>History_World_War_II.pdf</td>
              <td>30/04/2024 14:02:55</td>
              <td>LTK-B4</td>
              <td>20</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Geography_Europe_Map.pdf</td>
              <td>01/05/2024 09:30:11</td>
              <td>LTK-A4</td>
              <td>14</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Biology_Human_Cell_Structure.pdf</td>
              <td>02/05/2024 10:25:43</td>
              <td>LTK-C6</td>
              <td>17</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Literature_Shakespeare_Quotes.pdf</td>
              <td>03/05/2024 11:40:29</td>
              <td>DA-H1</td>
              <td>8</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Math_Statistics_Basics.pdf</td>
              <td>04/05/2024 14:12:50</td>
              <td>DA-H7</td>
              <td>16</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Physics_Electricity_Fundamentals.pdf</td>
              <td>05/05/2024 15:00:45</td>
              <td>LTK-B4</td>
              <td>19</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Chemistry_Periodic_Table_Overview.pdf</td>
              <td>06/05/2024 08:50:55</td>
              <td>LTK-A4</td>
              <td>11</td>
              <td>1</td>
            </tr>
            <tr>
              <td>History_Renaissance_Era_Art.pdf</td>
              <td>07/05/2024 13:25:01</td>
              <td>LTK-C6</td>
              <td>30</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Biology_Animal_Cell_Structure.pdf</td>
              <td>08/05/2024 14:22:44</td>
              <td>DA-H1</td>
              <td>25</td>
              <td>3</td>
            </tr>
            <tr>
              <td>English_Language_Grammar_Review.pdf</td>
              <td>09/05/2024 10:14:35</td>
              <td>DA-H7</td>
              <td>18</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Geography_Asia_Countries.pdf</td>
              <td>10/05/2024 11:55:29</td>
              <td>LTK-B4</td>
              <td>14</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Math_Linear_Equations_Solutions.pdf</td>
              <td>11/05/2024 12:23:34</td>
              <td>LTK-A4</td>
              <td>13</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Physics_Heat_Transfer.pdf</td>
              <td>12/05/2024 14:30:20</td>
              <td>LTK-C6</td>
              <td>24</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Chemistry_Organic_Chemistry_Intro.pdf</td>
              <td>13/05/2024 10:05:35</td>
              <td>DA-H1</td>
              <td>28</td>
              <td>2</td>
            </tr>
            <tr>
              <td>History_Industrial_Revolution.pdf</td>
              <td>14/05/2024 13:45:01</td>
              <td>DA-H7</td>
              <td>22</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Biology_DNA_Structure.pdf</td>
              <td>15/05/2024 09:20:22</td>
              <td>LTK-B4</td>
              <td>18</td>
              <td>2</td>
            </tr>
            <tr>
              <td>English_Speech_Writing.pdf</td>
              <td>16/05/2024 11:05:00</td>
              <td>LTK-A4</td>
              <td>16</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Geography_Africa_Landforms.pdf</td>
              <td>17/05/2024 12:34:22</td>
              <td>LTK-C6</td>
              <td>20</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Math_Pythagorean_Theorem.pdf</td>
              <td>18/05/2024 10:15:30</td>
              <td>DA-H1</td>
              <td>12</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Physics_Waves_and_Sound.pdf</td>
              <td>19/05/2024 13:50:05</td>
              <td>DA-H7</td>
              <td>26</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Chemistry_Acid_Base_Reactions.pdf</td>
              <td>20/05/2024 09:20:45</td>
              <td>LTK-B4</td>
              <td>14</td>
              <td>1</td>
            </tr>
            <tr>
              <td>History_Ancient_Greece_Philosophy.pdf</td>
              <td>21/05/2024 11:35:55</td>
              <td>LTK-A4</td>
              <td>19</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Literature_Modern_Literature_Themes.pdf</td>
              <td>22/05/2024 15:40:10</td>
              <td>LTK-C6</td>
              <td>17</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Geography_Oceania.pdf</td>
              <td>23/05/2024 12:25:55</td>
              <td>DA-H1</td>
              <td>13</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Biology_Respiratory_System.pdf</td>
              <td>24/05/2024 14:50:12</td>
              <td>DA-H7</td>
              <td>28</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Math_Probability_Basics.pdf</td>
              <td>25/05/2024 09:35:25</td>
              <td>LTK-B4</td>
              <td>16</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Physics_Quantum_Mechanics.pdf</td>
              <td>26/05/2024 13:15:47</td>
              <td>LTK-A4</td>
              <td>25</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Chemistry_Energy_Changes.pdf</td>
              <td>27/05/2024 11:40:05</td>
              <td>LTK-C6</td>
              <td>18</td>
              <td>1</td>
            </tr>
            <tr>
              <td>History_French_Revolution.pdf</td>
              <td>28/05/2024 14:22:30</td>
              <td>DA-H1</td>
              <td>12</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
