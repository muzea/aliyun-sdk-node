export interface GetCardSmsLinkResponse {
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~101346~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 请求ID。
     * @example `CC89A90C-978F-46AC-B80D-54738371E7CA`
     */
    RequestId: string;
    /**
     * 是否成功。取值：
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
         * 卡片短信模板审核状态。
         * - **0**：审核中
         * - **1**：审核通过
         * - **2**：审核不通过
         * > 未审核通过的短信走回落流程。
         * @example `0`
         */
        CardTmpState: number;
        /**
         * 不支持卡片短信的手机号。
         * @example `1390000****`
         */
        NotMediaMobiles: string;
        /**
         * 支持卡片短信的手机号码。
         * @example `[\"1390000****\",\"1370000****\"]`
         */
        CardPhoneNumbers: string;
        /**
         * 卡片短信短链。
         * @example `[\"mw2m.cn/LAaGGa\",\"mw2m.cn/LAAaes\"]`
         */
        CardSmsLinks: string;
        /**
         * 用于申请卡片短信短链的短信签名，在发送时签名、接收号码、卡片短信短链要一一对应。
         * @example `["阿里云","阿里云2"]`
         */
        CardSignNames: string;
    };
}
