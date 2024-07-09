export interface CreateVirtualNodeRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可用区ID。
     * @example `cn-hangzhou-b`
     */
    "ZoneId"?: string;
    /**
     * 安全组ID。虚拟节点以及该虚拟节点下的ECI实例将加入到该安全组中。
     * @example `sg-2ze81zoc3yl7a3we****`
     */
    "SecurityGroupId": string;
    /**
     * 交换机ID。虚拟节点以及虚拟节点下的ECI实例所使用的交换机。
     * 支持指定多个（1~10个）属于同一VPC的交换机。
     * @example `vsw-2ze23nqzig8inprou****`
     */
    "VSwitchId": string;
    /**
     * 虚拟节点的名称。长度为2~128个英文字符，可以包含小写英文字符、数字、半角句号（.）或者短划线（-）。
     * @example `testNode`
     */
    "VirtualNodeName"?: string;
    /**
     * 资源组ID。
     * @example `rg-uf66jeqopgqa9hdn****`
     */
    "ResourceGroupId"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否支持公网。默认为false。
     * 如果设置为true，则虚拟节点将对外暴露一个公网IP。
     * @example `false`
     */
    "EnablePublicNetwork"?: boolean;
    /**
     * 弹性公网IP的ID。
     * @example `eip-uf66jeqopgqa9hdn****`
     */
    "EipInstanceId"?: string;
    /**
     * 虚拟节点要连接的K8s集群的KubeConfig。需进行Base64编码后传入。
     * @example `JTVDbmFwaVZlcnNpb24lM0ElMjB2MSU1Q25jbHVzdGVycyUzQSU1Q24tJTIwY2x1c3RlciUzQSU1Q24uLi******`
     */
    "KubeConfig"?: string;
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
     * 虚拟节点标签信息。
     */
    "Tag"?: {
        /**
         * 标签键。N的取值范围为1~20。
         * @example `name`
         */
        Key: string;
        /**
         * 标签值。N的取值范围为1~20。
         * @example `test`
         */
        Value: string;
    }[];
    /**
     * 虚拟节点污点信息。
     */
    "Taint"?: {
        /**
         * 污点的Key。N的取值范围为1~20。
         * @example `testKey`
         */
        Key: string;
        /**
         * 污点的Value。N的取值范围为1~20。
         * @example `testValue`
         */
        Value: string;
        /**
         * 污点的Effect。N的取值范围为1~20。Effect的取值范围：
         * - NoSchedule：不将Pod调度到具有该污点的节点上。
         * - NoExecute：不将Pod调度到具有该污点的节点上的同时，驱逐节点上已经存在的Pod。
         * - PreferNoSchedule：尽量不将Pod调度到具有该污点的节点上。
         * @example `NoSchedule`
         */
        Effect: string;
    }[];
    /**
     * 是否启用TLS启动引导。启用后，请使用TLS启动引导的KubeConfig证书。取值范围：
     * - true：启用
     * - false：不启用
     * 默认为false。
     * @example `false`
     */
    "TlsBootstrapEnabled"?: boolean;
}
