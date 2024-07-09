export interface CheckGrantResponse {
    /**
     * 授权状态。取值：
     * - **1**：已授权DDoS原生防护获取公网IP资产（例如，ECS、SLB实例等）信息。
     * - **0**：未授权DDoS原生防护获取公网IP资产（例如，ECS、SLB实例等）信息。
     * @example `1`
     */
    Status: number;
    /**
     * 本次请求的ID。
     * @example `DB002CE5-5E6C-5F11-AE15-B525299A40F6`
     */
    RequestId: string;
}
