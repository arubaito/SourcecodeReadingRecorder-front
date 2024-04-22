

import Record from "@/components/S01_Record";
import { onClickStatus } from "@/script/S01_home";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <main>
      <header>
        <h1 class="title">SourceCode Reading Recorder</h1>
      </header>

      {/* <!-- テーブルと表示フォルダ --> */}
      <div class="result-set">

        {/* <!-- 表示フォルダ --> */}
        <div class="select-folder-wrapper">
          <form>
            <label>表示中：</label>
            <div class="select-folder">
              <select name="select-folder" id="select-folder" onchange="">
                <option value="folder1">すべて表示</option>
                <option value="folder1">フォルダ１</option>
                <option value="folder2">フォルダ２</option>
                <option value="folder3">フォルダ３</option>
              </select>
            </div>
          </form>
        </div>

        {/* <!-- テーブル --> */}
        <div class="table">
          <table>
            <thead>
              <tr>
                <th>種別</th>
                <th class="header-source">ソースファイル名</th>
                <th>状態</th>
                <th>完了日</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <span class="type type-java">Java</span>
                </td>
                <td class="source">AggregateFunction.java</td>
                <td>
                  <span class="status status-inactive">未対応</span>
                </td>
                <td>2024/03/26</td>
              </tr>
              <tr>
                <td>
                  <span class="type type-java">Java</span>
                </td>
                <td class="source">CredentialValidator.java</td>
                <td>
                  <span class="status status-complete">処理済み</span>
                </td>
                <td>
                  <span class="date-register">登録</span>
                </td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>
      <Script src="../script/S01_home.js"></Script>
    </main>

  );
}
