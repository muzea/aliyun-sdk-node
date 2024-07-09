export interface SingleSendMailRequest {
    /**
     * 管理控制台中配置的发信地址。
     * @example `test***@example.net`
     */
    "AccountName": string;
    /**
     * 地址类型。取值：
     * 0：为随机账号
     * 1：为发信地址
     * @example `1`
     */
    "AddressType": number;
    /**
     * 在邮件推送控制台创建的标签，用于分类所发送的邮件批次，可以通过标签来查询每批邮件的发送情况，另外如果开启邮件跟踪功能，发信必须使用邮件标签。
     * @example `test`
     */
    "TagName"?: string;
    /**
     * 是否启用管理控制台中配置好回信地址（状态须验证通过），取值范围是字符串true或者false（不是bool值）。
     * @example `true`
     */
    "ReplyToAddress": boolean;
    /**
     * 目标地址，多个 email 地址可以用逗号分隔，最多100个地址（支持邮件组）。
     * @example `test1***@example.net`
     */
    "ToAddress": string;
    /**
     * 邮件主题，建议填写。
     * @example `Subject`
     */
    "Subject": string;
    /**
     * 邮件 html 正文，限制28K。注意：HtmlBody和TextBody是针对不同类型的邮件内容，两者必须传其一。
     * @example `body`
     */
    "HtmlBody"?: string;
    /**
     * 邮件 text 正文，限制28K。注意：HtmlBody和TextBody是针对不同类型的邮件内容，两者必须传其一。
     * @example `body`
     */
    "TextBody"?: string;
    /**
     * 发信人昵称，长度小于15个字符。
     * 例如：发信人昵称设置为”小红”，发信地址为 test***@example.net，收信人看到的发信地址为“小红”<test***@example.net>。
     * @example `小红`
     */
    "FromAlias"?: string;
    /**
     * 回信地址
     * @example `test2***@example.net`
     */
    "ReplyAddress"?: string;
    /**
     * 回信地址昵称
     * @example `小红`
     */
    "ReplyAddressAlias"?: string;
    /**
     * 1：为打开数据跟踪功能
     * 0（默认）：为关闭数据跟踪功能。
     * @example `0`
     */
    "ClickTrace"?: string;
    /**
     * 生成的退订链接类型。参照[退订功能生成链接和过滤机制](https://help.aliyun.com/document_detail/2689048.html)文档
     * disabled: 不生成
     * default: 采用默认策略：对批量类型的发信地址发给特定域名时会生成退订链接，如带有关键字"gmail", "yahoo",
     * "google", "aol.com", "hotmail",
     * "outlook", "ymail.com"等
     * zh-cn: 生成，给将来埋点到内容准备
     * en-us: 生成，给将来埋点到内容准备
     * @example `default`
     */
    "UnSubscribeLinkType"?: string;
    /**
     * 过滤级别。参照[退订功能生成链接和过滤机制](https://help.aliyun.com/document_detail/2689048.html)文档
     * disabled: 不过滤
     * default: 采用默认策略，批量地址采用发信地址级别过滤
     * mailfrom: 发信地址级别过滤
     * mailfrom_domain: 发信域名级别过滤
     * edm_id: 账号级别过滤
     * @example `mailfrom_domain`
     */
    "UnSubscribeFilterLevel"?: string;
}
