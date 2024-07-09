export interface ConfigNetStatusResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `B0949F09-B9C1-1D5E-8F27-0A5BF3CD5D95`
     */
    RequestId: string;
    /**
     * 返回信息。
     * @example `successful`
     */
    Message: string;
}
