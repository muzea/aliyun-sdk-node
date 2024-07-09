export interface GetGWSConnectTicketRequest {
    /**
     * 可视化实例ID。
     * @example `i-bp1ch35z696b6b26****`
     */
    "InstanceId": string;
    /**
     * 待启动的App名称。
     * - 可视化实例的WorkMode为Application（应用模式）时，此参数必填。
     * - 可视化实例的WorkMode为Desktop（桌面模式）时，不需要指定此参数。
     * @example `app-****`
     */
    "AppName"?: string;
}
