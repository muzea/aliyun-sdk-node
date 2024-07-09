export interface InvalidPhoneNumberFilterResponse {
    /**
     * 请求ID。
     * @example `CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47`
     */
    RequestId: string;
    /**
     * 请求状态码。取值：
     * - **OK**：成功。
     * - **MobileNumberIllegal**：手机号非法。
     * - **EncyrptTypeIllegal**：加密类型非法。
     * - **MobileNumberTypeNotMatch**：手机号码与加密类型不匹配。
     * - **CarrierIllegal**：运营商类型非法。
     * - **AuthCodeNotExist**：授权码不存在。
     * - **PortabilityNumberNotSupported**：不支持携号转网。
     * - **Unknown**：未知异常。
     * - **AuthCodeAndApiNotMatch**：系统异常。
     * - **AuthCodeAndApiNotMatch**：AuthCode与API接口不匹配。
     * - **RequestFrequencyLimit**：因运营商限制，禁止在短时间内高频对同一个号码进行反复查询，如返回此错误码，请您稍后再试。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 数组。
     */
    Data: {
        /**
         * 返回过滤的结果。
         * - **YES**：有效状态号码，返回映射关系。
         * - **NO**：无效状态号码，不返回映射关系。
         * @example `YES`
         */
        Code: string;
        /**
         * 原始号码。
         * @example `1390000****`
         */
        OriginalNumber: string;
        /**
         * 加密后的号码。
         * @example `1400513****`
         */
        EncryptedNumber: string;
        /**
         * 号码过期时间。
         * @example `2022-05-27 16:05:23`
         */
        ExpireTime: string;
    }[];
}
