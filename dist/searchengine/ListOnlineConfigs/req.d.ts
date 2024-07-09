export interface ListOnlineConfigsRequest {
    /**
     * 实例id
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 节点名称。
     * @example `ha-cn-pl32rf0****_qrs`
     */
    "nodeName": string;
    /**
     * 域名
     * @example `sz_vpc_domain_1`
     */
    "domain": string;
}
