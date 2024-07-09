export interface DescribeAvailableAdvicesResponse {
    /**
     * 详情。
     */
    Items: {
        /**
         * 建议ID。
         * @example `dcd04135-0925-4aed-a5a7-e7d92cb1****`
         */
        AdviceId: string;
        /**
         * 建议生成的时间，格式：yyyyMMdd（UTC时间）。
         * @example `20221124`
         */
        AdviceDate: string;
        /**
         * 建议的类型，取值说明：
         * - **Index**：索引优化。
         * - **Tiering**：冷热数据优化。
         * @example `Index`
         */
        AdviceType: string;
        /**
         * 应用建议的SQL语句。
         * @example `alter table `schema1`.`table1` drop key col1_1_idx`
         */
        SQL: string;
        /**
         * 生成优化建议的原因。
         * @example `15天未使用，历史使用统计概率小于1%`
         */
        Reason: string;
        /**
         * 建议的收益。
         * @example `节省0.4 GB的存储空间。`
         */
        Benefit: string;
        /**
         * 返回的建议总数，取值为：大于等于0且不超过Integer数据类型的最大值，默认值为0。
         * @example `30`
         */
        TotalCount: number;
        /**
         * 每页记录数，取值：
         * - **30**（默认值）
         * - **50**
         * - **100**
         * @example `30`
         */
        PageSize: number;
        /**
         * 页码，取值为：大于0且不超过Integer数据类型的最大值，默认值为1。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 数据库名。
         * @example `adb_demo`
         */
        SchemaName: string;
        /**
         * 表名。
         * @example `test_table`
         */
        TableName: string;
    }[];
    /**
     * 页码，取值为：大于0且不超过Integer数据类型的最大值，默认值为1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页记录数，取值：
     * - **30**（默认值）
     * - **50**
     * - **100**
     * @example `30`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `96A55627-28E9-5E47-B8F6-D786BE551349`
     */
    RequestId: string;
    /**
     * 返回的结果总数，取值为：大于等于0且不超过Integer数据类型的最大值，默认值为0。
     * @example `30`
     */
    TotalCount: number;
    /**
     * 数据库名和表名的字符串拼接列表。
     */
    SchemaTableNames: string[];
}
