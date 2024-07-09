export interface UntagResourcesRequest {
    /**
     * 资源的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型。枚举类型，目前支持的资源类型：
     * - **INSTANCE**
     * - **TOPIC**
     * - **CONSUMERGROUP**
     * > 不区分大小写。
     * @example `INSTANCE`
     */
    "ResourceType": string;
    /**
     * 是否解除资源绑定的全部标签。TagKey.N为空时，该参数有效。默认值为**false**。
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 需要解绑的资源ID。
     * @example `alikafka_post-cn-v0h1fgs2****`
     */
    "ResourceId": string[];
    /**
     * 资源的标签键。
     * @example `FinanceDept`
     */
    "TagKey"?: string[];
}
