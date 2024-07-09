export interface UpdateEnvironmentResponse {
    /**
     * Id of the request
     * @example `70675725-8F11-4817-8106-CFE0AD71****`
     */
    RequestId: string;
    /**
     * 状态码。200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 操作结果。
     * @example `success`
     */
    Data: string;
    /**
     * 返回结果的提示信息。
     * @example `message`
     */
    Message: string;
}
