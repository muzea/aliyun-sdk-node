export interface DescribeDBInstancesRequest {
    /**
     * 地域ID。
     * > 您可以通过[DescribeRegions](~~86912~~)接口查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例描述。
     * @example `gp-bp12ga6v69h86****`
     */
    "DBInstanceDescription"?: string;
    /**
     * 实例网络类型，取值说明：
     * - **VPC**：专有网络。
     * - **Classic**：经典网络。
     * > 如果不填，则返回所有网络类型的实例。
     * @example `VPC`
     */
    "InstanceNetworkType"?: string;
    /**
     * 实例ID，多个实例ID之间用英文半角逗号（,）分隔。
     * @example `gp-bp12ga6v69h86****`
     */
    "DBInstanceIds"?: string;
    /**
     * 每页记录数，取值说明：
     * - **30**
     * - **50**
     * - **100**
     * 默认值：**30**。
     * @example `50`
     */
    "PageSize"?: number;
    /**
     * 页码，大于0且不超过Integer的最大值，默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `test-key`
         */
        Key: string;
        /**
         * 标签值。
         * @example `test-value`
         */
        Value: string;
    }[];
    /**
     * 该参数已废弃，无需传入该参数。
     */
    "InstanceDeployTypes"?: string[];
    /**
     * 实例运行状态。
     */
    "DBInstanceStatuses"?: string[];
    /**
     * 实例系列，多个值用英文逗号（,）分隔。
     */
    "DBInstanceCategories"?: string[];
    /**
     * 资源类型，多个值用英文逗号（,）分隔。
     */
    "DBInstanceModes"?: string[];
    /**
     * 实例所在的企业资源组ID。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 专有网络ID。
     * 可根据该参数筛选出同一VPC的数据。
     * @example `vpc-t4nqyp3tc5mx7vy6****`
     */
    "VpcId"?: string;
}
