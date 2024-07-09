export interface ListMembersResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 成员列表。
     */
    Members: {
        /**
         * 用户ID。
         * @example `215139******88039`
         */
        UserId: string;
        /**
         * 用户名。
         * @example `user1`
         */
        MemberName: string;
        /**
         * 创建UTC时间，时间格式为ISO8601。
         * @example `2021-01-21T17:12:35.232Z`
         */
        GmtCreateTime: string;
        /**
         * 角色列表。
         */
        Roles: string[];
        /**
         * 成员显示名。
         * @example `myDisplayName`
         */
        DisplayName: string;
        /**
         * 成员ID。
         * @example `14588*****51688039`
         */
        MemberId: string;
    }[];
    /**
     * 符合过滤条件的成员数量。
     * @example `1`
     */
    TotalCount: number;
}
