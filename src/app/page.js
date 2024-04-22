import Record from "@/components/S01_Record";
import SelectFolder from "@/components/S01_SelectFolder";
import { getAllSourcefile, onClickStatus } from "@/script/S01_home";
// import { useEffect } from "react";

export default function Home() {

  // 初期表示処理でソースファイルの一覧を取得する
  // let allSourcefile;
  // useEffect(() => {
  //   (async () => {
  //     allSourcefile = await getAllSourcefile();
  //     console.log(allSourcefile)
  //   })()
  // }, []);


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
                <th>完了日</th>
              </tr>
            </thead>

            <tbody>
              {/* {
                allSourcefile.map(({categoryId, sourcefileName, statusId, sourcecodeCompleteDate=""}) => {
                  return (
                    <Record
                    category={categoryId}
                    sourcefile={sourcefileName}
                    status={statusId}
                    completeDate={sourcecodeCompleteDate == "" ? "" : sourcecodeCompleteDate}
                  />    
                  );
                })
              } */}

              <Record
                category="1"
                sourcefile="CredentialValidator.java"
                status="1"
                completeDate="2024/03/26"
              />
              <Record
                category="1"
                sourcefile="Aggregate.java"
                status="2"
              />
              <Record
                category="1"
                sourcefile="AggregateFunction.java"
                status="3"
                completeDate="2024/03/26"
              />
            </tbody>

          </table>
        </div>
      </div>
    </main>

  );
}
