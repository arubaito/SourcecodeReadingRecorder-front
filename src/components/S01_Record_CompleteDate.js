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
    
       	// 初期値に当日の日付を設定した日付入力欄を作成
        e.target.outerHTML = `<span><input id=\"date\" type=\"date\" class=\"\" /></span>`;
        
        const inputDate = document.getElementById("date");
        inputDate.value = initDate;
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
