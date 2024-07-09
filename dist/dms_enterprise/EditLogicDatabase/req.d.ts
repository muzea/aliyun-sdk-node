export interface EditLogicDatabaseRequest {
    /**
     * - 如果需要修改逻辑库别名，请填入新的逻辑库别名。
     * - 如果不需要修改逻辑库别名，可通过调用接口[GetLogicDatabase](~~141872~~)或[GetDBTopology](~~211425~~)获取该参数的值。
     * @example `test_logic_db`
     */
    "Alias": string;
    /**
     * 逻辑库ID，可通过调用接口[ListLogicDatabases](~~141874~~)获取该参数的值。
     * @example `1***`
     */
    "LogicDbId": number;
    /**
     * 逻辑库对应的所有物理库。
     */
    "DatabaseIds": number[];
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
}
