export interface RemoveListenerWhiteListItemRequest {
    /**
     * 负载均衡实例的地域。
     * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 负载均衡实例的ID。
     * @example `lb-8vb86hxixo8lvsja8****`
     */
    "LoadBalancerId": string;
    /**
     * 监听端口。
     * @example `80`
     */
    "ListenerPort": number;
    /**
     * 访问控制列表。支持输入IP地址或IP地址段（CIDR block形式），多个IP地址或地址段用逗号（,）分隔。
     * > 如果所有IP都被删除，则无法访问该监听。
     * @example `192.168.XX.XX`
     */
    "SourceItems": string;
    /**
     * 负载均衡实例前端使用的协议。
     * >相同端口存在不同协议监听时，此字段必填。
     * @example `https`
     */
    "ListenerProtocol"?: string;
}
