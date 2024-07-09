export interface CheckLiveMessageUsersOnlineResponse {
    /**
     * 请求ID。
     * @example `178F572F-AECF-100B-937A-B8047B4D****`
     */
    RequestId: string;
    /**
     * 查询的用户列表。
     */
    UserList: {
        /**
         * 用户是否在线。
         * @example `false`
         */
        Online: boolean;
        /**
         * 用户ID。
         * @example `uid1`
         */
        UserId: string;
    }[];
}
