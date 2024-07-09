export interface DeductOutstandingBalanceResponse {
    /**
     * 结果代码，候选值:
     * 200: OK
     * 1109: 系统错误
     * @example `200`
     */
    Code: string;
    /**
     * 同Code参数值
     * @example `200`
     */
    Message: string;
    /**
     * 候选值:True/False，代表了是否当前API调用本身是成功的。不代表后续 业务操作的成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求id，阿里云为该请求生成的唯一标识符。
     * @example `9C14ADFE-DF0A-54D4-8BD5-45D0839246B4`
     */
    RequestId: string;
}
