export default function SelectFolder({ allPackage }) {
    return (
        <div div className="select-folder-wrapper" >
            <form>
                <label>表示中：</label>
                <div className="select-folder">
                    <select name="select-folder" id="select-folder">
                        <option value="0">すべて表示</option>
                        {
						    // APIから取得したパッケージを選択肢にする
							allPackage.map(({packageId, packageName}) => {
								return (
									<option value={packageId}>{packageName}</option>
								);
							})
						}
                    </select>
                </div>
            </form>
        </div>
    )
}