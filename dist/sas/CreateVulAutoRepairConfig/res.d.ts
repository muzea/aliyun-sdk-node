export interface CreateVulAutoRepairConfigResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `6673D49C-A9AB-40DD-B4A2-B92306701AE7`
     */
    RequestId: string;
    /**
     * 请求是否成功。取值：
     * - **true**：是
     * - **false**：否
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 错误码的详细信息。
     * @example `success`
     */
    Message: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
