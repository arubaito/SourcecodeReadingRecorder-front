'use client'

import { findSourcefileId, updateCompleteDate } from "@/script/S01_home";
import { useRef, useState } from "react";

export default function CompleteDate({ completeDate }) {

    // 登録ボタンを押したかどうかのフラグ
    const [registerButtonClickFlug, setRegisterButtonClickFlug] = useState(true)

    // 登録ボタンを押したらフラグを反転する
    const onClickRegisterButton = () => {
        setRegisterButtonClickFlug(!registerButtonClickFlug)
    }

    // TODO:当日の日付を生成して、入力フォームの初期値に設定する
    // let today = new Date();
    // let year = today.getFullYear();
    // let month = ("0" + (today.getMonth() + 1)).slice(-2);
    // let date = ("0" + (today.getDate())).slice(-2);
    // let initDate = year + "-" + month + "-" + date;

    // completeDateが空欄ならば登録ボタンを表示する
    if (completeDate != undefined) {

        return completeDate;
    } else {

        // フラグが反転したら入力フォームを出す
        return (registerButtonClickFlug ?
            (<span className="date-register" onClick={onClickRegisterButton}>登録</span>) :
            <span><input id="date" type="date" onBlur={dateRegister} /></span>);
    }
}

// 日付入力欄のフォーカスが外れたらDBに日付を登録して、テキストフィールドに戻す関数
async function dateRegister(e) {

    // DB登録
    const sourcefileId = findSourcefileId(e);
    await updateCompleteDate(sourcefileId, e.target.value);

    // 完了日の表示を登録日付のテキストフィールドに戻す
    const registerDate = e.target.value;
    document.getElementById("date").outerHTML = registerDate;
}
