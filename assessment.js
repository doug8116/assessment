(function() {
    'use strict';
    const userNameInput = document.getElementById('user-name');
    const assessmentButton = document.getElementById('assessment');
    const resultDivided = document.getElementById('result-area');
    const tweetDivided = document.getElementById('tweet-area');
    /**
     * 指定した要素の子どもを全て削除する
     * @param{HTMLElement} element HTML の要素
     * 
     */
    function removeAllChildren(element) {
        while (element.firstChild) { //子供の要素がある限り削除
            element.removeChild(element.firstChild);
        }
    }


    userNameInput.onkeydown = (event) => {
        if (event.keyCode === 13) {

            assessmentButton.onclick(); // TODO ボタンのonclick() 処理を呼び出す
        }
    };


    assessmentButton.onclick = () => {
        const userName = userNameInput.value;
        if (userName.length === 0) { //名前が空なら処理を終了する
            return;
        }


        removeAllChildren(resultDivided);
        const header = document.createElement('h3');
        header.innerText = '診断結果はっぴょ～！';
        resultDivided.appendChild(header);

        const paragraph = document.createElement('p');
        const result = assessment(userName);
        paragraph.innerText = result;
        resultDivided.appendChild(paragraph);
        removeAllChildren(tweetDivided);
        const anchor = document.createElement('a');
        const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AE%E3%81%84%E3%81%84%E3%81%A8%E3%81%93%E3%82%8D&text=' + encodeURIComponent(result);
        anchor.setAttribute('href', hrefValue);
        anchor.className = 'twitter-hashtag-button';
        anchor.innerText = 'tweet #%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AE%E3%81%84%E3%81%84%E3%81%A8%E3%81%93%E3%82%8D';
        tweetDivided.appendChild(anchor);
        twttr.widgets.load();
    };



    const answers = [
        '{userName}のいいところは猟奇性です。{userName}の特徴的な行動はみなを惹きつけ、心に残ります。',
        '{userName}のいいところはお金です。{userName}に見つめられた人は、気になって仕方がないでしょう。',
        '{userName}のいいところは匂いです。{userName}の匂いに周りの人は感化されます。',
        '{userName}のいいところは厳しさです。{userName}の厳しさがあらゆる人の心を折ります。',
        '{userName}のいいところは知識です。知ったかぶりな知識が混じった{userName}を多くの人が頼りにしています。',
        '{userName}のいいところはユニークさです。{userName}だけが知ってます。',
        '{userName}のいいところは用心深さです。{userName}には友達がいません。',
        '{userName}のいいところは見た目です。{userName}の見た目で人を傷つける前に人がいなくなります。',
        '{userName}のいいところは決断力です。{userName}が出来ない決断が、害を為すのを防ぐのです。',
        '{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人はそのことを知りません',
        '{userName}のいいところは感受性です。{userName}が感じたことは皆がピンと来ず、独自の感性を発揮します。',
        '{userName}のいいところは節度です。引っ込み思案の{userName}には、誰も気づいてくれません。',
        '{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えの裏に、捨てられた幾つもの可能性があります。',
        '{userName}のいいところは気配りです。{userName}の配慮は空転し、自身を疲労させます。',
        '{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
        '{userName}のいいところは性欲です。やばいと思ったときにしっかりと衝動を押さえられる{userName}が皆から評価されています。',
        '{userName}のいいところは優しさです。{userName}の優しい雰囲気や立ち振舞に多くの人がつけ込みます。'
    ];
    /**
     * 名前の文字列を渡すと診断結果を返す変数
     * @param{string} userName ユーザーの名前
     * @return{string}　診断結果
     */
    function assessment(userName) {
        //全文字のコード番号を取得してそれを足し合わせる

        let sumOfcharCode = 0;
        for (let i = 0; i < userName.length; i++) {
            sumOfcharCode = sumOfcharCode + userName.charCodeAt(i);

        }

        //文字のコード番号の合計を回答の数で割って添字の数値を求める
        const index = sumOfcharCode % answers.length;
        let result = answers[index];
        result = result.replace(/\{userName\}/g, userName);



        //TODO 診断結果を実装する
        return result;
    }
    console.assert(
        assessment('太郎') === 　assessment('太郎'),
        '1.診断結果の文言の特定の部分を名前を置き換える処理が正しくありません。'

    );


})();
