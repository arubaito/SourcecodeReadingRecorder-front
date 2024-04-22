export default function SelectFolder() {
    return (
        <div div className="select-folder-wrapper" >
            <form>
                <label>表示中：</label>
                <div className="select-folder">
                    <select name="select-folder" id="select-folder">
                        <option value="folder1">すべて表示</option>
                        <option value="folder1">フォルダ１</option>
                        <option value="folder2">フォルダ２</option>
                        <option value="folder3">フォルダ３</option>
                    </select>
                </div>
            </form>
        </div>
    )
}