export interface QuerySendDetailsResponse {
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~101346~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `819BE656-D2E0-4858-8B21-B2E477085AAF`
     */
    RequestId: string;
    /**
     * 短信发送总条数。
     * @example `1`
     */
    TotalCount: string;
    SmsSendDetailDTOs: {
        /**
         * 短信发送明细。
         */
        SmsSendDetailDTO: {
            /**
             * 运营商短信状态码。
             * -  短信发送成功：DELIVERED。
             * -  短信发送失败：失败错误码请参见[错误码](~~101347~~)。
             * @example `DELIVERED`
             */
            ErrCode: string;
            /**
             * 短信模板Code。
             * > 如果您选择[测试专用]阿里云通信和[测试专用]阿里云通信测试模板发送的测试短信，此接口不返回TemplateCode等字段信息。
             * @example `SMS_12231****`
             */
            TemplateCode: string;
            /**
             * 外部流水扩展字段。
             * @example `123`
             */
            OutId: string;
            /**
             * 短信接收日期和时间。
             * @example `2019-01-08 16:44:13`
             */
            ReceiveDate: string;
            /**
             * 短信发送日期和时间。
             * @example `2019-01-08 16:44:10`
             */
            SendDate: string;
            /**
             * 接收短信的手机号码。
             * @example `1390000****`
             */
            PhoneNum: string;
            /**
             * 短信内容。
             * @example `【阿里云】验证码为：123，您正在登录，若非本人操作，请勿泄露`
             */
            Content: string;
            /**
             * 短信发送状态，包括：
             * - **1**：等待回执。
             * - **2**：发送失败。
             * - **3**：发送成功。
             * @example `3`
             */
            SendStatus: number;
        }[];
    };
}
