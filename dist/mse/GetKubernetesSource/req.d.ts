export interface GetKubernetesSourceRequest {
    /**
     * 网关唯一标识ID。
     * @example `gw-c5d1aadb7df646cfb7065fbf75c1****`
     */
    "GatewayUniqueId": string;
    /**
     * 专有网络vpcid。
     * @example `vpc-bp1t50e045b5g7i3p****`
     */
    "VpcId"?: string;
    /**
     * 是否获取所有K8s集群（false时只获取未被关联的集群）。
     */
    "IsAll"?: boolean;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
