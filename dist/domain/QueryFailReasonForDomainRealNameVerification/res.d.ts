export interface QueryFailReasonForDomainRealNameVerificationResponse {
    /**
     * 唯一请求识别码。
     * @example `1F1BA893-AD33-4248-8CB8-1657E3733052`
     */
    RequestId: string;
    /**
     * 实名认证失败原因列表。
     */
    Data: {
        /**
         * 日期。
         * @example `2017-03-17 11:08:02`
         */
        Date: string;
        /**
         * 实名认证失败原因。
         * @example `审核失败，所有者（中文）字段必须包含中文字符。`
         */
        FailReason: string;
        /**
         * 命名审核状态。取值：
         * - **NONAUDIT**：未认证。
         * - **SUCCEED**：成功。
         * - **FAILED**：审核失败。
         * - **AUDITING**：审核中。
         *
         * @example `SUCCEED`
         */
        DomainNameVerificationStatus: string;
    }[];
}
