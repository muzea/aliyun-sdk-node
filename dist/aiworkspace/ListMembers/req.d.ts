export interface ListMembersRequest {
    /**
     * 工作空间ID。如何获取工作空间ID，请参见[ListWorkspaces](~~449124~~)。
     * @example `123`
     */
    "WorkspaceId": string;
    /**
     * 工作空间列表的页码。起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。默认为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 使用角色过滤成员，多个角色以半角逗号（,）分隔。
     * 支持以下角色名：
     * - PAI.AlgoDeveloper：算法开发。
     * - PAI.AlgoOperator：算法运维。
     * - PAI.LabelManager：标注管理员。
     * - PAI.MaxComputeDeveloper：MaxCompute开发。
     * - PAI.WorkspaceAdmin：管理员。
     * - PAI.WorkspaceGuest：访客。
     * - PAI.WorkspaceOwner：负责人。
     * @example `PAI.AlgoDeveloper`
     */
    "Roles"?: string;
    /**
     * 成员名，支持模糊匹配。
     * @example `zhangsan`
     */
    "MemberName"?: string;
}
