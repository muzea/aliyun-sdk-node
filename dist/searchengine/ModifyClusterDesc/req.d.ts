export interface ModifyClusterDescRequest {
    /**
     * 实例ID
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 集群名称
     * @example `sz_vpc_domain_1`
     */
    "clusterName": string;
    /**
     * 请求体参数
     * @example `{
        "description": "自定义描述"
    }`
     */
    "body"?: any;
}
