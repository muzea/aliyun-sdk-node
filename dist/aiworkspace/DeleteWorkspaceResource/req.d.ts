export interface DeleteWorkspaceResourceRequest {
    /**
     * **该字段已废弃，将会下线，请使用ResourceType字段**
     * @example `DLC`
     */
    "ProductType"?: string;
    /**
     * 资源分组名。如果获取资源分组名，请参见[ListResources](~~449143~~)。
     * @example `group`
     */
    "GroupName"?: string;
    /**
     * 工作空间ID。如何获取工作空间ID，请参见 [ListWorkspaces](~~449124~~)。
     * @example `123`
     */
    "WorkspaceId": string;
    /**
     * 删除行为，取值如下：
     * - DetachAndDelete（默认值）：与工作空间解绑并删除资源（默认值）。
     * - Detach：与工作空间解绑。
     * @example `DetachAndDelete`
     */
    "Option"?: string;
    /**
     * 资源类型列表。取值如下：
     * - ECS：通用计算资源
     * - Lingjun：灵骏智算资源
     * - ACS：ACS计算资源
     * - FLINK：Flink资源。
     * - MaxCompute： MaxCompute资源，目前只支持Option为Detach，不支持DetachAndDelete。
     * @example `DLC`
     */
    "ResourceType"?: string;
    /**
     * 标签列表，以逗号分隔。
     * @example `system.supported.eas=true`
     */
    "Labels"?: string;
    /**
     * 逗号分隔的多个资源ID，这多个资源ID的GroupName必须一致
     * GroupName与ResourceIds不能都为空，可以两项都不为空。
     * @example `Resource-dks******jkf,Resource-adf******dss`
     */
    "ResourceIds"?: string;
}
