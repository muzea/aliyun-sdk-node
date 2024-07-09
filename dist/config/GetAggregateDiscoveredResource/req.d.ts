export interface GetAggregateDiscoveredResourceRequest {
    /**
     * 资源ID。
     * 关于如何获取资源ID，请参见[ListAggregateDiscoveredResources](~~411691~~)。
     * @example `i-bp12g4xbl4i0brkn****`
     */
    "ResourceId": string;
    /**
     * 资源类型。
     * 关于如何获取资源类型，请参见[ListAggregateDiscoveredResources](~~411691~~)。
     * @example `ACS::ECS::Instance`
     */
    "ResourceType": string;
    /**
     * 资源所在地域ID。
     * 关于如何获取资源所在地域ID，请参见[ListAggregateDiscoveredResources](~~411691~~)。
     * @example `cn-hangzhou`
     */
    "Region": string;
    /**
     * 账号组ID。
     * 关于如何获取账号组ID，请参见[ListAggregators](~~255797~~)。
     * @example `ca-5885626622af0008****`
     */
    "AggregatorId": string;
    /**
     * 账号组内待查询资源所属的阿里云账号ID。
     * @example `100931896542****`
     */
    "ResourceAccountId"?: number;
    /**
     * 查询资源合规结果。取值：
     * - 0（默认值）：不查询。
     * - 1：查询。
     * @example `0`
     */
    "ComplianceOption"?: number;
}
