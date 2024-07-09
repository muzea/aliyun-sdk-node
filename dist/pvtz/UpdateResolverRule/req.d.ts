export interface UpdateResolverRuleRequest {
    /**
     * 转发规则ID
     * @example `hra0**`
     */
    "RuleId": string;
    /**
     * 转发规则名称
     * @example `转发规则-test`
     */
    "Name"?: string;
    /**
     * 转发目标IP地址和端口号
     */
    "ForwardIp"?: {
        /**
         *
         * 转发目标IP地址
         * @example `172.16.xx.xx`
         */
        Ip: string;
        /**
         *
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
