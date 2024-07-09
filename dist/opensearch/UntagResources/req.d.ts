export interface UntagResourcesRequest {
    /**
     * 资源类型
     * @example `ProductVersion`
     */
    "resourceType": string;
    /**
     * 资源ID,最多 50个子项
     */
    "resourceId": string[];
    /**
     * 对应标签键列表，最多包含20个子项
     */
    "tagKey"?: string[];
    /**
     * 是否全部删除，只针对tags为空时有效。取值范围： true  false True False   默认是 false
     * @example `true`
     */
    "all"?: boolean;
}
