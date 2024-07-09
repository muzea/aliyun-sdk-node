export interface UpdateVirtualBorderBandwidthResponse {
    /**
     * 响应码。
     * @example `200`
     */
    Code: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `AA4486A8-B6AE-469E-AB09-820EF8ECFA2B`
     */
    RequestId: string;
    /**
     * 是否修改成功。取值：
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
}
