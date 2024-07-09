export interface ListLogicTableRouteConfigRequest {
    /**
     * 逻辑库的表ID，可通过调用接口[ListLogicTables](~~141875~~)获取该参数的值。
     * @example `1****`
     */
    "TableId": number;
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
}
