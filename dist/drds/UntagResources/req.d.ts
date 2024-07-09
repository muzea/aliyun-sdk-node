export interface UntagResourcesRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型，取值固定为INSTANCE。
     * @example `INSTANCE`
     */
    "ResourceType": string;
    /**
     * 是否删除资源的所有标签。
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 资源ID。
     * @example `drds********`
     */
    "ResourceId": string[];
    /**
     * 标签的键。
     * > N表示传入第几个标签的键。例如：* Tag.1.Key表示传入第一个标签的键。* Tag.2.Key表示传入第二个标签的键。
     * @example `color`
     */
    "TagKey"?: string[];
}
