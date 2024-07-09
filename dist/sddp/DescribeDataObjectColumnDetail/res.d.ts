export interface DescribeDataObjectColumnDetailResponse {
    /**
     * 分页查询时，设置当前页面的页码。默认值：**1**。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `8C8036CC-961D-514E-88E8-3088B5A50CA9`
     */
    RequestId: string;
    /**
     * 分页查询时，设置列表中每页显示的数据资产实例的最大条数。默认值：**10**。
     * @example `10`
     */
    PageSize: number;
    /**
     * 结果中数据的总条数。
     * @example `61`
     */
    TotalCount: number;
    /**
     * 数据表的列的识别结果列表。
     */
    Items: {
        /**
         * 列名称。
         * @example `hide14`
         */
        ColumnName: string;
        /**
         * 列的数据类型。
         * @example `varchar`
         */
        DataType: string;
        /**
         * 列的备注。
         * @example `column comment`
         */
        ColumnComment: string;
        /**
         * 列是否为主键，取值说明：
         * - **true**：主键。
         * - **false**：非主键。
         * @example `true`
         */
        PrimaryKey: boolean;
        /**
         * 列对象的唯一标识ID。
         * @example `1509415150052786176`
         */
        Id: string;
        /**
         * 风险等级ID。取值：
         * - **1**：N/A：未识别到敏感数据。
         * - **2**：S1：1级敏感数据。
         * - **3**：S2：2级敏感数据。
         * - **4**：S3：3级敏感数据。
         * - **5**：S4：4级敏感数据。
         * @example `2`
         */
        RiskLevelId: number;
        /**
         * 风险等级名称。取值：
         * - **N/A**：未识别到敏感数据。
         * - **S1**：1级敏感数据。
         * - **S2**：2级敏感数据。
         * - **S3**：3级敏感数据。
         * - **S4**：4级敏感数据。
         * @example `S1`
         */
        RiskLevelName: string;
        /**
         * 命中的识别模型ID。
         * @example `1004`
         */
        RuleId: number;
        /**
         * 命中的识别模型名称。
         * @example `name`
         */
        RuleName: string;
        /**
         * 敏感数据所数据的行业分类列表。
         */
        Categories: string[];
        /**
         * 数据标签列表。
         */
        ModelTags: {
            /**
             * 数据标签名称对应的ID。取值：
             * - **101**：个人敏感信息
             * - **102**：个人信息
             * - **107**：通用信息
             * @example `101`
             */
            Id: number;
            /**
             * 数据标签名称。取值：
             * - **101**：个人敏感信息
             * - **102**：个人信息
             * - **107**：通用信息
             * @example `personal sensitive information`
             */
            Name: string;
        }[];
    }[];
}
