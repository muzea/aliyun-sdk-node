export interface ListSensitiveColumnsRequest {
    /**
     * 租户ID。
     * > 鼠标移动到界面右上角的头像处，查看租户ID。具体操作，请参见[查看租户信息](~~181330~~)。
     * @example `3`
     */
    "Tid"?: number;
    /**
     * 数据库名，可通过调用接口[SearchDatabase](~~141876~~)获取该参数的值。
     * >您也可以通过调用接口[ListDatabases](~~141873~~)获取物理库的SchemaName值，调用接口[ListLogicDatabases](~~141874~~)获取逻辑库的SchemaName值。
     * @example `test_schema`
     */
    "SchemaName"?: string;
    /**
     * 表名，可通过调用接口[ListTables](~~141878~~)获取该参数的值。
     * @example `test_table`
     */
    "TableName"?: string;
    /**
     * 字段名，可通过调用接口[ListColumns](~~141870~~)获取该参数的值。
     * @example `test_column`
     */
    "ColumnName"?: string;
    /**
     * 字段敏感等级，取值如下：
     * - SENSITIVE： 中敏感
     * - CONFIDENTIAL： 高敏感
     * @example `SENSITIVE`
     */
    "SecurityLevel"?: string;
    /**
     * 第几页。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页数据量。
     * @example `100`
     */
    "PageSize"?: number;
    /**
     * 数据库ID（DatabaseId），可通过调用接口[SearchDatabase](~~141876~~)获取该参数的值。
     * >您也可以通过调用接口[ListDatabases](~~141873~~)获取物理库ID的值，调用接口[ListLogicDatabases](~~141874~~)获取逻辑库ID的值。
     * @example `1860`
     */
    "DbId"?: number;
    /**
     * 是否为逻辑库，取值：
     * - true：逻辑库
     * - false：物理库
     * @example `false`
     */
    "Logic"?: boolean;
}
