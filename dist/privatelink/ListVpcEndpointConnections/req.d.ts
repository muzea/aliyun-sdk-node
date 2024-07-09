export interface ListVpcEndpointConnectionsRequest {
    /**
     * 要查询的终端节点连接的地域ID。
     * 您可以通过调用[DescribeRegions](~~120468~~)接口获取地域ID。
     * @example `cn-huhehaote`
     */
    "RegionId": string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 分页大小。取值范围：**1**~**50**。默认值：**50**。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 终端节点服务ID。
     * @example `epsrv-hp3vpx8yqxblby3i****`
     */
    "ServiceId"?: string;
    /**
     * 终端节点网卡ID。
     * @example `eni-hp32lk0pyv6o94hs****`
     */
    "EniId"?: string;
    /**
     * 终端节点ID。
     * @example `ep-hp33b2e43fays7s8****`
     */
    "EndpointId"?: string;
    /**
     * 终端节点连接状态，取值：
     * - **Pending**：修改中。
     * - **Connecting**：连接中。
     * - **Connected**：已连接。
     * - **Disconnecting**：断开连接中。
     * - **Disconnected**：未连接。
     * - **Deleting**：删除中。
     * - **ServiceDeleted**：对应的终端节点服务已删除。
     * @example `Disconnected`
     */
    "ConnectionStatus"?: string;
    /**
     * 终端节点所属的账号ID。
     * @example `25346073170691****`
     */
    "EndpointOwnerId"?: number;
    /**
     * 服务资源ID。
     * @example `lb-hp32z1wp5peaoox2q****`
     */
    "ResourceId"?: string;
    /**
     * 平滑迁移场景下被替换的服务资源ID。
     * @example `lb-hp32z1wp5peaoox2q****`
     */
    "ReplacedResourceId"?: string;
    /**
     * 要查询的终端节点所属的资源组ID。
     * @example `rg-acfmy*****`
     */
    "ResourceGroupId"?: string;
}
