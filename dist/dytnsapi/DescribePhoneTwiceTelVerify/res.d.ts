export interface DescribePhoneTwiceTelVerifyResponse {
    /**
     * 公共参数，每个请求返回的ID都是唯一的，可用于排查和定位问题。
     * @example `68A40250-50CD-034C-B728-0BD135850177`
     */
    RequestId: string;
    /**
     * 请求状态码。取值：
     * - **OK**：请求成功。
     * - **PortabilityNumberNotSupported**：不支持的携号转网号码。
     * - **RequestNumberNotSupported**：不支持中国广电号码（192开头）和虚拟运营商号码的查询。
     * - **RequestFrequencyLimit**：因运营商限制，禁止在短时间内高频对同一个号码进行反复查询，如返回此错误码，请您稍后再试。
     * > 当Code取值为OK，且VerifyResult值不为0时计费，计费文档请参见[号码百科定价](~~154751~~)。
     * >
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 结构体。
     */
    Data: {
        /**
         * 查询结果。取值：
         * - **0**：无法判断。
         * - **1**：是二次放号。
         * - **2**：不是二次放号。
         * - **3**：号码已注销。
         * @example `1`
         */
        VerifyResult: string;
        /**
         * 运营商。取值：
         * - **CMCC**：中国移动。
         * - **CUCC**：中国联通。
         * - **CTCC**：中国电信。
         * > 返回当前号码的归属运营商，如果该号码存在携号转网的情况，则返回携号转网后的运营商。
         * @example `CMCC`
         */
        Carrier: string;
    };
}
