export interface CreateRequestDiagnosisResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求返回的消息。
     * > 请求成功时该参数返回Successful，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 诊断ID，是诊断的唯一标识，后续用于查询诊断结果。
     * @example `61820b594664275c4429****`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `800FBAF5-A539-5B97-A09E-C63AB2F7****`
     */
    RequestId: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: string;
}
