import Record from "@/components/S01_Record";
import SelectFolder from "@/components/S01_SelectFolder";
import { getAllSourcefile } from "@/script/S01_home";

export default async function Home() {

  // 初期表示処理でソースファイルの一覧を取得する
  let allSourcefile = await getAllSourcefile();
  console.log("------allSourcefile------")
  console.log(allSourcefile)
  console.log("------------")

  return (
    <main>
      <header>
        <h1 className="title">SourceCode Reading Recorder</h1>
      </header>

      {/* <!-- テーブルと表示フォルダ --> */}
      <div className="result-set">

        <SelectFolder />

        {/* <!-- テーブル --> */}
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>種別</th>
                <th className="header-source">ソースファイル名</th>
                <th>状態</th>
                <th className="header-complete-date">完了日</th>
              </tr>
            </thead>

            <tbody>
              {
                allSourcefile.map(({sourcefileId, categoryId, sourcefileName, statusId, completeDate = "" }) => {
                  return (
                    <Record
                      sourcefileId={sourcefileId}
                      category={categoryId}
                      sourcefile={sourcefileName}
                      status={statusId}
                      completeDate={completeDate == "" ? "" : completeDate}
                    />
                  );
                })
              }
            </tbody>

          </table>
        </div>
      </div>
    </main>

  );
}
