export interface UpdateVirtualNodeRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 虚拟节点ID。
     * @example `vnd-2ze960zkdqrldeaw****`
     */
    "VirtualNodeId": string;
    /**
     * 虚拟节点名称。
     * @example `testNode`
     */
    "VirtualNodeName"?: string;
    /**
     * 虚拟节点支持的自定义资源。如果ECI Pod的request中声明了相应的自定义资源，则该Pod会被调度到VNode。
     * 格式为`资源名称=资源数量`，多个资源之间使用半角逗号间隔。
     * @example `example1.com=100,example2.com=200`
     */
    "CustomResources"?: string;
    /**
     * 集群的域名。配置后，除了主机的搜索域外，Kubelet会配置所有容器来搜索该域名。
     * @example `example.com`
     */
    "ClusterDomain"?: string;
    /**
     * DNS服务器的IP地址。如果ECI Pod中设置了`dnsPolicy=ClusterFirst`，则使用该配置值为容器提供DNS服务。
     * 支持配置多个IP地址，多个IP地址之间使用半角逗号间隔。
     * @example `100.1.XX.XX`
     */
    "ClusterDNS"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多详情，请参阅[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 虚拟节点标签信息。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `name`
         */
        Key: string;
        /**
         * 标签值。
         * @example `test`
         */
        Value: string;
    }[];
}
