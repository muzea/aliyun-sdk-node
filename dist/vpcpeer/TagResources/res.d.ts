export interface TagResourcesResponse {
    /**
     * 请求ID。
     * @example `C46FF5A8-C5F0-4024-8262-B16B639225A0`
     */
    RequestId: string;
    /**
     * 是否创建并绑定成功。取值：
     * - **true**：创建并绑定成功。
     * - **false**：创建并绑定失败。
     * @example `true`
     */
    Success: boolean;
}
