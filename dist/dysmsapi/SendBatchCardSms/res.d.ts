export interface SendBatchCardSmsResponse {
    /**
     * 请求状态码。
     * * 返回OK代表请求成功。
     * * 其他错误码，请参见[API错误码](~~101346~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 请求ID。
     * @example `A90E4451-FED7-49D2-87C8-00700A8C4D0D`
     */
    RequestId: string;
    /**
     * 调用接口是否成功。取值：
     * - **true**
     * - **false**
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 发送卡片短信的手机号。
         * @example `1390000****`
         */
        MediaMobiles: string;
        /**
         * 卡片短信发送ID。
         * @example `123`
         */
        BizCardId: string;
        /**
         * 数字短信发送ID。
         * @example `3214`
         */
        BizDigitalId: string;
        /**
         * 卡片短信模板审核状态。
         * - **0**：审核中
         * - **1**：审核通过
         * - **2**：审核不通过
         * > 审核不通过的短信走回落流程。
         * @example `0`
         */
        CardTmpState: number;
        /**
         * 回落的手机号。
         * @example `1390000****`
         */
        NotMediaMobiles: string;
        /**
         * 文本短信发送ID。
         * @example `3256`
         */
        BizSmsId: string;
    };
}
