export interface QuerySendDetailsResponse {
    /**
     * 访问被拒绝详细信息。
     * @example `无`
     */
    AccessDeniedDetail: string;
    /**
     * 列表数据总数。
     * @example `42`
     */
    TotalCount: number;
    /**
     * 状态码的描述。
     * @example `成功`
     */
    Message: string;
    /**
     * 请求结果数据。
     */
    Model: {
        /**
         * 短信模板CODE。
         * 请在控制台**国内消息**或**国际/港澳台消息**页面中的**模板管理**页签下**模板CODE**一列查看。
         * >必须是已添加、并通过审核的模板CODE；且发送国际/港澳台消息时，请使用国际/港澳台短信模版。
         * @example `SMS_12231****
        `
         */
        TemplateCode: string;
        /**
         * 短信接收日期和时间。
         * @example `2019-01-08 16:44:13
        `
         */
        ReceiveDate: string;
        /**
         * 手机号。
         * @example `1390000****
        `
         */
        PhoneNum: string;
        /**
         * 短信内容。
         * @example `203160`
         */
        Content: string;
        /**
         * 短信发送状态。
         * - 1：等待回执。
         * - 2：发送失败。
         * - 3：发送成功。
         * @example `3`
         */
        SendStatus: number;
        /**
         * 外部流水扩展字段。
         * @example `12131231`
         */
        OutId: string;
        /**
         * 短信发送日期，支持查询最近30天的记录。
         * 格式为yyyyMMdd，例如20181225。
         * @example `2019-01-08 16:44:13
        `
         */
        SendDate: string;
        /**
         * 运营商短信状态码。
         * - 短信发送成功：DELIVERED。
         * - 短信发送失败：发送失败，详情请参见[错误码](https://help.aliyun.com/document_detail/101347.html?spm=a2c4g.419277.0.i8)。
         * @example `DELIVERED`
         */
        ErrCode: string;
    }[];
    /**
     * 请求状态码。
     * 返回OK代表请求成功。
     * 其他错误码，请参见[错误码列表](https://help.aliyun.com/document_detail/101346.html?spm=a2c4g.419277.0.i11)。
     * @example `OK`
     */
    Code: string;
    /**
     * 调用API是否成功。
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
}
