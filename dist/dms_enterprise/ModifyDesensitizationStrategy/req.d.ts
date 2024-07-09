export interface ModifyDesensitizationStrategyRequest {
    /**
     * 数据库ID，可以调用[ListDatabases](~~141873~~)接口获取。
     * @example `123`
     */
    "DbId": number;
    /**
     * 数据库是逻辑库，取值：
     * - **true**：物理库。
     * - **false**：逻辑库。
     * @example `false`
     */
    "IsLogic": boolean;
    /**
     * 数据库名，可以调用[ListSensitiveColumns](~~188103~~)接口获取该参数的值。
     * > - 物理库名：您还可以调用[ListDatabases](~~141873~~)或[SearchDatabase](~~141876~~)接口获取该参数的值。
     * > - 逻辑库名：您还可以调用[ListLogicDatabases](~~141874~~)或[SearchDatabase](~~141876~~)接口获取该参数的值。
     * @example `test_schema`
     */
    "SchemaName": string;
    /**
     * 表名，可以调用[ListSensitiveColumns](~~188103~~)接口获取该参数的值。
     * >您也可以调用[ListTables](~~141878~~)接口获取该参数的值。
     * @example `test_table`
     */
    "TableName": string;
    /**
     * 字段名，可调用[ListSensitiveColumns](~~188103~~)接口获取该参数的值。
     * >您也可以调用[ListColumns](~~141870~~)接口获取该参数的值。
     * @example `test_column`
     */
    "ColumnName": string;
    /**
     * 脱敏规则ID。
     * @example `53`
     */
    "RuleId"?: number;
    /**
     * 是否重置脱敏规则。取值：
     * - **true**：重置脱敏规则。
     * - **false（默认）**：不重置脱敏规则。
     * @example `false`
     */
    "IsReset"?: boolean;
    /**
     * 字段设置的脱敏算法，默认值为false。取值如下：
     * - **true**：默认的脱敏算法。
     * - **false**：半脱敏算法。
     * @example `false`
     */
    "IsDefault"?: boolean;
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
}
