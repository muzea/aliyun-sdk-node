export interface MoveResourceGroupRequest {
    /**
     * 需要修改资源组的云资源类型，取值：
     * - **loadbalancer**：应用型负载均衡实例
     * - **acl**：访问控制
     * - **securitypolicy**：安全策略
     * - **servergroup**：服务器组
     * @example `acl`
     */
    "ResourceType": string;
    /**
     * 需要修改资源组的云资源的实例ID。
     * @example `acl-hp34s2h0xx1ht4nwo****`
     */
    "ResourceId": string;
    /**
     * 需要移入云资源实例的资源组ID。
     * > 资源组是在阿里云账号下进行资源分组管理的一种机制，资源组能够帮助您解决单个云账号内的资源分组和授权管理等复杂性问题。更多信息，请参见[什么是资源管理](~~94475~~)。
     * @example `rg-aekzbi7******`
     */
    "NewResourceGroupId": string;
}
