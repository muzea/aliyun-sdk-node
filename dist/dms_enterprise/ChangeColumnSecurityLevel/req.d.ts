export interface ChangeColumnSecurityLevelRequest {
    /**
     * 租户ID。
     * > 鼠标移动到界面右上角的头像处，查看租户ID。具体操作，请参见[查看租户信息](~~181330~~)。
     * @example `10****`
     */
    "Tid"?: number;
    /**
     * 数据库ID（DatabaseId），数据库分为物理库和逻辑库两种：
     * - 物理库ID：可通过调用[ListDatabases](~~141873~~)或[SearchDatabase](~~141876~~)接口获取该参数的值。
     * - 逻辑库ID：可通过调用[ListLogicDatabases](~~141874~~)或[SearchDatabase](~~141876~~)接口获取该参数的值。
     * @example `325**`
     */
    "DbId": number;
    /**
     * 数据库是否为逻辑库，取值：
     * - **true**：逻辑库。
     * - **false**：物理库。
     * @example `false`
     */
    "IsLogic": boolean;
    /**
     * 数据库名称。可调用[ListSensitiveColumns](~~188103~~)或[SearchDatabase](~~141876~~)接口获取该参数的值。
     * > 您可以调用[ListDatabases](~~141873~~)接口获取物理库的SchemaName值，调用[ListLogicDatabases](~~141874~~)接口获取逻辑库的SchemaName值。
     * @example `test_schema`
     */
    "SchemaName": string;
    /**
     * 表名。可调用[ListSensitiveColumns](~~188103~~)或[ListTables](~~141878~~)接口获取该参数的值。
     * @example `test_table`
     */
    "TableName": string;
    /**
     * 字段名。可调用[ListSensitiveColumns](~~188103~~)或[ListColumns](~~141870~~)接口获取该参数的值。
     * @example `test_column`
     */
    "ColumnName": string;
    /**
     * 字段新的安全级别，安全级别取值范围为实例绑定的分类分级模板的敏感序列。您可以调用[ListSensitivityLevel](~~2539519~~)接口来获取模板的敏感序列列表。
     * @example `S2`
     */
    "NewSensitivityLevel": string;
}
