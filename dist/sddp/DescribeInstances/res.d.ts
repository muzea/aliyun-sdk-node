export interface DescribeInstancesResponse {
    /**
     * 当前页面的页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 结果的请求ID。
     * @example `71064826-726F-4ADA-B879-05D8055476FB`
     */
    RequestId: string;
    /**
     * 列表中每页显示的数据资产实例的数量。
     * @example `10`
     */
    PageSize: number;
    /**
     * 查询到的数据资产实例的总数量。
     * @example `231`
     */
    TotalCount: number;
    /**
     * 查询到的数据资产实例详情。
     */
    Items: {
        /**
         * 创建该数据资产实例的时间。使用时间戳表示，单位：毫秒。
         * @example `1637226782000`
         */
        CreationTime: number;
        /**
         * 最近一次扫描数据资产实例的完成时间。使用时间戳表示，单位：毫秒。
         * @example `1637622793000`
         */
        LastFinishTime: number;
        /**
         * 拥有该数据资产实例的阿里云账号。
         * @example `dtdep-239-******`
         */
        Owner: string;
        /**
         * 租户的名称。
         * @example `tenant`
         */
        TenantName: string;
        /**
         * 数据资产实例的防护状态。取值：
         * - **true**：防护中
         * - **false**：未防护
         * @example `false`
         */
        Protection: boolean;
        /**
         * 数据资产实例所属部门的名称。
         * @example `***DemoCenter`
         */
        DepartName: string;
        /**
         * 数据资产实例的安全状态。取值：
         * - **true**：安全
         * - **false**：非安全
         * @example `true`
         */
        Labelsec: boolean;
        /**
         * 数据资产实例的风险等级ID。风险等级ID越高，表示识别出的数据越敏感。
         * - **1**：表示未识别到敏感数据，无风险。
         * - **2**：表示1级敏感数据风险。
         * - **3**：表示2级敏感数据风险。
         * - **4**：表示3级敏感数据风险。
         * - **5**：表示4级敏感数据风险。
         * - **6**：表示5级敏感数据风险。
         * - **7**：表示6级敏感数据风险。
         * - **8**：表示7级敏感数据风险。
         * - **9**：表示8级敏感数据风险。
         * - **10**：表示9级敏感数据风险。
         * - **11**：表示10级敏感数据风险。
         * @example `2`
         */
        RiskLevelId: number;
        /**
         * 数据资产实例所属产品的ID。
         * @example `5`
         */
        ProductId: string;
        /**
         * 数据资产实例的名称。
         * @example `gxdata`
         */
        Name: string;
        /**
         * 数据资产实例中的数据总数。例如：当数据资产为RDS时，表示该实例中数据库的总表数。
         * @example `231`
         */
        TotalCount: number;
        /**
         * 数据资产实例的描述信息。
         * @example `instance dscription`
         */
        InstanceDescription: string;
        /**
         * 数据资产实例命中的敏感数据识别规则的名称。
         * @example `*** rule`
         */
        RuleName: string;
        /**
         * 数据资产实例中是否包含敏感数据。取值：
         * - **true**：包含
         * - **false**：不包含
         * @example `true`
         */
        Sensitive: boolean;
        /**
         * 数据资产实例的风险等级名称。
         * @example `S1`
         */
        RiskLevelName: string;
        /**
         * 此参数已废弃。
         * @example `1`
         */
        OdpsRiskLevelName: string;
        /**
         * 数据资产实例中包含的敏感数据总数。例如：当数据资产为RDS时，表示该实例中数据库的敏感总表数。
         * @example `123`
         */
        SensitiveCount: number;
        /**
         * 数据安全中心服务中记录的数据资产实例的唯一标识ID。
         * @example `11111`
         */
        Id: number;
        /**
         * 数据资产实例所属产品的名称，包括MaxCompute、OSS、RDS等。关于支持的具体产品名称，请参见[支持识别敏感数据的数据类型](~~212906~~)。
         * @example `RDS`
         */
        ProductCode: string;
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
             * @example `personal sensitive data`
             */
            Name: string;
        }[];
    }[];
}
