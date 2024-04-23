// 全てのソースファイルの情報をサーバから取得する関数
export async function getAllSourcefile() {
    try {

        // Tomcatにデプロイした場合のURL（コンテキストパスがsourcecode-reading-recorder）
        // http://localhost:8080/sourcecode-reading-recorder/get-all-sourcefile
        const response = await fetch("http://localhost:8080/get-all-sourcefile");
        const res = await response.json();
        return res;
    } catch (err) {

        console.log(err);
    }
}

// 引数に与えられたidでソースファイルの状態を更新
export async function updateStatus(sourcefileId, statusId) {

    console.log("---updateStatus---")

    try {

        const response = await fetch(`http://localhost:8080/update-status?sourceFileId=${sourcefileId}&statusId=${statusId}`);
    } catch (err) {

        console.log(err);
    }
}