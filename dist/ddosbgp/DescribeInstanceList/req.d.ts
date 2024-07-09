export interface DescribeInstanceListRequest {
    /**
     * DDoS原生防护实例在资源管理服务中所属的资源组ID。
     * 不设置该参数表示默认资源组。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * 要查询的DDoS原生防护实例的ID列表。使用`["<实例ID 1>","<实例ID 2>",……]`格式表示。
     * @example `["ddosbgp-cn-oew1pjrk****"]`
     */
    "InstanceIdList"?: string;
    /**
     * 要查询的DDoS原生防护实例的备注。支持模糊查询。
     * @example `test`
     */
    "Remark"?: string;
    /**
     * 分页查询时，设置当前页面的页码。
     * @example `1`
     */
    "PageNo": number;
    /**
     * 分页查询时，设置每页包含实例的数量。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 要查询的DDoS原生防护实例防护的IP资产的协议类型。取值：
     * - **IPv4**：表示IPv4协议。
     * - **IPv6**：表示IPv6协议。
     * @example `IPv4`
     */
    "IpVersion"?: string;
    /**
     * 要查询的DDoS原生防护实例的防护套餐类型。取值：
     * - **0**：表示专业版。
     * - **1**：表示企业版。
     * @example `0`
     */
    "InstanceType"?: string;
    /**
     * 要查询的DDoS原生防护实例的防护对象IP。
     * @example `47.89.XX.XX`
     */
    "Ip"?: string;
    /**
     * 设置DDoS原生防护实例列表的排序字段。取值固定为**expireTime**，表示按照实例的到期时间排序。
     * 您可以通过**Orderdire**参数设置排序方式。
     *
     * @example `expireTime`
     */
    "Orderby"?: string;
    /**
     * 设置排序方式。取值：
     * - **desc**（默认）：表示按照到期时间降序排序。
     * - **asc**：表示按照到期时间升序排序。
     * @example `desc`
     */
    "Orderdire"?: string;
    /**
     * 要查询的DDoS原生防护实例所在地域ID。
     * > 您可以调用[DescribeRegions](~~118703~~)查询DDoS原生防护支持的所有地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 要查询的DDoS原生防护实例绑定的标签列表。
     */
    "Tag"?: {
        /**
         * 要查询的DDoS原生防护实例绑定的标签键。
         * @example `test-key`
         */
        Key: string;
        /**
         * 要查询的DDoS原生防护实例绑定的标签值。
         * @example `test-value`
         */
        Value: string;
    }[];
    "InstanceTypeList"?: string[];
}
