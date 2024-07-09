export interface DescribeSmsDetailResponse {
    /**
     * 明细的总数。
     * @example `1`
     */
    TotalItem: number;
    /**
     * 当前页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 请求ID。
     * @example `5A6229C0-E156-48E4-B6EC-0F528BDF60D2`
     */
    RequestId: string;
    /**
     * 错误码。关于错误码的详细介绍，请参见**[错误码](~~215421~~)**。
     * @example `200`
     */
    Code: string;
    /**
     * 请求信息的响应消息。
     * @example `success`
     */
    Message: string;
    /**
     * 总页数。
     * @example `1`
     */
    TotalPage: number;
    /**
     * 单页最多显示的明细数量。支持最多显示100条。
     * @example `10`
     */
    PageSize: number;
    /**
     * 结果列表。
     */
    Items: {
        /**
         * 发送明细错误码的错误信息。
         * @example `用户接收成功`
         */
        ErrorMessage: string;
        /**
         * 运营商接收的时间。
         * @example `2021-04-28 12:00:00`
         */
        ReceiveDate: string;
        /**
         * 发送给运营商的时间。
         * @example `2021-04-28 12:00:00`
         */
        SendDate: string;
        /**
         * 发送回执ID。
         * @example `qwer^xxxxxxxx`
         */
        BizId: string;
        /**
         * 发送的时间。
         * @example `2021-04-28 12:00:00`
         */
        TaskDate: string;
        /**
         * 模板ID。
         * @example `SMS_0000`
         */
        TemplateCode: string;
        /**
         * 客户服务端自定义的业务唯一标识，用于后续定位问题。支持最长为32位的字母数字组合，请确保该值是唯一的。
         * @example `qwertyuiopasdfghjklzxcvbnmqxxxx`
         */
        OuterOrderNo: string;
        /**
         * 智能反诈服务向运营商请求发送闪信的响应状态码。
         * @example `DELIVERED`
         */
        ErrorCode: string;
        /**
         * 接收闪信的11位手机号码。
         * @example `1500000xxxx`
         */
        Mobile: string;
        /**
         * 发送条数。140字节算一条闪信，当闪信长度超过140字节时，会自动拆分成多条闪信发送。
         * @example `1`
         */
        SmsSize: number;
        /**
         * 发送的内容。
         * @example `【反诈专用】凡是网络投资理财声称有"专业指导"，许诺有"高额回报"、"稳赚不赔"的，都是诈骗！`
         */
        Content: string;
        /**
         * 签名类型。关于签名的问题，请联系运营人员。
         * @example `反诈专用`
         */
        SignName: string;
        /**
         * 表示闪信发送状态。取值：
         *   - **SUCCESS**：表示闪信已发送成功。
         *   - **FAILED**：表示闪信发送失败。
         *   - **RECEIPT**：表示闪信已经成功发送给业务用户，但是没有收到用户的回执。
         * @example `SUCCESS`
         */
        SendStatus: string;
    }[];
}
