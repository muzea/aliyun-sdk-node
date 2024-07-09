export interface SendCardSmsResponse {
    /**
     * 请求状态码。
     * * 返回OK代表请求成功。
     * * 其他错误码，请参见[错误码列表](~~101346~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 请求ID。
     * @example `F655A8D5-B967-440B-8683-DAD6FF8D28D0`
     */
    RequestId: string;
    /**
     * 调用接口是否成功。取值：
     * - **true**：调用成功。
     * - **false**：调用失败。
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
         * @example `232`
         */
        BizDigitalId: string;
        /**
         * 卡片短信模板审核状态。
         * - **0**：审核中
         * - **1**：审核通过
         * - **2**：审核不通过
         * > 未审核通用的短信走回落流程。
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
         * @example `524`
         */
        BizSmsId: string;
    };
}
