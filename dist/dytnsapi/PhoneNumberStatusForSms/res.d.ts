export interface PhoneNumberStatusForSmsResponse {
    /**
     * 请求状态码。取值：
     * - **OK**：请求成功。
     * - **OperatorLimit**：运营商禁止查询的手机号。
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
     * 公共参数，每个请求返回的ID都是唯一的，可用于排查和定位问题。
     * @example `68A40250-50CD-034C-B728-0BD135850177`
     */
    RequestId: string;
    /**
     * 结构体
     */
    Data: {
        /**
         * 检测手机号返回状态。取值：
         * - **NORMAL**：正常。
         * - **SHUTDOWN**：停机。
         * - **POWER_OFF**：关机。
         * - **NOT_EXIST**：空号。
         * - **DEFECT**：异常号码。
         * - **UNKNOWN**：未知。
         * >因运营商系统调整，中国电信的号码不支持返回：忙、疑似关机、关机状态。 [详见官网公告](https://help.aliyun.com/document_detail/2489709.html)
         * @example `NORMAL`
         */
        Status: string;
        /**
         * 号码当前归属的基础运营商。如果查询的号码存在携号转网，则返回携号转网后的基础运营商。取值：
         * - **CMCC**：中国移动
         * - **CUCC**：中国联通
         * - **CTCC**：中国电信
         * > 暂不支持中国广电的号码查询。
         * @example `CMCC`
         */
        Carrier: string;
    };
}
