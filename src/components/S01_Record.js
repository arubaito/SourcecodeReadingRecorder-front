'use client'; // クライアント側でイベントハンドラを登録する

import { onClickDateRegister, onClickStatus } from "@/script/S01_home";

export default function Record({category, sourcefile, status, completeDate}) {
    return (

        <>
            <tr>
                <td>
                    <CreateCategory category={category} />
                </td>
                <td class="source">{sourcefile}</td>
                <td>
                    <CreateStatus status={status} />
                </td>
                <td>{
                    // propsで日付が設定されていたら日付を、設定されていなければ登録ボタンを表示する
                    completeDate ? 
                        completeDate : 
                        (<span class="date-register" onClick={onClickDateRegister}>登録</span>)
                    }
                </td>
            </tr>


        </>
    )
}

// 種別の要素を生成するコンポーネント
function CreateCategory({category}){

    // Java
    if(category == "1"){

        return (<span class="type type-java">Java</span>)
    }

}

// 状態の要素を生成するコンポーネント
function CreateStatus({status}){

    if(status == "1"){

        return (<span class="status status-inactive"onClick={onClickStatus}>未対応</span>)

    } else if (status == "2"){
        
        return (<span class="status status-active" onClick={onClickStatus}>処理中</span>)

    } else {
        
        return (<span class="status status-complete" onClick={onClickStatus}>処理済み</span>)

    }        
}