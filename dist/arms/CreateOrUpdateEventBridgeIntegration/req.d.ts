export interface CreateOrUpdateEventBridgeIntegrationRequest {
    /**
     * 通知集成ID。
     * - 不填代表创建新的通知集成。
     * - 填写代表修改指定通知集成信息。
     * @example `123`
     */
    "Id"?: number;
    /**
     * EventBridge通知集成名称。
     * @example `EventBridge_Test`
     */
    "Name"?: string;
    /**
     * 通知集成描述信息。
     * @example `test`
     */
    "Description"?: string;
    /**
     * EventBridge公网地址。
     * @example `http://xxxxx`
     */
    "Endpoint"?: string;
    /**
     * EventBridge AccessKey ID。
     * @example `abc******************`
     */
    "AccessKey"?: string;
    /**
     * EventBridge AccessKey Secret。
     * @example `abc******************`
     */
    "AccessSecret"?: string;
    /**
     * 事件总线名称。
     * @example `EventBus_Test`
     */
    "EventBusName"?: string;
    /**
     * 事件来源。
     * @example `arms`
     */
    "Source"?: string;
    /**
     * 事件总线所在地域ID。
     * @example `cn-hangzhou`
     */
    "EventBusRegionId"?: string;
}
