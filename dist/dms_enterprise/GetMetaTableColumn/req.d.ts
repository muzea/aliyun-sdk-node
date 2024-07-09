export interface GetMetaTableColumnRequest {
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 表在DMS中的唯一识别码（Globally Unique Identifier，简称GUID）。
     * - 如果数据库为逻辑库，可通过调用接口[ListLogicTables](~~141875~~)获取该参数的值。
     * - 如果数据库为物理库，可通过调用接口[ListTables](~~141878~~)获取该参数的值。
     * @example `IDB_40753****.qntest2.activity_setting`
     */
    "TableGuid": string;
}
