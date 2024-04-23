import { updateStatus } from "@/script/S01_home";

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

            // 選択した要素のファイルIDを取得
            let sourcefileId =  findSourcefileId(e);

            // DB更新処理
            updateStatus(sourcefileId, 2);

            /* 処理中-> 処理済み */
        } else if (status == "処理中") {

            // 要素を「処理済み」に変更
            e.target.innerHTML = "処理済み"
            e.target.classList.remove("status-active")
            e.target.classList.add("status-complete")

            // 選択した要素のファイルIDを取得
            let sourcefileId =  findSourcefileId(e);

            // DB更新処理
            updateStatus(sourcefileId, 3);

        } else if (status == "処理済み") {

            // 要素を「未対応」に変更
            e.target.innerHTML = "未対応"
            e.target.classList.remove("status-complete")
            e.target.classList.add("status-inactive")

            // 選択した要素のファイルIDを取得
            let sourcefileId =  findSourcefileId(e);

            // DB更新処理
            updateStatus(sourcefileId, 1);
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

// 選択された要素の祖先の要素に指定されているid属性のソースファイルIDを取得する
function findSourcefileId(e){

    // 親要素がなくなるまでidの検索を繰り返す。ただし親要素にidが設定されていた場合はそのidを返す。
    let node = e.target.parentNode;
    while(node !== null){

        if(node.id != ""){

            return node.id;
        }

        // 更に親要素を取得
        node = node.parentNode;
    }

    // 祖先要素にidが無い場合（ホントはエラーで処理を中断したい）
    return 0;
}