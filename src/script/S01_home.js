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