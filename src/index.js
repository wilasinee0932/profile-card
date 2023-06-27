import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App(){
return (
    <>
      <div className='card'>
        <Avatar />
        <div className='data'>
        <Intro />
        <SkillList />
        </div>
      </div>
    </>
  )
}

function SkillList() {
  return ( 
    <div className='skill-list'>
      <Skill skill="Unity" emoji="💪" color="cyan" />
      <Skill skill="PHP" emoji="👍" color="orange" />
      <Skill skill="React" emoji="👶" color="yellow" />
      <Skill skill="MySQL" emoji="👍" color="orangered" />
    </div>
  )
}

function Skill(props) {
  return (
    <div className='skill' style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>วิลาสินี สุตัญตั้งใจ</h1>
      <p>นักศึกษาคณะวิทยาศาสตร์ สาขาเทคโนโลยีสารสนเทศและการสื่อสาร
        มหาวิทยาลัยอุบลราชธานี ชื่นชอบในการใช้คอมพิวเตอร์และการเขียนโปรแกรม
        งานอดิเรก อ่านนิยาย อ่านการ์ตูน มังงะ นอน
      </p>
    </div>
  )
}
function Avatar(){
  return <img className='avatar' src="profile.jpg" alt="My Avatar" />;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);