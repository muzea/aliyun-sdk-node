export interface UpdateNacUserCertStatusResponse {
    /**
     * 本次请求ID。
     * @example `102350E7-1A20-58F5-9D63-ABEA820AE6E1`
     */
    RequestId: string;
    /**
     * 接口状态或POP错误码。取值说明如下：
     * - **2xx**：成功。
     * - **3xx**：重定向。
     * - **4xx**：请求错误。
     * - **5xx**：服务器错误。
     * @example `200`
     */
    Code: string;
    /**
     * 调用结果的附加信息。
     * @example `successful`
     */
    Message: string;
}
