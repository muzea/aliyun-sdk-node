export interface ChangeResourceGroupRequest {
    /**
     * 资源所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 需要打标的资源ID 。目前仅支持实例级别。
     * 例如：实例ID为alikafka_post-cn-v0h1fgs2xxxx，则资源ID为alikafka_post-cn-v0h1fgs2xxxx。
     * @example `alikafka_post-cn-v0h1fgs2****`
     */
    "ResourceId": string;
    /**
     * 需要移入云资源实例的资源组ID。
     * > 资源组是在阿里云账号下进行资源分组管理的一种机制，资源组能够帮助您解决单个云账号内的资源分组和授权管理等复杂性问题。更多信息，请参见[什么是资源管理](~~94475~~)。
     * @example `rg-ac***********7q`
     */
    "NewResourceGroupId": string;
}
