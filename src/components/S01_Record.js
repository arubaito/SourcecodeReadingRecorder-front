'use client'

export default function Record({category, sourcefile, status, completeDate}) {
    
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

    // 状態のボタンを押した時のハンドラ
    const onClickStatus = (e) => {



        let status = e.target.innerHTML;
    
        // 未対応-> 処理中
        if (status == "未対応") {
    
            e.target.outerHTML = "<span className=\"status status-active\">処理中</span>"
    
            // 変更した要素にハンドラ登録
            let statuses = document.getElementsByClassName('status')
            for (let i = 0; i < statuses.length; i++) {
                statuses[i].addEventListener("click", onClickStatus)
            }
    
            //TODO DB登録処理
    
            // 処理中-> 処理済み
        } else if (status == "処理中") {
    
            e.target.outerHTML = "<span className=\"status status-complete\">処理済み</span>"
    
            // 変更した要素にハンドラ登録
            let statuses = document.getElementsByClassName('status')
            for (let i = 0; i < statuses.length; i++) {
                statuses[i].addEventListener("click", onClickStatus)
            }
    
            //TODO DB登録処理
    
        } else if (status == "処理済み") {
    
            e.target.outerHTML = "<span className=\"status status-inactive\">未対応</span>"
    
            // 変更した要素にハンドラ登録
            let statuses = document.getElementsByClassName('status')
            for (let i = 0; i < statuses.length; i++) {
                statuses[i].addEventListener("click", onClickStatus)
            }
    
            //TODO DB登録処理
    
        }
    }

    return (
        <>
            <tr>
                <td>
                    <CreateCategory category={category} />
                </td>
                <td class="source">{sourcefile}</td>
                <td>
                    <CreateStatus status={status} onClickStatus={onClickStatus} />
                </td>
                <td>
                    <CreateCompleteDate completeDate={completeDate}  onClickDateRegister={onClickDateRegister}/> 
                </td>
            </tr>
        </>
    )
}

// 種別の要素を生成するコンポーネント
async function CreateCategory({category}){

    // Java
    if(category == "1"){

        return (<span className="type type-java">Java</span>)
    }

}

// 完了日の要素を生成するコンポーネント
function CreateCompleteDate({completeDate, onClickDateRegister}){

    if(completeDate != undefined){
        return completeDate;
    } else {
        return (<span className="date-register" onClick={onClickDateRegister}>登録</span>);
    }
}


// 状態の要素を生成するコンポーネント
function CreateStatus({status, onClickStatus}){

    if(status == "1"){

        return (<span className="status status-inactive" onClick={onClickStatus}>未対応</span>)

    } else if (status == "2"){
        
        return (<span className="status status-active" onClick={onClickStatus}>処理中</span>)

    } else {
        
        return (<span className="status status-complete" onClick={onClickStatus}>処理済み</span>)

    }        
}

// 全てのソースファイルの情報をサーバから取得する関数
export async function getAllSourcefile(){
    try {
        const response = await fetch("http://localhost:8080/get-all-sourcefile");
        const res = await response.json();
        return res;
    }catch(err){
        console.log(err);
    } 
}