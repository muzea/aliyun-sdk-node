export interface DescribePhoneNumberOnlineTimeResponse {
    /**
     * 请求ID。
     * @example `CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47`
     */
    RequestId: string;
    /**
     * 请求状态码。取值：
     * - **OK**：请求成功。
     * - **PortabilityNumberNotSupported**：不支持的携号转网号码。
     * - **RequestFrequencyLimit**：因运营商限制，禁止在短时间内高频对同一个号码进行反复查询，如返回此错误码，请您稍后再试。
     * > 当Code取值为OK，且VerifyResult值不为-1时计费，计费文档请参见[号码百科定价](~~154751~~)。
     * >
     * @example `OK`
     */
    Code: string;
    /**
     * 号码状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 结构体。
     */
    Data: {
        /**
         * 在网时长枚举值。枚举值如下：
         * - **-1**：查无时长。
         * - **0**：手机状态异常，例如空号。
         * - **1**：[0-3)月。
         * - **2**：[3-6]月。
         * - **3**：(6-12]月。
         * - **4**：(12-24]月。
         * - **5**：(24，+)月
         * @example `1`
         */
        VerifyResult: string;
        /**
         * 运营商短信状态码。取值：
         * - **CMCC**：中国移动
         * - **CUCC**：中国联通
         * - **CTCC**：中国电信
         * - **CBN**：中国广电
         * @example `CMCC`
         */
        CarrierCode: string;
    };
}
