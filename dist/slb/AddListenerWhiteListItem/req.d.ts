export interface AddListenerWhiteListItemRequest {
    /**
     * 负载均衡实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 负载均衡实例的ID。
     * @example `lb-bp1o94dp5i6ea*******`
     */
    "LoadBalancerId": string;
    /**
     * 负载均衡实例前端使用的端口。
     * @example `80`
     */
    "ListenerPort": number;
    /**
     * 访问控制列表。
     * 监听的**AccessControlStatus**为**open_white_list**时有效。
     * 支持输入IP地址或IP地址段（CIDR block形式），多个IP地址或地址段用半角逗号（,）分割。
     * 不允许输入**0.0.0.0**或**0.0.0.0/0**。您可以通过调用[SetListenerAccessControlStatus](~~27599~~)接口将**AccessControlStatus**的值设置为**close**来关闭访问控制。
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
