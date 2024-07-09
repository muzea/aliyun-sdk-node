export interface GetMetaTableColumnResponse {
    /**
     * 请求ID。
     * @example `087DFBA1-378B-5D25-B13B-31F6409F****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `MissingTableGuid`
     */
    ErrorCode: string;
    /**
     * 字段列表信息。
     */
    ColumnList: {
        /**
         * 字段的数据类型。
         * > 字段的数据类型返回值不唯一，例如：**bigint**、**int**。
         * @example `bigint(1)`
         */
        ColumnType: string;
        /**
         * 字段是否自增，返回值说明如下：
         * - **true**：自增
         * - **false**：不自增
         * @example `false`
         */
        AutoIncrement: boolean;
        /**
         * 字段ID。
         * @example `63513****`
         */
        ColumnId: string;
        /**
         * 字段名。
         * @example `has_promotion`
         */
        ColumnName: string;
        /**
         * 字段的安全级别，返回值说明如下：
         * - **INNER**：内部（非敏感）
         * - **SENSITIVE**：敏感
         * - **CONFIDENTIAL**：机密
         * > 更多字段的安全信息，请参见[字段安全等级](~~66091~~)。
         * @example `INNER`
         */
        SecurityLevel: string;
        /**
         * 字段是否为主键，返回值说明如下：
         * - **true**：主键
         * - **false**：非主键
         * @example `true`
         */
        PrimaryKey: string;
        /**
         * 字段描述。
         * @example `是否有优惠活动`
         */
        Description: string;
        /**
         * 字段精度。
         * @example `19`
         */
        DataPrecision: number;
        /**
         * 字段小数位数。
         * @example `0`
         */
        DataScale: number;
        /**
         * 字段在表中的顺序。
         * @example `1`
         */
        Position: number;
        /**
         * 字段是否允许为空，返回值说明如下：
         * - **true**：允许为空
         * - **false**：不允许为空
         * @example `false`
         */
        Nullable: boolean;
        /**
         * 字段长度。
         * @example `0`
         */
        DataLength: number;
    }[];
    /**
     * 错误信息。
     * @example `TableGuid is mandatory for this action.`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
}
