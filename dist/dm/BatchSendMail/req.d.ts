export interface BatchSendMailRequest {
    /**
     * 预先创建且通过审核的模板名称。
     * @example `test1`
     */
    "TemplateName": string;
    /**
     * 管理控制台中配置的发信地址。
     * @example `test@example.com`
     */
    "AccountName": string;
    /**
     * 预先创建且上传了收件人的收件人列表名称，注意：收信人列表需要在触发任务之后至少10分钟后再删除，否则容易引起发信失败
     * @example `test2`
     */
    "ReceiversName": string;
    /**
     * - 0：为随机账号
     * - 1：为发信地址
     * @example `1`
     */
    "AddressType": number;
    /**
     * 邮件标签名称。
     * @example `test3`
     */
    "TagName"?: string;
    /**
     * 回信地址
     * @example `test2***@example.net`
     */
    "ReplyAddress"?: string;
    /**
     * 回信地址别称
     * @example `小红`
     */
    "ReplyAddressAlias"?: string;
    /**
     * - 1：为打开数据跟踪功能
     * - 0（默认）：为关闭数据跟踪功能
     * @example `0`
     */
    "ClickTrace"?: string;
    /**
     * 生成的退订链接类型。参照[退订功能生成链接和过滤机制](https://help.aliyun.com/document_detail/2689048.html)文档
     * - disabled: 不生成
     * - default: 采用默认策略：对批量类型的发信地址发给特定域名时会生成退订链接，如带有关键字"gmail", "yahoo",
     * "google", "aol.com", "hotmail",
     * "outlook", "ymail.com"等
     * - zh-cn: 生成，给将来埋点到内容准备
     * - en-us: 生成，给将来埋点到内容准备
     * @example `default`
     */
    "UnSubscribeLinkType"?: string;
    /**
     * 过滤级别。参照[退订功能生成链接和过滤机制](https://help.aliyun.com/document_detail/2689048.html)文档
     * - disabled: 不过滤
     * - default: 采用默认策略，批量地址采用发信地址级别过滤
     * - mailfrom: 发信地址级别过滤
     * - mailfrom_domain: 发信域名级别过滤
     * - edm_id: 账号级别过滤
     * @example `mailfrom_domain`
     */
    "UnSubscribeFilterLevel"?: string;
}
