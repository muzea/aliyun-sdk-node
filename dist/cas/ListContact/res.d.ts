export interface ListContactResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `31C66C7B-671A-4297-9187-2C4477247A74`
     */
    RequestId: string;
    /**
     * 搜索总数量。
     * @example `12`
     */
    TotalCount: number;
    /**
     * 分页查询时，设置每页显示证书的数量。默认值为**20**。
     * @example `20`
     */
    ShowSize: number;
    /**
     * 分页查询时，设置当前页面的页码。默认值为**1**。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 模糊查询关键词。
     * @example `186`
     */
    Keyword: string;
    /**
     * 联系人列表。
     */
    ContactList: {
        /**
         * 联系人ID。
         * @example `519580`
         */
        ContactId: number;
        /**
         * 联系人姓名。
         * @example `张三`
         */
        Name: string;
        /**
         * 手机号码。
         * @example `139****8888`
         */
        Mobile: string;
        /**
         * 手机号码是否被验证。
         * @example `1`
         */
        MobileStatus: number;
        /**
         * 联系人电子邮件地址。
         * @example `username@example.com`
         */
        Email: string;
        /**
         * 邮件地址是否被通过验证。
         * @example `1`
         */
        EmailStatus: number;
        /**
         * 机器人地址。
         * @example `[\"https://open.feishu.cn/open-apis/bot/v2/hook/XXX\",\"https://oapi.dingtalk.com/robot/send?access_token=XXX\",\"https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=XXX\"]`
         */
        Webhooks: string;
    }[];
}
