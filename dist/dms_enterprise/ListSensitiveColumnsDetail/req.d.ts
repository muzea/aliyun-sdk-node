export interface ListSensitiveColumnsDetailRequest {
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 数据库名，可通过调用接口[ListSensitiveColumns](~~188103~~)获取该参数的值。
     * > - 物理库名：您还可以通过调用接口[ListDatabases](~~141873~~)或[SearchDatabase](~~141876~~)获取该参数的值。
     * > - 逻辑库名：您还可以通过调用接口[ListLogicDatabases](~~141874~~)或[SearchDatabase](~~141876~~)获取该参数的值。
     * @example `SchemaName_test`
     */
    "SchemaName": string;
    /**
     * 表名，可通过调用接口[ListSensitiveColumns](~~188103~~)获取该参数的值。
     * >您也可以通过调用接口[ListTables](~~141878~~)获取该参数的值。
     * @example `test`
     */
    "TableName": string;
    /**
     * 字段名，可通过调用接口[ListSensitiveColumns](~~188103~~)获取该参数的值。
     * >您也可以通过调用接口[ListColumns](~~141870~~)获取该参数的值。
     * @example `ColumnName_test`
     */
    "ColumnName": string;
    /**
     * 数据库ID（DatabaseId），数据库分为物理库和逻辑库两种：
     * - 物理库ID：可通过调用接口[ListDatabases](~~141873~~)或[SearchDatabase](~~141876~~)获取该参数的值。
     * - 逻辑库ID：可通过调用接口[ListLogicDatabases](~~141874~~)或[SearchDatabase](~~141876~~)获取该参数的值。
     * @example `1860****`
     */
    "DbId"?: number;
    /**
     * 是否为逻辑库，取值如下：
     * - **true**：逻辑库
     * - **false**：物理库
     * @example `false`
     */
    "Logic"?: boolean;
}
