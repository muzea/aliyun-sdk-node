export interface CheckLiveMessageUsersInGroupResponse {
    /**
     * 请求ID。
     * @example `F1F68D81-1543-1FE4-B56E-82200DD2****`
     */
    RequestId: string;
    /**
     * 查询的用户列表。
     */
    Users: {
        /**
         * 用户ID。
         * @example `uid1`
         */
        UserId: string;
        /**
         * 用户是否在群组中。
         * @example `false`
         */
        Online: boolean;
    }[];
}
