export interface ListWorkspaceUsersResponse {
    /**
     * 请求ID。
     * @example `1e195c5116124202371861018d5bde`
     */
    RequestId: string;
    /**
     * 符合过滤条件的用户数量。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 用户列表。
     */
    Users: {
        /**
         * 用户ID。
         * @example `1611******3000`
         */
        UserId: string;
        /**
         * 用户名。
         * @example `she******mo`
         */
        UserName: string;
    }[];
}
