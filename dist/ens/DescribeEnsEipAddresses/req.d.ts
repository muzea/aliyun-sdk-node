export interface DescribeEnsEipAddressesRequest {
    /**
     * 要查询的EIP实例的ID。  最多支持输入50个EIP实例ID，实例ID之间用半角逗号（,）分隔。
     * @example `eip-5q9uwkd9bznjpxz8hr6cirnjk`
     */
    "AllocationId"?: string;
    /**
     * 要查询的EIP的IP地址。  最多支持输入50个EIP的IP地址，IP地址之间用半角逗号（,）分隔。
     * @example `120.XXX.XXX.4`
     */
    "EipAddress"?: string;
    /**
     * 云产品的实例ID
     * @example `lb-5t18quoohsrc3xkf86spmnu77`
     */
    "AssociatedInstanceId"?: string;
    /**
     * 要绑定的云产品实例的类型，取值：
     * - **EnsInstance**：VPC类型的ENS实例。
     * - **SlbInstance**：负载均衡实例。
     * @example `SlbInstance`
     */
    "AssociatedInstanceType"?: string;
    /**
     * ENS的节点ID。
     * @example `cn-chengdu-telecom`
     */
    "EnsRegionId"?: string;
    /**
     * EIP的名称。
     * @example `test`
     */
    "EipName"?: string;
    /**
     * 是否备用弹性IP。取值：
     * - **true**：备用。
     * - **false**：非备用。
     * @example `true`
     */
    "Standby"?: string;
    /**
     * 列表的页码，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数，最大值为100，默认值为10。
     * @example `50`
     */
    "PageSize"?: number;
}
