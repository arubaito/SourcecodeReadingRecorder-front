'use client'

import Record from "@/components/S01_Record";
import { getSourceFileByPackageId } from "@/script/S01_home";
import { useState } from "react";

export default function Table({ allSourcefile, allPackage }) {

    // セレクトボックスの値に応じて表のソースファイルを書き換えるためにStateで管理
    const [sourcefiles, setSourcefiles] = useState(allSourcefile);

    // セレクトボックスの値が変わった時のハンドラ
    const onChangePackage = async (e) => {

        // DBから選択されたパッケージのファイルを取得
        let sourcefilesByPackageId = await getSourceFileByPackageId(e.target.value);
        console.log("---sourcefilesByPackageId---")
        console.log(sourcefilesByPackageId)

        // Stateを更新してテーブルを書き換える
        setSourcefiles(sourcefilesByPackageId)
    }

    return (
        <>
            {/* セレクトボックス */}
            <div div className="select-folder-wrapper" >
                <form>
                    <label>表示中：</label>
                    <div className="select-folder">
                        <select name="select-folder" id="select-folder" onChange={onChangePackage}>
                            <option value="0">すべて表示</option>
                            {
                                // APIから取得したパッケージを選択肢にする
                                allPackage.map(({ packageId, packageName }) => {
                                    return (
                                        <option value={packageId}>{packageName}</option>
                                    );
                                })
                            }
                        </select>
                    </div>
                </form>
            </div>

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
                            sourcefiles.map(({ sourcefileId, categoryId, sourcefileName, statusId, completeDate = "" }) => {
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
        </>
    )
}