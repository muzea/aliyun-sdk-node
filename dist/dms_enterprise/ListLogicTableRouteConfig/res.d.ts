export interface ListLogicTableRouteConfigResponse {
    /**
     * 请求ID。
     * @example `7C6A0D7D-B034-59F6-854C-32425AC6****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `MissingTableId`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `TableId is mandatory for this action.`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    LogicTableRouteConfigList: {
        /**
         * 路由算法配置列表。
         */
        LogicTableRouteConfig: {
            /**
             * 路由算法唯一键。
             * @example `1`
             */
            RouteKey: string;
            /**
             * 路由算法表达式。
             * @example `#id#%16\t`
             */
            RouteExpr: string;
            /**
             * 逻辑表ID。
             * @example `4****`
             */
            TableId: number;
        }[];
    };
}
