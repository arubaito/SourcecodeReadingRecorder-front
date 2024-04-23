export default function CompleteDate({completeDate}){

    // 完了日の登録ボタンを押した時のハンドラ
    const onClickDateRegister = (e) => {
        console.log(e)
    
        // 当日の日付を取得
        let today = new Date();
        let year = today.getFullYear();
        let month = ("0" + (today.getMonth() + 1)).slice(-2);
        let date = ("0" + (today.getDate())).slice(-2);
    
        let initDate = year + "-" + month + "-" + date;
    
        e.target.outerHTML = `<span><input type=\"date\" /></span>`;
    }

    return (
        <CreateCompleteDate completeDate={completeDate}  onClickDateRegister={onClickDateRegister}/>
    )

}

// 完了日の要素を生成するコンポーネント
function CreateCompleteDate({completeDate, onClickDateRegister}){

    if(completeDate != undefined){
        return completeDate;
    } else {
        return (<span className="date-register" onClick={onClickDateRegister}>登録</span>);
    }
}
