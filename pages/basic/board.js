import Head from "next/head"
import tableStyles from "../common/styles/table.module.css"
import { useEffect ,useState} from "react"
import axios from "axios"

export default function BoardList(){
    const columns = ["제어번호", "명칭(국문)", "발명자1", "등록국가", "명칭(영문)", "구분", "출원번호", "등록번호", "원문", "워크폼"]
    const cols = [
        "100px",
    ]

    const style = {background: "lightblue", height: "10px"};
    
    const [data, setData] = useState([])
    useEffect(()=>{
            axios.get('http://localhost:5000/api/board/list').then(res=>{
                setData(res.data.boards)
        }).catch(err=>{})
    }, [])
    return(
        <table className={tableStyles.table}>
            <colgroup>
                {cols.map((colWidth, idx) => (
                    <col style={{width: colWidth}} key={`col${idx}`} />
                ))}
            </colgroup>
            <thead>
                <tr><th colSpan={10}><h2>한국에너지기술연구원_지적재산권</h2></th></tr>
            </thead>
            <tbody>
            <tr >
                {columns.map((column) => (
                <td style={style} key={column} >{column}</td>
                ))}
            </tr>
                    {data.length == 0 ? <tr >
                    <td colSpan={10} >게시글 없음</td>
                    </tr>
                    :data.map((board)=> (
                        <tr key={board.number}>
                            <td >{board.number}</td>
                            <td >{board.nameKor}</td>
                            <td >{board.developer}</td>
                            <td >{board.country}</td>
                            <td >{board.nameEng}</td>
                            <td >{board.classification}</td>
                            <td >{board.applicationNumber}</td>
                            <td >{board.registrationNumber}</td>
                            <td >{board.original}</td>
                            <td >{board.workForm}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}




// import React, {useState, useEffect} from "react";
// import tableStyles from '../common/styles/table.module.css';
// import axios from "axios";

// export default function Board() {
//     const columns = ["제어번호", "명칭(국문)", "발명자1", "등록국가", "명칭(영문)", "구분", "출원번호", "등록번호", "원문", "워크폼"]


// return (
// <>
//     <table className={tableStyles.table}>
//         <thead>
//             <tr>
//                 <th colSpan={columns.length}>한국에너지기술연구원_지적재산권</th>
//             </tr>
//         </thead>
//             <tbody>
//                 <tr>
//                     {columns.map((column) => (
//                         <th key={column}>{column}</th>
//                     ))}
//                 </tr>
//                 <tr>
//                     <td colSpan={columns.length} height="200">데이터가 없습니다</td>   
//                 </tr>
//             </tbody>
//     </table>
// </>
//     );
// }