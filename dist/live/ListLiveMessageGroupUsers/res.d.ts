export interface ListLiveMessageGroupUsersResponse {
    /**
     * 请求ID。
     * @example `A1D75BEA-1329-116F-B29C-76F3F200****`
     */
    RequestId: string;
    /**
     * 需要查询的群组的GroupID。
     * @example `grouptest`
     */
    GroupId: string;
    /**
     * 下一页的起始位置，若没有下一页则为0。
     * @example `0`
     */
    NextPageToken: number;
    /**
     * 是否有下一页。
     * @example `false`
     */
    Hasmore: boolean;
    /**
     * 对象数组。
     */
    UserList: {
        /**
         * 查询的用户ID。
         * @example `uid1`
         */
        UserId: string;
        /**
         * 用户扩展信息。
         * @example `info1`
         */
        UserInfo: string;
    }[];
}
