export interface UntagResourcesRequest {
    /**
     * 服务网格所在地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 系统规定参数，固定为`servicemesh`。
     * @example `servicemesh`
     */
    "ResourceType": string;
    /**
     * 网格实例ID列表。
     */
    "ResourceId": string[];
    /**
     * 标签键列表。
     */
    "TagKey"?: string[];
    /**
     * 是否全部删除，只针对TagKey.N为空时有效。取值范围：
     * - true：全部删除。
     * - false：不全部删除。
     * 默认为 false。
     * @example `false`
     */
    "All"?: boolean;
}
