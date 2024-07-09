export interface ModifyInstanceAttributeRequest {
    /**
     * 实例ID
     * @example `apigateway-ht-8xxxxxxxxx`
     */
    "InstanceId": string;
    /**
     * 实例名称
     * @example `apigatewayInstance`
     */
    "InstanceName"?: string;
    /**
     * HTTPS安全策略
     * @example `HTTPS2_TLS1_0`
     */
    "HttpsPolicy"?: string;
    /**
     * 是否开启IPv6
     * @example `true`
     */
    "IPV6Enabled"?: string;
    /**
     * 是否支持IPv6出访能力
     * @example `true`
     */
    "EgressIpv6Enable"?: string;
    /**
     * 是否开启API网关自调用域名
     * @example `false`
     */
    "VpcSlbIntranetEnable"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性
     * @example `c20d86c4-1eb3-4d0b-afe9-c586df1e2136`
     */
    "Token"?: string;
    /**
     * 自定义网段，所配置的网段将被视为私网地址
     * @example `172.0.0.1/24`
     */
    "IntranetSegments"?: string;
    /**
     * 可运维开始时间，格式为<i>HH:mmZ</i>（UTC时间）
     * @example `18:00Z`
     */
    "MaintainStartTime"?: string;
    /**
     * 可运维结束时间，格式为<i>HH:mmZ</i>（UTC时间）
     * @example `23:00Z`
     */
    "MaintainEndTime"?: string;
    /**
     * API网关可访问的网段信息
     */
    "ToConnectVpcIpBlock"?: {
        /**
         * 虚拟交换机ID
         * @example `vsw-wz94cqvaoe1ipxxxxxx`
         */
        VswitchId: string;
        /**
         * 可用区ID
         * @example `cn-hangzhou-a`
         */
        ZoneId: string;
        /**
         * 虚拟交换机的网段
         * @example `172.16.0.0/16`
         */
        CidrBlock: string;
        /**
         * 是否为自定义网段
         * @example `false`
         */
        Customized: boolean;
    };
    /**
     * 是否删除VPC可访问网段
     * @example `true`
     */
    "DeleteVpcIpBlock"?: string;
}
