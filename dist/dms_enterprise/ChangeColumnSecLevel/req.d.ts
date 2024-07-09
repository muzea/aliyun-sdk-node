export interface ChangeColumnSecLevelRequest {
    /**
     * 租户ID。
     * > 鼠标移动到界面右上角的头像处，查看租户ID。具体操作，请参见[查看租户信息](~~181330~~)。
     * @example `43253`
     */
    "Tid"?: number;
    /**
     * 数据库ID（DatabaseId），可通过调用接口[SearchDatabase](~~141876~~)获取该参数的值。
     * >您也可以通过调用接口[ListDatabases](~~141873~~)获取物理库的DatabaseId值，调用接口[ListLogicDatabases](~~141874~~)获取逻辑库的DatabaseId值。
     * @example `325`
     */
    "DbId": number;
    /**
     * 数据库是逻辑库，取值：
     * - true：物理库
     * - false：逻辑库
     * @example `false`
     */
    "IsLogic": boolean;
    /**
     * 数据库名，可通过调用接口[ListSensitiveColumns](~~188103~~)获取该参数的值。
     * - 您也可以通过调用接口[SearchDatabase](~~141876~~)获取该参数的值。
     * - 您也可以通过调用接口[ListDatabases](~~141873~~)获取物理库的SchemaName值，调用接口[ListLogicDatabases](~~141874~~)获取逻辑库的SchemaName值。
     * @example `test_schema`
     */
    "SchemaName": string;
    /**
     * 表名，可通过调用接口[ListSensitiveColumns](~~188103~~)获取该参数的值。
     * >您也可以通过调用接口[ListTables](~~141878~~)获取该参数的值。
     * @example `test_table`
     */
    "TableName": string;
    /**
     * 字段名，可通过调用接口[ListSensitiveColumns](~~188103~~)获取该参数的值。
     * >您也可以通过调用接口[ListColumns](~~141870~~)获取该参数的值。
     * @example `test_column`
     */
    "ColumnName": string;
    /**
     * 输入新的字段敏感等级，取值如下：
     * - INNER：低敏感
     * - SENSITIVE： 中敏感
     * - CONFIDENTIAL： 高敏感
     * @example `SENSITIVE`
     */
    "NewLevel": string;
}
