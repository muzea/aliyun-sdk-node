export interface CreateMemberResponse {
    /**
     * 请求ID。
     * @example `DA869D1B-035A-43B2-ACC1-C56681BD9FAA`
     */
    RequestId: string;
    /**
     * 成员列表。
     */
    Members: {
        /**
         * 用户ID。
         * @example `21513926******88039
        `
         */
        UserId: string;
        /**
         * 角色列表。
         */
        Roles: string[];
        /**
         * 显示名。
         * @example `myDisplayName`
         */
        DisplayName: string;
        /**
         * 成员ID。
         * @example `145883-21513926******88039
        `
         */
        MemberId: string;
    }[];
}
