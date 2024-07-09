export interface PutCustomEventResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `131DD9C8-9A32-4428-AD2E-4E3013B6E3A7`
     */
    RequestId: string;
}
