'use client'

/**
 * 状態ボタンを押したときの関数
 * 
 * ボタンをクリックしたら、ボタンの状態に応じて表示内容を切り替える。
 * 未対応-> 処理中 -> 処理済み 
 * */

export function onClickStatus(e) {

	console.log(e);

	let status = e.target.innerHTML;

	// 未対応-> 処理中
	if (status == "未対応") {

		e.target.outerHTML = "<span class=\"status status-active\">処理中</span>"

		// 変更した要素にハンドラ登録
		let statuses = document.getElementsByClassName('status')
		for (let i = 0; i < statuses.length; i++) {
			statuses[i].addEventListener("click", onClickStatus)
		}

		//TODO DB登録処理

		// 処理中-> 処理済み
	} else if (status == "処理中") {

		e.target.outerHTML = "<span class=\"status status-complete\">処理済み</span>"

		// 変更した要素にハンドラ登録
		let statuses = document.getElementsByClassName('status')
		for (let i = 0; i < statuses.length; i++) {
			statuses[i].addEventListener("click", onClickStatus)
		}

		//TODO DB登録処理

	} else if (status == "処理済み") {

		e.target.outerHTML = "<span class=\"status status-inactive\">未対応</span>"

		// 変更した要素にハンドラ登録
		let statuses = document.getElementsByClassName('status')
		for (let i = 0; i < statuses.length; i++) {
			statuses[i].addEventListener("click", onClickStatus)
		}

		//TODO DB登録処理

	}

}

export function onClickDateRegister(e) {
	console.log(e)

	// 当日の日付を取得
	let today = new Date();
	let year = today.getFullYear();
	let month = ("0" + (today.getMonth() + 1)).slice(-2);
	let date = ("0" + (today.getDate())).slice(-2);

	let initDate = year + "-" + month + "-" + date;

	e.target.outerHTML = `<span><input type=\"date\" /></span>`;


}
