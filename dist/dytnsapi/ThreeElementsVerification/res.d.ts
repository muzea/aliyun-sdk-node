export interface ThreeElementsVerificationResponse {
    /**
     * 请求状态码。
     * - **OK**：请求成功。
     * - 其他错误码，请参见本章的错误码表。
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
     * 请求ID。
     * @example `CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47`
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
         * @example `中国移动`
         */
        BasicCarrier: string;
        /**
         * 验证结果是否一致。返回：
         * - **1**：一致
         * - **0**：不一致
         * - **2**：查无
         * >不同运营商、不同城市的数据更新时效，通常在T+1至T+3之间。
         * 不同的运营商手机号，在不同状态下，核验结果如下：
         * |运营商/手机号状态|停机|空号|销号|
         * |--|--|--|--|
         * |中国移动|正常核验|查无|查无|
         * |中国联通|正常核验|不一致|不一致|
         * |中国电信|正常核验|查无|查无|
         * @example `1`
         */
        IsConsistent: number;
    };
}
