// 全てのソースファイルの情報をサーバから取得する関数
export async function getAllSourcefile() {
    try {

        // Tomcatにデプロイした場合のURL（コンテキストパスがsourcecode-reading-recorder）
        // http://localhost:8080/sourcecode-reading-recorder/get-all-sourcefile
        const response = await fetch("https://44.223.126.94:8443/sourcecode-reading-recorder/get-all-sourcefile");
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

        const response = await fetch(`https://44.223.126.94:8443/sourcecode-reading-recorder/update-status?sourceFileId=${sourcefileId}&statusId=${statusId}`);
    } catch (err) {

        console.log(err);
    }
}

// 全てのパッケージをサーバから取得する関数
export async function getAllPackage() {
    try {

        const response = await fetch("https://44.223.126.94:8443/sourcecode-reading-recorder/get-all-package");
        const res = await response.json();
        return res;
    } catch (err) {

        console.log(err);
    }
}

// 引数に渡された完了日でソースファイルの完了日を更新
export async function updateCompleteDate(sourcefileId, completeDate) {

    console.log("---updateCompleteDate---")

    try {

        const response = await fetch(`https://44.223.126.94:8443/sourcecode-reading-recorder/update-complete-date?sourceFileId=${sourcefileId}&completeDate=${completeDate}`);
    } catch (err) {

        console.log(err);
    }
}

// 引数に与えられたパッケージidのソースファイルを取得
export async function getSourceFileByPackageId(packageId) {

    console.log("---getSourceFileByPackageId---")

    try {

        const response = await fetch(`https://44.223.126.94:8443/sourcecode-reading-recorder/get-sourcefile?packageId=${packageId}`);
        const res = await response.json();
        return res;
    } catch (err) {

        console.log(err);
    }
}

// 選択された要素の祖先の要素に指定されているid属性のソースファイルIDを取得する
export function findSourcefileId(e) {

    // 親要素がなくなるまでidの検索を繰り返す。ただし親要素にidが設定されていた場合はそのidを返す。
    let node = e.target.parentNode;
    while (node !== null) {

        if (node.id != "") {

            return node.id;
        }

        // 更に親要素を取得
        node = node.parentNode;
    }

    // 祖先要素にidが無い場合（ホントはエラーで処理を中断したい）
    return 0;
}