export interface ChangeResourceGroupRequest {
    /**
     * 资源类型。取值：
     * - **VpcEndpoint**（默认值）：终端节点。
     * - **VpcEndpointService**：终端节点服务。
     * @example `VpcEndpoint`
     */
    "ResourceType"?: string;
    /**
     * 待修改资源组的私网连接资源ID。
     * @example `ep-hp3i05294c2d2d****`
     */
    "ResourceId": string;
    /**
     * 要替换的目标资源组的ID。
     * @example `rg-acfmy*****`
     */
    "ResourceGroupId": string;
}
