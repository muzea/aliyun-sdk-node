export interface DescribePackagesResponse {
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
     * @example `12`
     */
    TotalCount: number;
    /**
     * 数据资产包信息。
     */
    Items: {
        /**
         * 数据资产包创建时间。格式：时间戳。单位：毫秒
         * @example `1536751124000`
         */
        CreationTime: number;
        /**
         * 数据资产包中是否包含敏感数据。
         * - true：包含。
         * - false：不包含。
         * @example `true`
         */
        Sensitive: boolean;
        /**
         * 数据资产包所属者账号。
         * @example `cou-2221`
         */
        Owner: string;
        /**
         * 资产包的风险等级名称。
         * @example `最高风险等级`
         */
        RiskLevelName: string;
        /**
         * 数据资产包所属的资产实例ID。
         * @example `223453332`
         */
        InstanceId: number;
        /**
         * 数据资产包中包含数据的总数。例如：MaxCompute的数据表总数。
         * @example `321`
         */
        TotalCount: number;
        /**
         * 数据资产包名称。
         * @example `gxdata`
         */
        Name: string;
        /**
         * 数据资产包中包含的敏感数据总数。例如：MaxCompute的敏感数据表总数。
         * @example `123`
         */
        SensitiveCount: number;
        /**
         * 数据资产包的风险等级ID。
         * - **1**：N/A：未识别到敏感数据。
         * - **2**：S1：1级敏感数据。
         * - **3**：S2：2级敏感数据。
         * - **4**：S3：3级敏感数据。
         * - **5**：S4：4级敏感数据。
         * @example `4`
         */
        RiskLevelId: number;
        /**
         * 数据资产包的唯一标识ID。
         * @example `111111`
         */
        Id: number;
    }[];
}
