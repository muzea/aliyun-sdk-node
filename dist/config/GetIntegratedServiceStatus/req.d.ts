export interface GetIntegratedServiceStatusRequest {
    /**
     * 集成的云服务标识。取值：
     * - eventbridge：事件总线。
     * - cms：云监控。
     * - bpstudio：云速搭。
     * @example `bpstudio`
     */
    "ServiceCode": string;
}
