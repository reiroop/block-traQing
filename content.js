const observer = new MutationObserver(() => {
  const elementsToHide = document.querySelectorAll(
    [
      "button._container_wvyby_1._item_1ayy2_16:nth-of-type(4)", // アクティビティ
      "button._container_wvyby_1._item_1ayy2_16:nth-of-type(5)", // ユーザー一覧
      "button._button_13ffs_1:nth-of-type(1)", // チャンネルリストのチャンネル一覧
      "button._container_155zf_1._container_1y1aw_1._item_1aipo_8:nth-of-type(1)", // メッセージ検索
      "button._container_155zf_1._container_1y1aw_1._item_1aipo_8:nth-of-type(3)", // QRコード
      "div._item_1wkxu_1:nth-last-of-type(1)", // ホームのチャンネルリスト
      "div._container_1kjot_1._filter_167f8_1", // チャンネルリストのチャンネル検索
      "div._stampPickerOpener_1jxdq_40", // メッセージのスタンプピッカーオープナー
      "button._trigger_otpxq_1", // 関連チャンネルを表示
      "div._container_11y7a_1:nth-of-type(3)", // チャンネル内検索
      "div._container_155jc_1._sidebarItem_r9yxh_1:nth-of-type(5)", // サイドバーの関連チャンネル
      "section._section_1gwnw_1:nth-of-type(2)", // ユーザーモーダルのホームチャンネル
      "div._container_xlzn7_1._element_nywws_1:has(._container_q1hvm_1:not([data-is-noticeable]))", // メンション・DM以外の未読通知
      "div._subtitleContainer_1ifc9_1", // ホームチャンネル・未読通知のタイトル
      "div._indicator_wvyby_40", // ホームの未読通知インジケータ
    ].join(",")
  );
  // 非表示に
  elementsToHide.forEach((e) => {
    e.style.display = "none";
  });

  if (window.location.pathname === "/channels/gps/times/rei") {
    const elementsToHide = document.querySelectorAll(
      [
        "div._container_loeje_1._rest_15cyz_21", // チャンネル閲覧者
        // "svg._toggleButton_1jxdq_7", // スタンプを押した人の一覧
        "div._container_155jc_1._sidebarItem_r9yxh_1:nth-of-type(1)", // サイドバーのチャンネル閲覧者
      ].join(",")
    );
    // 非表示に
    elementsToHide.forEach((e) => {
      e.style.display = "none";
    });

    const elementsToRemoveTitle =
      document.querySelectorAll("div._body_ycpx4_1"); // メッセージのスタンプ
    // title 属性を削除
    elementsToRemoveTitle.forEach((e) => {
      e.removeAttribute("title");
    });
  }
});

// body を監視
observer.observe(document.body, { childList: true, subtree: true });
