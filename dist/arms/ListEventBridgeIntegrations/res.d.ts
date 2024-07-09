export interface ListEventBridgeIntegrationsResponse {
    /**
     * 请求ID。
     * @example `2B289756-E791-5842-BCBD-AD414C******`
     */
    RequestId: string;
    /**
     * 每页EventBridge通知集成信息。
     */
    PageBean: {
        /**
         * 查询到的EventBridge通知集成总数。
         * @example `1`
         */
        Total: number;
        /**
         * 查询到的页数。
         * @example `1`
         */
        Page: number;
        /**
         * 每页展示数目。
         * @example `15`
         */
        Size: number;
        /**
         * EventBridge通知集成对象列表。
         */
        EventBridgeIntegrations: {
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
             * EventBridge通知集成描述信息。
             * @example `test`
             */
            Description: string;
        }[];
    };
}
