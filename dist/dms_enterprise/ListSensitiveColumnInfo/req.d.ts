export interface ListSensitiveColumnInfoRequest {
    /**
     * 实例ID。您可调用[ListInstances](~~141936~~)或[GetInstance](~~141567~~)接口获取该参数的值。
     * @example `183****`
     */
    "InstanceId": number;
    /**
     * 数据库名。您可调用接口[SearchDatabase](~~141876~~)获取该参数的值。
     * >您也可以调用接口[ListDatabases](~~141873~~)获取物理库的SchemaName值，调用接口[ListLogicDatabases](~~141874~~)获取逻辑库的SchemaName值。
     * @example `test_schema`
     */
    "SchemaName"?: string;
    /**
     * 表名。您可通过调用接口[ListSensitiveColumns](~~188103~~)获取该参数的值。
     * >您也可以通过调用接口[ListTables](~~141878~~)获取该参数的值。
     * @example `test_table`
     */
    "TableName"?: string;
    /**
     * 字段名。您可调用接口[ListSensitiveColumns](~~188103~~)获取该参数的值。
     * >您也可以通过调用接口[ListColumns](~~141870~~)获取该参数的值。
     * @example `test_column`
     */
    "ColumnName"?: string;
    /**
     * 分页查询时，设置当前页面的页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页数据量。
     * @example `100`
     */
    "PageSize"?: number;
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
}
