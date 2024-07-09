export interface OfflineNodeRequest {
    /**
     * 节点的ID。您可以调用[ListNodes](~~173979~~)接口查看NodeId的相关信息。
     * @example `1234`
     */
    "NodeId": number;
    /**
     * DataWorks工作空间ID。您可以通过[ListProjects](~~178393~~)接口获取工作空间ID。
     * @example `9527`
     */
    "ProjectId": number;
}
