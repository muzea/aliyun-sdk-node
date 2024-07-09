export interface GetMseSourceRequest {
    /**
     * 网关唯一标识ID。
     * @example `gw-7ea3da97b96543e19f6c597cd4a9****`
     */
    "GatewayUniqueId"?: string;
    /**
     * VPC ID
     * @example `vpc-bp1t50e045b5g7i3p****`
     */
    "VpcId"?: string;
    /**
     * MSE引擎类型：
     * - NACOS
     * - ZOOKEEPER
     * @example `NACOS`
     */
    "Type"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
