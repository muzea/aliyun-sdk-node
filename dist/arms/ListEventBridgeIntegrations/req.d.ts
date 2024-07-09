export interface ListEventBridgeIntegrationsRequest {
    /**
     * 查询页数。
     * @example `1`
     */
    "Page": number;
    /**
     * 每页展示数目。
     * @example `15`
     */
    "Size": number;
    /**
     * EventBridge通知集成名称。
     * @example `EventBridge_Test`
     */
    "Name"?: string;
}
