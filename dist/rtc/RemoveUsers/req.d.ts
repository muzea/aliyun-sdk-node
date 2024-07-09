export interface RemoveUsersRequest {
    /**
     * 应用ID，通过控制台创建和查询，仅支持传单个ID。
     * @example `eo85****`
     */
    "AppId": string;
    /**
     * 已加入的频道ID，仅支持传单个ID。
     * @example `testid`
     */
    "ChannelId": string;
    /**
     * 用户列表，N的取值：1～30。
     */
    "Users": {
        /**
         * 用户ID。
         * @example `1811****`
         */
        UserId: string;
    }[];
}
