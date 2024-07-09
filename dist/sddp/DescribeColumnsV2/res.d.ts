export interface DescribeColumnsV2Response {
    /**
     * 分页查询时，设置当前页面的页码。默认值：**1**。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `B1F2BB1F-04EC-5D36-B136-B4DE17FD8DE0`
     */
    RequestId: string;
    /**
     * 分页查询时，设置列表中每页显示的数据资产实例的最大条数。默认值：**10**。
     * @example `10`
     */
    PageSize: number;
    /**
     * 结果中数据的总条数。
     * @example `12`
     */
    TotalCount: number;
    /**
     * 数据表的列的识别结果列表。
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
         * @example `varchar`
         */
        DataType: string;
        /**
         * 资产的风险等级编码。取值：
         * - **1**：N/A。
         * - **2**：S1。
         * - **3**：S2。
         * - **4**：S3。
         * - **5**：S4。
         * >返回值<=1，代表N/A。
         * @example `3`
         */
        OdpsRiskLevelValue: number;
        /**
         * 数据资产表中列数据所属的资产实例ID。
         * @example `1232122`
         */
        InstanceId: number;
        /**
         * 数据资产表中列数据的风险等级ID。取值：
         * - **1**：N/A。
         * - **2**：S1。
         * - **3**：S2。
         * - **4**：S3。
         * - **5**：S4。
         * >返回值<=1，代表N/A。
         * @example `4`
         */
        RiskLevelId: number;
        /**
         * 数据资产表中列数据命中的敏感数据识别规则名称。
         * @example `name`
         */
        RuleName: string;
        /**
         * 数据资产表中列数据命中的敏感数据识别规则ID。
         * @example `1004`
         */
        RuleId: number;
        /**
         * 数据资产表中列数据是否包含敏感数据。取值：
         * - true：数据资产表中列数据包含敏感数据。
         * - false：数据资产表中列数据不包含敏感数据。
         * @example `true`
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
         * @example `rm-1234`
         */
        InstanceName: string;
        /**
         * 数据资产表中列数据的风险等级名称。取值：
         * - **N/A**：未识别到敏感数据。
         * - **S1**：1级敏感数据。
         * - **S2**：2级敏感数据。
         * - **S3**：3级敏感数据。
         * - **S4**：4级敏感数据。
         * @example `S1`
         */
        RiskLevelName: string;
        /**
         * 资产的风险等级名称。取值：
         * - **N/A**：未识别到敏感数据。
         * - **S1**：1级敏感数据。
         * - **S2**：2级敏感数据。
         * - **S3**：3级敏感数据。
         * - **S4**：4级敏感数据。
         * @example `S4`
         */
        OdpsRiskLevelName: string;
        /**
         * 数据资产表中列的名称。
         * @example `obj_id`
         */
        Name: string;
        /**
         * 数据资产表中列数据所属的资产表ID。
         * @example `123`
         */
        TableId: number;
        /**
         * 数据资产表中列的唯一标识ID。
         * @example `111111`
         */
        Id: string;
        /**
         * 数据资产表中列数据所属产品名称。取值：**MaxCompute、OSS、ADS、OTS、RDS**等。
         * @example `RDS`
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
         * 数据标签列表。
         */
        ModelTags: {
            /**
             * 数据标签ID。取值：
             * - **101**：个人敏感信息
             * - **102**：个人信息
             * - **107**：通用信息
             * @example `101`
             */
            Id: number;
            /**
             * 数据标签名称。取值：
             * - 个人敏感信息
             * - 个人信息
             * - 通用信息
             * @example `personal sensitive information`
             */
            Name: string;
        }[];
    }[];
}
