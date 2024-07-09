export interface ListDataCorrectPreCheckSQLRequest {
    /**
     * 数据变更工单ID，可通过调用接口[ListOrders](~~144643~~)获取该参数的值。
     * @example `453****`
     */
    "OrderId": number;
    /**
     * 第几页。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页数据量。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 数据库ID（DatabaseId），数据库分为物理库和逻辑库两种：
     * - 物理库ID：可通过调用接口[ListDatabases](~~141873~~)或[SearchDatabase](~~141876~~)获取该参数的值。
     * - 逻辑库ID：可通过调用接口[ListLogicDatabases](~~141874~~)或[SearchDatabase](~~141876~~)获取该参数的值。
     * @example `1930****`
     */
    "DbId"?: number;
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
}
