export interface ListProjectRolesResponse {
    /**
     * 请求ID。
     * @example `1AFAE64E-D1BE-432B-A9****`
     */
    RequestId: string;
    /**
     * 工作空间的角色列表。
     */
    ProjectRoleList: {
        /**
         * 工作空间的角色ID。
         * @example `1`
         */
        ProjectRoleId: number;
        /**
         * 工作空间的角色类型。
         * @example `0`
         */
        ProjectRoleType: string;
        /**
         * 工作空间的角色名称。
         * @example `访客`
         */
        ProjectRoleName: string;
        /**
         * 工作空间的角色Code。
         * @example `role_project_guest`
         */
        ProjectRoleCode: string;
    }[];
}
