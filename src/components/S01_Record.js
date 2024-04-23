'use client'

import CompleteDate from "./S01_Record_CompleteDate";
import Status from "./S01_Record_Status";

export default function Record({sourcefileId, category, sourcefile, status, completeDate}) {
    
    return (
        <>
            <tr id={sourcefileId}>
                <td>
                    <CreateCategory category={category} />
                </td>
                <td className="source">{sourcefile}</td>
                <td>
                    <Status status={status} />
                </td>
                <td>
                    <CompleteDate completeDate={completeDate} />
                </td>
            </tr>
        </>
    )
}

// 種別の要素を生成するコンポーネント
function CreateCategory({category}){

    // Java
    if(category == "1"){

        return (<span className="type type-java">Java</span>)
    }
}