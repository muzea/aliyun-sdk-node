export interface DescribePhoneNumberOperatorAttributeResponse {
    AccessDeniedDetail: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `68A40250-50CD-034C-B728-0BD135850177`
     */
    RequestId: string;
    /**
     * 结构体。
     */
    Data: {
        /**
         * 基础运营商。取值：
         * - **中国移动**。
         * - **中国联通**。
         * - **中国电信**。
         * - **中国广电**。
         * @example `中国移动`
         */
        BasicCarrier: string;
        /**
         * 号码归属号段。
         * @example `139`
         */
        NumberSegment: number;
        /**
         * 是否携号转网。取值：
         * - **true**：是
         * - **false**：否
         * @example `false`
         */
        IsNumberPortability: boolean;
        /**
         * 实际运营商（含虚拟运营商），如果存在携号转网，则为携转后的运营商。
         * @example `中国移动`
         */
        Carrier: string;
        /**
         * 号码归属城市。
         * @example `杭州`
         */
        City: string;
        /**
         * 号码归属省份。
         * @example `浙江`
         */
        Province: string;
    };
    /**
     * 请求状态码。取值：
     * - **OK**：成功。
     * - **InvalidParameter**：传入的手机号错误或参数格式错误。
     * - **PhoneNumberNotfound**：传入的手机号查不到归属结果。
     * - **isp.UNKNOWN**：未知异常。
     * - **RequestFrequencyLimit**：因运营商限制，禁止在短时间内高频对同一个号码进行反复查询，如返回此错误码，请您稍后再试。
     * @example `OK`
     */
    Code: string;
}
