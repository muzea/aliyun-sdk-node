export interface UntagResourcesRequest {
    /**
     * 主机所属的地域ID。
     * @example `ap-southeast-1`
     */
    "RegionId": string;
    /**
     * 主机ID，可以设置多个。
     */
    "ResourceId": string[];
    /**
     * 标签的键。
     */
    "TagKey"?: string[];
    /**
     * 是否解绑主机上的所有标签，取值：
     * - **true**：解绑主机上的所有标签。
     * - **false**：不解绑上主机的所有标签，默认值。
     * > 如果同时设置了TagKey.N和本参数，则本参数不生效。
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 资源类型，取值固定为DEDICATEDHOST。
     * @example `DEDICATEDHOST`
     */
    "ResourceType": string;
}
