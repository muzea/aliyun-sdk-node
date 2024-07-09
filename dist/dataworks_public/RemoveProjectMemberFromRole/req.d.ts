export interface RemoveProjectMemberFromRoleRequest {
    /**
     * DataWorks工作空间的ID。
     * @example `27`
     */
    "ProjectId": number;
    /**
     * 用户的ID。
     * @example `1234`
     */
    "UserId": string;
    /**
     * DataWorks工作空间的角色Code。可调用接口ListProjectRoles获取项目有哪些角色code列表。
     * 默认预设角色枚举如下：
     * - role\_project\_owner	项目所有者
     * - role\_project\_admin	空间管理员
     * - role\_project\_dev	开发
     * - role\_project\_pe	运维
     * - role\_project\_deploy	部署
     * - role\_project\_guest	访客
     * - role\_project\_security	安全管理员
     * - role\_project\_tester	体验者
     * - role\_project\_erd	模型设计师
     * @example `role_project_guest`
     */
    "RoleCode": string;
}
