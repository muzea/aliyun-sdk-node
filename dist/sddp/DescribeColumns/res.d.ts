export interface DescribeColumnsResponse {
    /**
     * 结果中显示的当前页的页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 结果的请求ID。
     * @example `769FB3C1-F4C9-4******`
     */
    RequestId: string;
    /**
     * 结果中每页显示数据条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 结果中数据的总条数。
     * @example `12`
     */
    TotalCount: number;
    /**
     * 数据资产表中列的数据。
     */
    Items: {
        /**
         * 数据资产表中列数据的创建时间毫秒数。
         * @example `1536751124000`
         */
        CreationTime: number;
        /**
         * 订正目标列所属的表名。
         * @example `it_table`
         */
        TableName: string;
        /**
         * 数据资产表中列数据的数据类型。
         * @example `String`
         */
        DataType: string;
        /**
         * 资产的风险等级编码。取值：
         * - **1**：N/A。
         * - **2**：S1。
         * - **3**：S2。
         * - **4**：S3。
         * - **5**：S4。
         * @example `3`
         */
        OdpsRiskLevelValue: number;
        /**
         * 数据资产表中列数据所属的资产实例ID。
         * @example `1`
         */
        InstanceId: number;
        /**
         * 数据资产表中列数据的风险等级ID。取值：
         * - **1**：N/A。
         * - **2**：S1。
         * - **3**：S2。
         * - **4**：S3。
         * - **5**：S4。
         * @example `2`
         */
        RiskLevelId: number;
        /**
         * 数据资产表中列数据命中的敏感数据识别规则名称。
         * @example `name`
         */
        RuleName: string;
        /**
         * 数据资产表中列数据命中的敏感数据识别规则ID。
         * @example `1`
         */
        RuleId: number;
        /**
         * 数据资产表中列数据是否包含敏感数据。取值：
         * - true：数据资产表中列数据包含敏感数据。
         * - false：数据资产表中列数据不包含敏感数据。
         * @example `false`
         */
        Sensitive: boolean;
        /**
         * 敏感等级名。取值：
         * - **N/A**：未识别到敏感数据。
         * - **S1**：1级敏感数据。
         * - **S2**：2级敏感数据。
         * - **S3**：3级敏感数据。
         * - **S4**：4级敏感数据。
         * @example `S2`
         */
        SensLevelName: string;
        /**
         * 数据资产表中列数据所属的资产实例名称。
         * @example `rm-bp17t1htja573l5i8****`
         */
        InstanceName: string;
        /**
         * 数据资产表中列数据的风险等级名称。取值：
         * - **N/A**：未识别到敏感数据。
         * - **S1**：1级敏感数据。
         * - **S2**：2级敏感数据。
         * - **S3**：3级敏感数据。
         * - **S4**：4级敏感数据。
         * @example `S2`
         */
        RiskLevelName: string;
        /**
         * 资产的风险等级名称。取值：
         * - **N/A**：未识别到敏感数据。
         * - **S1**：1级敏感数据。
         * - **S2**：2级敏感数据。
         * - **S3**：3级敏感数据。
         * - **S4**：4级敏感数据。
         * @example `S3`
         */
        OdpsRiskLevelName: string;
        /**
         * 数据资产表中列的名称。
         * @example `gxdata`
         */
        Name: string;
        /**
         * 数据资产表中列数据所属的资产表ID。
         * @example `123`
         */
        TableId: number;
        /**
         * 数据资产表中列的唯一标识ID。
         * @example `268`
         */
        Id: string;
        /**
         * 数据资产表中列数据所属产品名称。取值：**MaxCompute、OSS、ADS、OTS、RDS**等。
         * @example `MaxCompute`
         */
        ProductCode: string;
        /**
         * 订正状态。取值：
         * - 1：已订正。
         * - 0：未订正。
         * @example `1`
         */
        RevisionStatus: number;
        /**
         * 订正记录ID。
         * @example `12`
         */
        RevisionId: number;
        /**
         * 命中识别模型的数据标签列表。
         */
        ModelTags: {
            /**
             * 识别模型的数据标签ID。
             * - **101**：个人敏感信息。
             * - **102**：个人信息。
             * - **103**：重要数据。
             * @example `101`
             */
            Id: number;
            /**
             * 识别模型的数据标签名称。
             * - 个人敏感信息。
             * - 个人信息。
             * - 重要数据。
             * @example `personal sensitive data`
             */
            Name: string;
        }[];
    }[];
}
