export default function Status({ status }) {

    // 状態のボタンを押した時のハンドラ
    const onClickStatus = (e) => {

        let status = e.target.innerHTML;

        console.log("--onClickStatus--")
        console.log(e)

        /* 未対応-> 処理中 */
        if (status == "未対応") {

            // 要素を「処理中」に変更
            e.target.innerHTML = "処理中";
            e.target.classList.remove("status-inactive")
            e.target.classList.add("status-active")

            //TODO DB登録処理

            /* 処理中-> 処理済み */
        } else if (status == "処理中") {

            // 要素を「処理済み」に変更
            e.target.innerHTML = "処理済み"
            e.target.classList.remove("status-active")
            e.target.classList.add("status-complete")

            //TODO DB登録処理

        } else if (status == "処理済み") {

            // 要素を「未対応」に変更
            e.target.innerHTML = "未対応"
            e.target.classList.remove("status-complete")
            e.target.classList.add("status-inactive")

            //TODO DB登録処理

        }
    }

    return (
        
        <CreateStatus status={status} onClickStatus={onClickStatus} />
    )

}

// 状態の要素を生成するコンポーネント
function CreateStatus({ status, onClickStatus }) {

    if (status == "1") {

        return (<span className="status status-inactive" onClick={onClickStatus}>未対応</span>)

    } else if (status == "2") {

        return (<span className="status status-active" onClick={onClickStatus}>処理中</span>)

    } else {

        return (<span className="status status-complete" onClick={onClickStatus}>処理済み</span>)

    }
}