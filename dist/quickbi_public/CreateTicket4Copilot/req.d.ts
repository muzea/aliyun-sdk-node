export interface CreateTicket4CopilotRequest {
    /**
     * 开通嵌入的智能小Q 模块 ID。
     * @example `ccd3428c-dd23-460c-a608-26bae29dffee`
     */
    "CopilotId": string;
    /**
     * ticket的票据数量取值范围：
     * - 默认值为1。
     * - 建议值为1。
     * - 最大值为99999。
     * 每次使用票据访问后，Ticket的票据数量减1。
     * @example `1`
     */
    "TicketNum"?: number;
    /**
     * Quick BI的UserId。
     * - 您可以调用【3.1.7 根据三方账号获取用户具体信息】或者其他接口获取。
     * <notice>注意：userId和accountName只填一个即可，不填时默认绑定报表的owner，访问报表时将以该用户身份访问。</notice>
     * @example `9c-asdawf-casxcasd-asdasd`
     */
    "UserId"?: string;
    /**
     * 用户的账号名称。
     * <notice>注意：userId和accountName只填一个即可，不填时默认绑定报表的owner，访问报表时将以该用户身份访问。</notice>
     * @example `测试用户`
     */
    "AccountName"?: string;
    /**
     * 用户的账号类型:
     * - 1：阿里云主账号
     * - 3：QuickBI 自建账号。
     * - 4：钉钉
     * - 5：阿里云RAM账号
     * - 6：三方账号（SAML、OAuth等协议对对接的账号）
     * - 9：企业微信
     * - 10：飞书
     * <notice>注意：accountName不为空，则accountType不能为空。</notice>
     * @example `1`
     */
    "AccountType"?: number;
    /**
     * 过期时间。
     * - 单位分钟，最大240（4小时）。
     * - 默认240。
     * @example `200`
     */
    "ExpireTime"?: number;
}
