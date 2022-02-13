
import {useEffect, useState ,useRef} from 'react';
import { ResponsivePie} from '@nivo/pie';
import '../src/index.css';
import '../src/App.css';
import d from "./data.json";
import Bar from './component/Bar';
import Pie from './component/Pie';


//bar
function App() {
  let data = [];
  let city = [];
  let table = [];
  let elLi = useRef([]);

  for(let key in d){
    if(key !='API' && key != 'korea'){
      data.push({
        "countryNm": d[key].countryNm,
        "vaccine_1": d[key].vaccine_1['vaccine_1'],
        "vaccine_2": d[key].vaccine_2['vaccine_2'],
        "vaccine_3": d[key].vaccine_3['vaccine_3'],
      });

      city.push(
        {kor:d[key].countryNm, eng:key}
      );

      table.push(
        {
          city:d[key].countryNm, 
          v1:[
            d[key].vaccine_1['vaccine_1_old'],
            d[key].vaccine_1['vaccine_1_new'],
            d[key].vaccine_1['vaccine_1']
          ],
          v2:[
            d[key].vaccine_2['vaccine_2_old'],
            d[key].vaccine_2['vaccine_2_new'],
            d[key].vaccine_2['vaccine_2']
          ],
          v3:[
            d[key].vaccine_3['vaccine_3_old'],
            d[key].vaccine_3['vaccine_3_new'],
            d[key].vaccine_3['vaccine_3']
          ]
        }
      );
    }
  }
  console.log(table)

  //pie
  let [cityNm,setCityNm] = useState('seoul');
  let [p_data,setPdata] =useState();
  
  useEffect(()=>{
    setPdata([
      {
          "id": "1차",
          "label": "1차 백신",
          "value": d[cityNm].vaccine_1['vaccine_1']
      },
      {
          "id": "2차",
          "label": "2차 백신",
          "value": d[cityNm].vaccine_2['vaccine_2']
      },
      {
          "id": "3차",
          "label": "3차 백신",
          "value": d[cityNm].vaccine_3['vaccine_3']
      }
    ]);
  },[cityNm]);

  //예방접종현황



  function pieDataChange(e){
    //pie 데이터 바꾸기
    setCityNm(e.target.dataset.key)
    console.log(p_data)

  }

  return (
  <>
    <div className="title">
      <h1>코로나 19 백신접종 현황</h1>
    </div>

    <div className="pie">
      <div className="list">
          <ul>
            {
              city.map((v,k)=>(
                 <li
                  ref={elem => (elLi.current[k] = elem)}
                  data-key={v.eng}
                  key={v.eng}
                  onClick={pieDataChange}>
                  {v.kor}({v.eng}) 
                 </li> 
                ))
            }
          </ul>
      </div>
      <div className="graph"><Pie barData={p_data}/></div>
    </div>
    
    <Bar barData={data} />


  <div className='tableSheet'>
    <table>
      <thead>
        <tr><th colSpan={8}>Corona-19-API-예방접종현황</th></tr>
        <tr>
          <th rowSpan="2">시도명</th>
          <th colSpan="2">1차</th>
          <th colSpan="2">2차</th>
          <th colSpan="2">3차</th>
        </tr>
        <tr>
          <th>누적</th>
          <th>신규</th>
          <th>누적</th>
          <th>신규</th>
          <th>누적</th>
          <th>신규</th>
        </tr>
      </thead>
      <tbody>
        {
          table.map((v,k)=>(   
            <tr key={k}>
              <td>{v.city}</td>
              <td>{v.v1[0]}</td>
              <td>{v.v1[1]}</td>
              <td>{v.v2[0]}</td>
              <td>{v.v2[1]}</td>
              <td>{v.v3[0]}</td>
              <td>{v.v3[1]}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>

  </>
  );
}



export default App;