export interface AddProjectMemberToRoleRequest {
    /**
     * DataWorks工作空间的ID。您可以通过[ListProjects](~~2780068~~)接口获取工作空间ID。
     * @example `27`
     */
    "ProjectId": number;
    /**
     * 阿里云账号ID。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，鼠标悬停至顶部菜单栏右侧的用户头像，查看账号ID。
     * @example `1234`
     */
    "UserId": string;
    /**
     * DataWorks工作空间角色的Code。您可以调用[ListProjectRoles](~~2780079~~)获取角色的Code。
     * @example `role_project_guest`
     */
    "RoleCode": string;
    /**
     * 幂等字段，建议使用UUID。用于唯一标识此次调用操作。
     * @example `1AFAE64E-D1BE-432B-A9*****`
     */
    "ClientToken"?: string;
}
