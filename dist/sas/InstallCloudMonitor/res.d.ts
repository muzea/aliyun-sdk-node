export interface InstallCloudMonitorResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `F92AFB96-FACC-57E7-928E-678D04B94CAE`
     */
    RequestId: string;
    /**
     * 接口调用是否成功。取值：
     * - **true**：接口调用成功。
     * - **false**：接口调用失败。
     * @example `false`
     */
    Success: boolean;
    /**
     * 接口调用失败的错误码。
     * @example `IllegalParam`
     */
    Code: string;
    /**
     * 错误码的详细信息。
     * @example `There was an error with your request.`
     */
    Message: string;
    /**
     * HTTP状态码。
     * @example `400`
     */
    HttpStatusCode: number;
}
