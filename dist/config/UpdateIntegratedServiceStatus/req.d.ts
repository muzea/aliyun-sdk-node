export interface UpdateIntegratedServiceStatusRequest {
    /**
     * 集成的云服务标识。取值：
     * - eventbridge：事件总线。
     * - cms：云监控。
     * - bpstudio：云速搭。
     * @example `bpstudio`
     */
    "ServiceCode": string;
    /**
     * 云产品的集成状态。取值：
     * - true：开启。
     * - false：关闭。
     * @example `true`
     */
    "Status": boolean;
    /**
     * 集成的事件类型，多个事件类型用半角逗号（,）分隔。支持的事件类型有：
     * - ConfigurationItemChangeNotification：资源变更事件。
     * - NonCompliantNotification：不合规事件。
     * @example `NonCompliantNotification`
     */
    "IntegratedTypes"?: string;
}
