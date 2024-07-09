export interface DeleteLogicTableRouteConfigRequest {
    /**
     * 逻辑库的表ID，可通过调用接口[ListLogicTables](~~141875~~)获取该参数的值。
     * @example `1****`
     */
    "TableId": number;
    /**
     * 路由算法唯一键，可通过调用接口[ListLogicTableRouteConfig](~~363030~~)获取该参数的值。
     * @example `id-hash-mod15`
     */
    "RouteKey": string;
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
}
