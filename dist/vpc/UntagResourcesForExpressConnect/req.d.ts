export interface UntagResourcesForExpressConnectRequest {
    /**
     * 资源类型。取值：
     * - **PHYSICALCONNECTION**：表示高速通道专线实例。
     * - **VIRTUALBORDERROUTER**：表示边界路由器。
     * - **ROUTERINTERFACE**：表示VBR上连。
     * @example `PHYSICALCONNECTION`
     */
    "ResourceType": string;
    /**
     * 资源所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 是否解绑资源的所有标签。取值：
     * - **true**：解除资源的所有标签。
     * - **false**（默认值）：不解除资源的所有标签。
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 资源ID列表。
     */
    "ResourceId": string[];
    /**
     * 资源的标签列表。
     */
    "TagKey"?: string[];
}
