export interface AddMemberRoleRequest {
    /**
     * 工作空间ID。如何获取工作空间ID，请参见 [ListWorkspaces](~~449124~~)。
     * @example `145883`
     */
    "WorkspaceId": string;
    /**
     * 成员ID。如何获取成员ID，请参见[ListMembers](~~449135~~)。
     * @example `145883-215139******688039`
     */
    "MemberId": string;
    /**
     * 角色名。角色名和权限的对应关系，请参见[角色及权限列表](https://pai.console.aliyun.com/?spm=api-workbench.API%20Explorer.0.0.7a862392uO09Se&regionId=cn-shanghai#/workspace/permission) 。
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
    "RoleName": string;
}
