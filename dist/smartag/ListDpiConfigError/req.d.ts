export interface ListDpiConfigErrorRequest {
    /**
     * 智能接入网关实例所属地域ID。
     * 您可以调用[DescribeRegions](~~69813~~)接口查询智能接入网关支持的地域以及对应的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-1e8sgws6b133b8****`
     */
    "SmartAGId"?: string;
    /**
     * 配置了DPI功能的实例类型：
     * - **acl**：表示访问控制实例。
     * - **qos**：表示QoS策略实例。
     * @example `qos`
     */
    "DpiConfigType": string;
    /**
     * 配置了DPI功能的实例ID。
     * @example `qos-1strcafl4wghpb****`
     */
    "RuleInstanceId"?: string;
    /**
     * 开始查询下一页的Token。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    "NextToken"?: string;
    /**
     * 分页查询时允许每页展示的配置异常的最大条目数。
     * 取值范围：**1**~**100**。
     * 默认值：**10**。
     * @example `10`
     */
    "MaxResults"?: number;
}
