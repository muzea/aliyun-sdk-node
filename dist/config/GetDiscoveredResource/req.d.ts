export interface GetDiscoveredResourceRequest {
    /**
     * 资源ID。
     * 关于如何获取资源ID，请参见[ListDiscoveredResources](~~411702~~)。
     * @example `i-bp12g4xbl4i0brkn****`
     */
    "ResourceId": string;
    /**
     * 资源类型。
     * 关于如何获取资源类型，请参见[ListDiscoveredResources](~~411702~~)。
     * @example `ACS::ECS::Instance`
     */
    "ResourceType": string;
    /**
     * 资源所在地域ID。
     * 关于如何获取资源所在地域ID，请参见[ListDiscoveredResources](~~411702~~)。
     * @example `cn-hangzhou`
     */
    "Region": string;
    /**
     * 查询资源合规结果。取值：
     * - 0（默认值）：不查询。
     * - 1：查询。
     * @example `0`
     */
    "ComplianceOption"?: number;
}
