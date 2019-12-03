CHANGELOG
=========
### V2.5.3

- HTML 修改 會員等級說明與注意事項
    - rule.html

- 圖片修正
    - member-talbe.png

### V2.5.2

- HTML 修改 會員帳號申請服務畫面
    - request-account-service-step1-v3-3.html

- CSS  (修正會員輸入欄位顯示問題)
    - shortcodes.css

### V2.5.1

- HTML 新增 會員修改已綁定畫面
    - reset-password-bind.html
- HTML 新增 會員修改未綁定畫面
    - reset-password-no-binding.html
- HTML 新增 會員帳號申請服務畫面
    - request-account-service-step1-v3-3.html

- CSS  (修正會員輸入欄位顯示問題)
    - shortcodes.css

### V2.4.1

- HTML 新增 會員修改密碼暫停服務畫面
    - reset-password-stop-service.html

### V2.3.4

- CSS  (修正會員等級說明更新)
    - style.css
    - responsive.css

- 圖片修改

- HTML 修改
    - rule.html 


### V2.3.3

- CSS 修改 (修正首畫面底下方紅利商品 RWD 顯示上的排版問題)
    - style.css

### V2.3.2

- CSS 修改 (修正畫面底部露白的位置問題)
    - responsive.css 

### V2.3.1

- HTML 新增 平台停止服務公告頁面　（獨立頁面, 已包含所需　CSS / SVG 資源）
    - stop-service.html 

### V2.2.3

- CSS 修改
    - style.css 與 shortcodes.css 修正 CK編輯器區塊 與 上傳區的圖片顯示問題

- 圖片 修改
    - favicon.ico , about.jpg 與 member-talbe.png

- HTML 修改
    - index.html CLASS 樣式表調整
       -第 224 行 與 第 238 行 中 <p class="date date-red mgt20">, 請將 mgt20 刪除, 改成 <p class="date date-red"> 即可!
       -第254行 <section class="more-info2 mgt10"> 中 mgt10 刪除 , 修改之後為 <section class="more-info2 ">	
    - about.html 變更內容與圖片
    - rule.html 變更內容與圖片

### V2.2.2
- CSS 修改
    - style.css 檔案修正第 1309行
    - p img { /*修改因用新版CK編輯器產生寬度問題*/
	max-width:100%;
	margin-top:30px; /*避免連續兩張圖以上一起放時, 所有圖片會貼在一起*/

### V2.2.1
- html 內容修改與新增 (會員條款相關文件內容與檔案修改)
    - 修正檔案 :
	policy.html 替換 terms.html  (原來 V6的 會員服務條款)
	privacy.html 替換 policy.html (原來 V6的 隱私權政策)
    -  新增檔案 :
	policyperson.html (個資同意書）

### V2.1.1
- CSS 修改
    - 修正 icon 圖片

### V2.1.0

- CSS 修改     
   - 新增css : .payment-name (套用於 payment-step1.html )

- HTML 修改
   - 修改 payment-step1.html ( 說明 : 充值遊戲名稱由原本 <span>xxxx </span> 改為 <p class="payment-name"> xxxxx </p>  )
   - 修改 payment-step3.html ( 說明 : 增加下方的說明表格  )

### V2.0.0
- HTML 新增
    - 1.關於WG　　-　about.html
    - 2.會員條款　-　terms.html
    - 3.隱私權政策　-　policy.html
    - 4.404 - 404.html
    - 5.全站停機公告　-　announcement.html
    - 6.紅利點數說明　-　about-red-point.html
    - 7.分享邀請碼　-　fb-share.html
    - 8.什麼是邀請碼　-　about-invite.html
    - 9.好友綁定空白頁面 - friend-binding-no-binding.html
- HTML 修改
    - 1. 所有頁面 :　主選單會員按鈕旁添加小紅點的提示功能- index.html 與 相關其他主選單頁面
    - 2. 紅利商成相關頁面 : 將 wg-icon-no 相關的class (例如 :  wg-v0-icon wg-icon-no ) 替換成 ( wg-icon-a ) 即可 , 注意:  wg-icon-no 全面可能有其他不同的等級 icon 圖示, 需一起替換掉才能正常顯示! - shop-list.html
    - 3. 好友綁定頁面 : 輸入框把原本六個框框改成一條長框 (讓用戶可以一次將號碼複製貼上) " - frined-binding.html
- CSS / js / 圖片修改     
    - 修改與新增的圖片 / js / css 統計紀錄 : 
    - images/404.jpg
    - images/fb-share-1.jpg
    - images/fb-share-2.jpg
    - images/fb-share-3.jpg
    - images/invite-mobile.ai.svg
    - images/invite-pc.ai.svg
    - images/member-talbe.png
    - images/wegames-icon-ui.png
    - images/icon/member-rule-1.svg
    - images/icon/member-rule-2.svg
    - images/icon/member-rule-3.svg
    - images/icon/member-rule-4.svg
    - images/icon/member-rule-5.svg
    - images/icon/member-rule-6.svg
    - images/icon/member-v1-unknow.png
    - stylesheets/responsive.css
    - stylesheets/sprite-icon-ui.css
    - stylesheets/style.css
    - javascript/main.js
    - javascript/plugins.js
    - 替換的內容說明 : 
    - 1. 主選單在RWD狀態下無法固定在畫面的上方 - main.js / plugins.js
    - 2. 紅利商品列表頁面的會員等級 icon 圖片更換 (不滿足等級者出現一個新的禁止 icon ) - sprite-icon-ui.css / style.css /responsive.css
    - 3. 修正 Light box 特效在手機端的顯示延遲的問題 - main.js / plugins.js /  sprite-icon-ui.css / style.css /responsive.css
    - 4. 會員等級長條圖片與 會員等級大頭圖片上的圖示錯置

### v1.6.0
- HTML 新增
    - payment-step3-type2.html MyCard 點數儲值輸入卡號頁面
- HTML 修改
    - payment-step1.html 修改公告為 <ul><li> 條列方式呈現

### v1.5.0
- HTML 新增
    - edit-account-no-binding.html 未綁定時會員專頁畫面
    - friend-binding-no-binding.html 未綁定時綁定好友畫面

### v1.4.2
- HTML 修改
    - 再次修改 payment-list.html 與 rule.html 文字內容

### v1.4.1
- HTML 修改
    - 修改 payment-list.html 與 rule.html 文字內容
- CSS 修改 
    - responsive.css 修正 tooltip 在 iOS 行動裝置上的 bug.
- CSS / HTML 修改 (2017/7/20 已經提供重慶)
    - 修正 手機版本底部的 bottom-xs-links <DIV> 框架位置.

### v1.4.0
- HTML 新增
    - [平台任務](http://wgpd.gitlab.wegames.com.tw/prototype/shop-list.html)

### v1.3.2
- CSS 修改
    - style.css 刪除 3674~3724 行資料 (* 與 shortcode.css 重複並干擾顯示的CSS指令)
    - shortcode.css : 733行 修改 (已測試有影響的相關頁面皆顯示正常 )

### v1.3.1
- HTML 修改
    - [信箱驗證](http://wgpd.gitlab.wegames.com.tw/prototype/email-verify.html)    
- CSS 修改
    - style.css 添加 pop-up 遮罩顯示修改
    - cart-message.css 已經與 style.css 整合 , 因此不需要再次呼叫 , 請刪除此 css

### v1.3.0
- HTML 新增
    - [紅利商城](http://wgpd.gitlab.wegames.com.tw/prototype/shop-list.html)
    - [紅利商城詳細頁](http://wgpd.gitlab.wegames.com.tw/prototype/shop-detail.html)
- JS 修改
    - main.js 修改部分內容(請直接覆蓋即可)

### v1.2.1
- HTML 修改
    - [帳號綁定](http://wgpd.gitlab.wegames.com.tw/prototype/binding.html)
    - [手機驗證](http://wgpd.gitlab.wegames.com.tw/prototype/cellphone-verify.html)
    - [會員專區](http://wgpd.gitlab.wegames.com.tw/prototype/edit-account.html)
    - [信箱驗證](http://wgpd.gitlab.wegames.com.tw/prototype/email-verify.html)
    - [忘記密碼步驟2](http://wgpd.gitlab.wegames.com.tw/prototype/forget-password-step2.html)
    - [好友綁定](http://wgpd.gitlab.wegames.com.tw/prototype/frined-binding.html)
    - [我的邀請碼](http://wgpd.gitlab.wegames.com.tw/prototype/frined-invite.html)
    - [遊戲履歷](http://wgpd.gitlab.wegames.com.tw/prototype/game-log.html)
    - [首頁](http://wgpd.gitlab.wegames.com.tw/prototype/index.html)
    - [登入頁](http://wgpd.gitlab.wegames.com.tw/prototype/login.html)
    - [儲值紀錄](http://wgpd.gitlab.wegames.com.tw/prototype/payment-list.html)
    - [儲值-步驟一](http://wgpd.gitlab.wegames.com.tw/prototype/payment-step1.html)
    - [儲值-步驟二](http://wgpd.gitlab.wegames.com.tw/prototype/payment-step2.html)
    - [儲值-步驟三](http://wgpd.gitlab.wegames.com.tw/prototype/payment-step3.html)
    - [紅利取得紀錄](http://wgpd.gitlab.wegames.com.tw/prototype/point-list-get.html)
    - [紅利使用紀錄](http://wgpd.gitlab.wegames.com.tw/prototype/point-list-used.html)
    - [實名認證](http://wgpd.gitlab.wegames.com.tw/prototype/realname-verify.html)
    - [客服中心-FAQ](http://wgpd.gitlab.wegames.com.tw/prototype/request.html)
    - [客服記錄詳細頁](http://wgpd.gitlab.wegames.com.tw/prototype/request-detail.html)
    - [客服記錄](http://wgpd.gitlab.wegames.com.tw/prototype/request-list.html)
    - [重設密碼](http://wgpd.gitlab.wegames.com.tw/prototype/reset-password.html)
    - [會員等級](http://wgpd.gitlab.wegames.com.tw/prototype/rule.html) 

- 修正上述中網頁源始碼的 <div> 與 <form> 閉合問題

### v1.2.0
- HTML 新增
    - [遊戲履歷](http://wgpd.gitlab.wegames.com.tw/prototype/game-log.html)
    - [客服記錄](http://wgpd.gitlab.wegames.com.tw/prototype/request-list.html)
    - [客服記錄詳細頁](http://wgpd.gitlab.wegames.com.tw/prototype/request-detail.html)
    - [客服中心-FAQ](http://wgpd.gitlab.wegames.com.tw/prototype/request.html)
    - [客服中心-提出問題](http://wgpd.gitlab.wegames.com.tw/prototype/faq.html)
    - [儲值-步驟一](http://wgpd.gitlab.wegames.com.tw/prototype/payment.html)
    - [儲值-步驟二](http://wgpd.gitlab.wegames.com.tw/prototype/payment-step2.html)
    - [儲值-步驟三](http://wgpd.gitlab.wegames.com.tw/prototype/payment-step3.html)
    - [帳號綁定](http://wgpd.gitlab.wegames.com.tw/prototype/binding.html)
- HTML 修改
    - [遊戲履歷](http://wgpd.gitlab.wegames.com.tw/prototype/game-log.html)
    - [邀請好友](http://wgpd.gitlab.wegames.com.tw/prototype/frined-invite.html)
    - [綁定帳號](http://wgpd.gitlab.wegames.com.tw/prototype/binding.html)
    - [信箱驗證](http://wgpd.gitlab.wegames.com.tw/prototype/email-verify.html)
    - [手機驗證](http://wgpd.gitlab.wegames.com.tw/prototype/cellphone-verify.html)
    - [儲值紀錄](http://wgpd.gitlab.wegames.com.tw/prototype/payment-list.html)

- 更新部分 stylesheets 與圖片修改原因 : 針對新增頁面修正 CSS 規則 , 並增加手機版新格式表格的顯示方式

### v1.1.3

- 刪除不需要的 css 擋

### v1.1.2
- HTML 修改
    - [首頁](http://wgpd.gitlab.wegames.com.tw/prototype/index.html)
    - [遊戲大廳](http://wgpd.gitlab.wegames.com.tw/prototype/game-center.html)
    - [登入頁](http://wgpd.gitlab.wegames.com.tw/prototype/login.html)
    - [註冊頁](http://wgpd.gitlab.wegames.com.tw/prototype/register.html)
    - [忘記密碼](http://wgpd.gitlab.wegames.com.tw/prototype/forget-password.html)
    - [忘記密碼步驟2](http://wgpd.gitlab.wegames.com.tw/prototype/forget-password-step2.html)
    - [忘記密碼步驟3](http://wgpd.gitlab.wegames.com.tw/prototype/forget-password-step3.html)
    - [會員專區](http://wgpd.gitlab.wegames.com.tw/prototype/edit-account.html)
    - [實名認證](http://wgpd.gitlab.wegames.com.tw/prototype/realname-verify.html)
    - [會員等級](http://wgpd.gitlab.wegames.com.tw/prototype/rule.html)
    - [重設密碼](http://wgpd.gitlab.wegames.com.tw/prototype/reset-password.html)
    - [重設密碼步驟2](http://wgpd.gitlab.wegames.com.tw/prototype/reset-password-step2.html)
    - [手機驗證](http://wgpd.gitlab.wegames.com.tw/prototype/cellphone-verify.html)
    - [信箱驗證](http://wgpd.gitlab.wegames.com.tw/prototype/email-verify.html)
    - [最新消息](http://wgpd.gitlab.wegames.com.tw/prototype/news-list.html)
    - [最新消息內頁](http://wgpd.gitlab.wegames.com.tw/prototype/news-detail.html)
    - [紅利取得紀錄](http://wgpd.gitlab.wegames.com.tw/prototype/point-list-get.html)
    - [紅利使用紀錄](http://wgpd.gitlab.wegames.com.tw/prototype/point-list-used.html)
    - [儲值紀錄](http://wgpd.gitlab.wegames.com.tw/prototype/payment-list.html)
    - [我的邀請碼](http://wgpd.gitlab.wegames.com.tw/prototype/frined-invite.html)
    - [好友綁定](http://wgpd.gitlab.wegames.com.tw/prototype/frined-binding.html)
    - [感謝頁](http://wgpd.gitlab.wegames.com.tw/prototype/thankyou.html)
- 修改 main.js 解決主選單因寬度變小時的異常顯示狀況 (改由小尺寸寬度時就顯示行動裝置選單的功能)
- 更新部分 stylesheets 原因 : 修正 CSS 底部 footer 遮住一些畫面內容 的顯示異常 
- 網頁 HTML 檔案更新原因 : 解決底部 footer DIV 結構因錯置導事在小尺寸時版面錯亂的異常現象!
- 請覆蓋舊檔案即可!

### v1.1.1
- HTML 修改
    - [首頁](http://wgpd.gitlab.wegames.com.tw/prototype/index.html)
    - [遊戲大廳](http://wgpd.gitlab.wegames.com.tw/prototype/game-center.html)
    - [登入頁](http://wgpd.gitlab.wegames.com.tw/prototype/login.html)
    - [註冊頁](http://wgpd.gitlab.wegames.com.tw/prototype/register.html)
    - [忘記密碼](http://wgpd.gitlab.wegames.com.tw/prototype/forget-password.html)
    - [忘記密碼步驟2](http://wgpd.gitlab.wegames.com.tw/prototype/forget-password-step2.html)
    - [忘記密碼步驟3](http://wgpd.gitlab.wegames.com.tw/prototype/forget-password-step3.html)
    - [會員專區](http://wgpd.gitlab.wegames.com.tw/prototype/edit-account.html)
    - [實名認證](http://wgpd.gitlab.wegames.com.tw/prototype/realname-verify.html)
    - [會員等級](http://wgpd.gitlab.wegames.com.tw/prototype/rule.html)
    - [重設密碼](http://wgpd.gitlab.wegames.com.tw/prototype/reset-password.html)
    - [重設密碼步驟2](http://wgpd.gitlab.wegames.com.tw/prototype/reset-password-step2.html)
    - [手機驗證](http://wgpd.gitlab.wegames.com.tw/prototype/cellphone-verify.html)
    - [信箱驗證](http://wgpd.gitlab.wegames.com.tw/prototype/email-verify.html)
    - [最新消息](http://wgpd.gitlab.wegames.com.tw/prototype/news-list.html)
    - [最新消息內頁](http://wgpd.gitlab.wegames.com.tw/prototype/news-detail.html)
    - [紅利取得紀錄](http://wgpd.gitlab.wegames.com.tw/prototype/point-list-get.html)
    - [紅利使用紀錄](http://wgpd.gitlab.wegames.com.tw/prototype/point-list-used.html)
    - [儲值紀錄](http://wgpd.gitlab.wegames.com.tw/prototype/payment-list.html)
    - [我的邀請碼](http://wgpd.gitlab.wegames.com.tw/prototype/frined-invite.html)
    - [好友綁定](http://wgpd.gitlab.wegames.com.tw/prototype/frined-binding.html)
    - [感謝頁](http://wgpd.gitlab.wegames.com.tw/prototype/thankyou.html)
- 新增部分頁面 [感謝頁] [好友綁定] [我的邀請碼]
- 更新部分 stylesheets 原因 : 修正 CSS 中無用的class與無效的註解字串
- 網頁 HTML 檔案更新原因 : 修正網頁連結錯誤與 RWD DIV 顯示異常與導致連結無效與輸入框無法使用的狀況
- 請覆蓋舊檔案即可!

### 2018/12/05 
- HTML 修改	
	-修改3頁 task-detail-sp-new.html，shop-list-new.html，shop-detail-new.html

- CSS 新增
	-style.css 新增 1-242行

### 2018/12/26 
- HTML 修改	
	- 141行加註解
	- 155行 到 159行 文字修改
	- 320行 到 327行 文字修改
	
### 2019/01/03
- HTML 新增
	-game_management.html 
- CSS 修改
	-style.css 修改 1-58行
	-responsive.css 新增 259-265行

### 2019/01/04
- HTML 新增
	-task-detail-sp-new.html, 151行新增<div class="clearfix"></div>
- CSS 修改
	-style.css 修改127-130行
	-style.css 修改71行
### 2019/01/08
- HTML 新增
	-payment-step3.html
	 payment-step3-type2.html
	 policy.html
	 
### 2019/01/09
- HTML 新增
	-request-account-service-step1-v3-3.html
	 application-for-suspension-of-appeal.html
	 apply.html
	 
- CSS 修改
	-style.css 修改1-44行
	
### 2019/01/16
- HTML 新增
	-application-for-suspension-of-appeal.html
	 request-account-service-step1-v3-3.html
	 apply.html
	 