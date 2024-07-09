export interface PauseClientRequest {
    /**
     * 需要开启或暂停Agent客户端的服务器列表。
     * @example `uuid-1211-sadsd-2131`
     */
    "Uuids": string;
    /**
     * Agent客户端的开启状态。取值包括：
     * - **0**：关闭
     * - **1**：开启
     * @example `1`
     */
    "Value": string;
}
