export interface GetMemberResponse {
    /**
     * 请求ID。
     * @example `5A14FA81-DD4E-******-6343FE44B941`
     */
    RequestId: string;
    /**
     * 用户ID。
     * @example `21513926******88039`
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
     * @example `145883-21513926******88039
    `
     */
    MemberId: string;
}
