export interface DescribeTablesResponse {
    /**
     * 结果中显示的当前页的页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 结果的请求ID。
     * @example `769FB3C1-F4C9-42DF-9B72-7077A8989C13`
     */
    RequestId: string;
    /**
     * 结果中每页显示的数据条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 结果中数据的总条数。
     * @example `13`
     */
    TotalCount: number;
    /**
     * 数据资产表的信息列表。
     */
    Items: {
        /**
         * 创建该数据资产表的时间。单位：毫秒。
         * @example `1536751124000`
         */
        CreationTime: number;
        /**
         * 拥有该数据资产表的阿里云账号。
         * @example `dtdep-239-******`
         */
        Owner: string;
        /**
         * 数据资产表中敏感字段所占的百分比。
         * @example `21%`
         */
        SensitiveRatio: string;
        /**
         * 租户名称。
         * @example `租户1`
         */
        TenantName: string;
        /**
         * 数据资产表的风险等级ID。
         * 每个风险等级ID都有对应的风险等级名称。取值：
         * - **1**：N/A：未识别到敏感数据。
         * - **2**：S1：1级敏感数据。
         * - **3**：S2：2级敏感数据。
         * - **4**：S3：3级敏感数据。
         * - **5**：S4：4级敏感数据。
         * @example `2`
         */
        RiskLevelId: number;
        /**
         * 数据资产表的实例名称。
         * @example `实例1`
         */
        InstanceName: string;
        /**
         * 数据资产表所属的产品ID。
         * @example `1`
         */
        ProductId: string;
        /**
         * 数据资产表的名称。
         * @example `gxdata`
         */
        Name: string;
        /**
         * 数据资产表所属的资产实例ID。
         * @example `1`
         */
        InstanceId: number;
        /**
         * 数据资产表包含的字段总数。
         * @example `1234`
         */
        TotalCount: number;
        /**
         * 实例的备注信息。
         * @example `备注1`
         */
        InstanceDescription: string;
        /**
         * 数据资产表中是否包含敏感字段。
         * - **true**：包含。
         * - **false**：不包含。
         * @example `true`
         */
        Sensitive: boolean;
        /**
         * 数据资产表的风险等级名称。取值：
         * - **N/A**：未识别到敏感数据。
         * - **S1**：1级敏感数据。
         * - **S2**：2级敏感数据。
         * - **S3**：3级敏感数据。
         * - **S4**：4级敏感数据。
         * @example `S2`
         */
        RiskLevelName: string;
        /**
         * 数据资产表中包含的敏感字段总数。
         * @example `32`
         */
        SensitiveCount: number;
        /**
         * 数据资产表的唯一标识ID。
         * @example `222`
         */
        Id: number;
        /**
         * 数据资产表所属产品名称，取值：**MaxCompute、OSS、ADS、OTS、RDS**等。关于支持的具体产品名称，请参见[支持识别敏感数据的数据类型](~~212906~~)。
         * @example `MaxCompute`
         */
        ProductCode: string;
        /**
         * 数据资产表命中的敏感数据识别规则信息。
         */
        RuleList: {
            /**
             * 规则的名称。
             * @example `规则名称`
             */
            Name: string;
            /**
             * 敏感数据识别规则的风险等级ID。取值：
             * - **1**：N/A：未识别到敏感数据。
             * - **2**：S1：1级敏感数据。
             * - **3**：S2：2级敏感数据。
             * - **4**：S3：3级敏感数据。
             * - **5**：S4：4级敏感数据。
             * @example `1`
             */
            RiskLevelId: number;
            /**
             * 规则的总数。
             * @example `12`
             */
            Count: number;
        }[];
    }[];
}
