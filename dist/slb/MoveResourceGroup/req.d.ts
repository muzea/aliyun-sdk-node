export interface MoveResourceGroupRequest {
    /**
     * 负载均衡实例的地域ID。
     * @example `cn-beijing`
     */
    "RegionId": string;
    /**
     * 需要修改资源组的目标资源的id。
     * @example `lb-uf6ghek7ds2btzt65****`
     */
    "ResourceId": string;
    /**
     * 资源类型定义，取值：
     * - **loadbalancer**：传统型负载均衡实例。
     * - **certificate**：证书。
     * - **acl**：访问控制。
     * @example `loadbalancer`
     */
    "ResourceType": string;
    /**
     * 新资源组ID。
     * @example `rg-aek2rpsek5h****`
     */
    "NewResourceGroupId": string;
    /**
     * 资源组ID。
     * @example `rg-aek2dmxj56z****`
     */
    "ResourceGroupId"?: string;
    /**
     * 阿里云颁发给用户的访问服务所用的密钥ID。
     * @example `LTAI5tPmFGUpmyWwD8gp****`
     */
    "access_key_id"?: string;
}
