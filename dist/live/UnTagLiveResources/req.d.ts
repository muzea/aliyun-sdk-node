export interface UnTagLiveResourcesRequest {
    /**
     * 资源ID。直播域名。
     * N的取值范围为1~50。
     * @example `example.com`
     */
    "ResourceId": string[];
    /**
     * 标签键。N的取值范围为**1~20**。
     * @example `env`
     */
    "TagKey"?: string[];
    /**
     * 资源类型。固定值：**DOMAIN**。
     * @example `DOMAIN`
     */
    "ResourceType": string;
    /**
     * 删除所有标签。取值：
     * - **true**：是。
     * - **false**：否。
     * 默认取值为**false**。
     * @example `false`
     */
    "All"?: boolean;
}
