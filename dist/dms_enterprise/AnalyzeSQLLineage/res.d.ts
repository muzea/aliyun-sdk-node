export interface AnalyzeSQLLineageResponse {
    /**
     * 请求ID。
     * @example `B4B07137-F6AE-4756-8474-7F92BB6C4E04`
     */
    RequestId: string;
    /**
     * 请求是否成功。返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * SQL血缘关系结果集。
     */
    LineageResult: {
        /**
         * 血缘关系详情列表。
         */
        Lineages: {
            /**
             * 血缘关系类型，取值和说明如下：
             * - **FIELD\_DEPEND\_FIELD**：字段依赖字段。
             * - **TABLE\_DEPEND\_TABLE**：表依赖表。
             * - **FIELD\_INFLU\_TABLE**：字段影响表。
             * - **FIELD\_INFLU\_FIELD**：字段影响字段。
             * - **TABLE\_INFLU\_FIELD**：表影响字段。
             * - **FIELD\_JOIN\_FIELD**：字段关联字段。
             * @example `FIELD_DEPEND_FIELD`
             */
            LineageType: string;
            /**
             * 来源。
             * @example `dmstest.b.id`
             */
            Src: string;
            /**
             * 目标。
             * @example `dmstest.a.id`
             */
            Dst: string;
            /**
             * 操作类型，指产生血缘的位置。例如，操作类型为SELECT，则表示该血缘关系来源于SELECT语句。
             * > 该字段为扩展字段，暂无实际用途。
             * @example `SELECT`
             */
            OperType: string;
            /**
             * 处理详情。仅字段来源字段关系（FIELD\_DEPEND\_FIELD）会存在此参数。
             */
            ProcessDetail: {
                /**
                 * 字段加工SQL片段。
                 * @example `dmstest.b.id`
                 */
                Code: string;
                /**
                 * 计算方式，取值和说明如下：
                 * - **DIRECT**：表示未经过任何函数或者表达式加工。
                 * - **EXPR**：表示经过函数或者表达式加工。
                 * @example `DIRECT`
                 */
                CalWay: string;
            };
        }[];
        /**
         * 表和字段元数据信息。
         */
        ObjectMetadata: {
            /**
             * 对象名称。
             * @example `a`
             */
            Name: string;
            /**
             * 对象类型，取值和说明如下：
             * - **TABLE**：表。
             * - **VIEW**：视图。
             * - **TMP_TABLE**：临时表。
             * @example `TABLE`
             */
            Type: string;
            /**
             * 元数据获取来源，取值和说明如下：
             * - **DDL**：来源于SQL解析或DMS采集的库表元数据定义。
             * - **LINEAGE**：来源于血缘解析的结果。
             * @example `DDL`
             */
            Source: string;
            /**
             * 字段列表。
             */
            Fields: {
                /**
                 * 字段名。
                 * @example `dmstest.a.id`
                 */
                Name: string;
            }[];
        }[];
    };
}
