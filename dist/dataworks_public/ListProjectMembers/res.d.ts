export interface ListProjectMembersResponse {
    /**
     * 请求ID。
     * @example `1AFAE64E-D1BE-432B-A9****`
     */
    RequestId: string;
    /**
     * 查询结果。
     */
    Data: {
        /**
         * 当前的页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页的大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 结果的总条数。
         * @example `3`
         */
        TotalCount: number;
        /**
         * 工作空间的成员列表。
         */
        ProjectMemberList: {
            /**
             * 查询状态。取值如下：
             *
             * - 0 ，表示正常（NORMAL）。
             * - 1，表示禁用（FORBIDDEN）。
             * - 2，表示已删除（DELETED）。
             * @example `0`
             */
            Status: string;
            /**
             * 成员的用户ID。
             * @example `121`
             */
            ProjectMemberId: string;
            /**
             * 工作空间成员的昵称。
             * @example `zhangsan`
             */
            Nick: string;
            /**
             * 成员的名称。
             * @example `张三`
             */
            ProjectMemberName: string;
            /**
             * 成员的类型，取值如下：
             * - 1： 阿里云主账号（USER_ALIYUN）；
             * - 5：RAM USER子账号（USER_UBACCOUNT）；
             * - 6：RAM ROLE角色（USER_STS_ROLE）。
             * @example `1`
             */
            ProjectMemberType: string;
            /**
             * 成员所拥有的角色列表。
             */
            ProjectRoleList: {
                /**
                 * 角色ID。
                 * @example `1`
                 */
                ProjectRoleId: number;
                /**
                 * 角色的类型。取值如下：
                 * - SYSTEM（0）：系统角色；
                 * - USER_CUSTOM（2）：自定义角色。
                 * @example `0`
                 */
                ProjectRoleType: string;
                /**
                 * 角色的名称。
                 * DataWorks为您提供了预设角色，您也可以根据业务需求自定义角色。角色更多详情，请参见[用户、角色与权限概述](~~295463~~)。
                 * @example `访客`
                 */
                ProjectRoleName: string;
                /**
                 * 角色Code。
                 * DataWorks为您提供了预设角色，您也可以根据业务需求自定义角色。角色更多详情，请参见[用户、角色与权限概述](~~295463~~)。
                 * @example `role_project_guest`
                 */
                ProjectRoleCode: string;
            }[];
        }[];
    };
}
