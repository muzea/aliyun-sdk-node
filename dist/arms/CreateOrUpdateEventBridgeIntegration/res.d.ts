export interface CreateOrUpdateEventBridgeIntegrationResponse {
    /**
     * 请求ID。
     * @example `2B289756-E791-5842-BCBD-AD414C******`
     */
    RequestId: string;
    /**
     * EventBridge通知集成信息。
     */
    EventBridgeIntegration: {
        /**
         * EventBridge通知集成ID。
         * @example `123`
         */
        Id: number;
        /**
         * EventBridge通知集成名称。
         * @example `EventBridge_Test`
         */
        Name: string;
        /**
         * 通知集成描述信息。
         * @example `test`
         */
        Description: string;
        /**
         * EventBridge公网地址。
         * @example `http://xxxxx`
         */
        Endpoint: string;
        /**
         * EventBridge AccessKey ID。
         * @example `abc******************`
         */
        AccessKey: string;
        /**
         * EventBridge AccessKey Secret。
         * @example `abc******************`
         */
        AccessSecret: string;
        /**
         * 事件总线名称。
         * @example `EventBus_Test`
         */
        EventBusName: string;
        /**
         * 事件来源。
         * @example `arms`
         */
        Source: string;
        /**
         * 事件总线所在地域ID。
         * @example `cn-hangzhou`
         */
        EventBusRegionId: string;
    };
}
