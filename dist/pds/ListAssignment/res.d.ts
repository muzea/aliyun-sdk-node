export interface ListAssignmentResponse {
    /**
     * 授权信息列表
     */
    assignment_list: {
        /**
         * 域id
         * @example `hz1`
         */
        domain_id: string;
        /**
         * 被授权的对象，表示一个用户或者一个群组
         */
        identity: any;
        /**
         * 被授权的角色ID
         * @example `SystemGroupAdmin`
         */
        role_id: string;
        /**
         * 管理的资源类型，比如： RT_Group，表示群组类型
         * @example `RT_Group`
         */
        manage_resource_type: string;
        /**
         * 管理的资源ID，比如群组的ID
         * @example `105***b82`
         */
        manage_resource_id: string;
        /**
         * 创建者ID
         * @example `216***c83`
         */
        creator: string;
        /**
         * 创建时间，从1970年1月1日0点到当前的毫秒时间戳
         * @example `1622682267564`
         */
        created_at: number;
    }[];
    /**
     * 下一页起始资源标识符, 最后一页该值为空。
     * @example `NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg`
     */
    next_marker: string;
}
