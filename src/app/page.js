import Table from "@/components/S01_Table";
import { getAllPackage, getAllSourcefile } from "@/script/S01_home";

export default async function Home() {

  // 初期表示処理でソースファイルの一覧を取得する
  let allSourcefile = await getAllSourcefile();
  console.log("------allSourcefile------")
  console.log(allSourcefile)
  console.log("------------")

  // 初期表示処理でパッケージの一覧を取得する
  let allPackage = await getAllPackage();
  console.log("------allPackage------")
  console.log(allPackage)
  console.log("------------")

  return (
    <main>
      <header>
        <h1 className="title">SourceCode Reading Recorder</h1>
      </header>

      {/* <!-- セレクトボックスとテーブル --> */}
      <div className="result-set">

        <Table allSourcefile={allSourcefile} allPackage={allPackage} />
      
      </div>
    </main>
  );
}
