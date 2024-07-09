export interface AddResolverRuleRequest {
    /**
     * 转发规则名称
     * @example `测试`
     */
    "Name": string;
    /**
     * 转发规则类型：
     * - OUTBOUND: 转发至外部IP
     * @example `OUTBOUND`
     */
    "Type"?: string;
    /**
     * 转发zone名称
     * @example `example.com`
     */
    "ZoneName": string;
    /**
     * 终端节点ID
     * @example `hra0**`
     */
    "EndpointId": string;
    /**
     * 转发目标IP地址和端口号
     */
    "ForwardIp": {
        /**
         * 转发目标IP地址
         * @example `172.16.xx.xx`
         */
        Ip: string;
        /**
         * 转发目标IP地址端口号
         * @example `8080`
         */
        Port: number;
    }[];
    /**
     * 语言
     * @example `en`
     */
    "Lang"?: string;
}
