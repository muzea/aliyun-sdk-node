export interface PhoneNumberStatusForVirtualResponse {
    /**
     * 请求状态码。取值：
     * - **OK**：成功。
     * - **OperatorLimit**：运营商禁止查询的手机号。
     * - **RequestFrequencyLimit**：因运营商限制，禁止在短时间内高频对同一个号码进行反复查询，如返回此错误码，请您稍后再试。
     * @example `OK`
     */
    Code: string;
    /**
     * 返回状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47`
     */
    RequestId: string;
    /**
     * 结构体
     */
    Data: {
        /**
         * 是否是运营商的虚拟号码。取值：
         * - **true**：是
         * - **false**：否
         * @example `true`
         */
        IsPrivacyNumber: boolean;
    };
}
