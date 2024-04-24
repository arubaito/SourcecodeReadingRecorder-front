import { findSourcefileId, updateCompleteDate } from "@/script/S01_home";

export default function CompleteDate({ completeDate }) {

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

        // 日付入力欄のフォーカスが外れると、APIを呼び出してデータを登録する
        inputDate.addEventListener("blur", dateRegister)
    }

    return (
        <CreateCompleteDate completeDate={completeDate} onClickDateRegister={onClickDateRegister} />
    )

}

// 完了日の要素を生成するコンポーネント
function CreateCompleteDate({ completeDate, onClickDateRegister }) {

    if (completeDate != undefined) {

        return completeDate;
    } else {

        return (<span className="date-register" onClick={onClickDateRegister}>登録</span>);
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
