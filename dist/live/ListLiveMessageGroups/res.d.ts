export interface ListLiveMessageGroupsResponse {
    /**
     * 请求ID。
     * @example `B5D95365-5A46-1A6A-BBF5-C7B6BDED****`
     */
    RequestId: string;
    /**
     * 是否有下一页。
     * @example `false`
     */
    Hasmore: boolean;
    /**
     * 下一页的起始位置，当Hasmore为false时，不返回该字段。
     * @example `1001`
     */
    NextpageToken: string;
    /**
     * 群组列表。
     */
    GroupList: {
        /**
         * 群组ID。
         * @example `cU9MeBqf****`
         */
        GroupId: string;
        /**
         * 创建者ID。
         * @example `user_77`
         */
        CreatorId: string;
        /**
         * 管理员列表。
         */
        AdminList: string[];
        /**
         * 创建时间，用UNIX时间戳表示，单位：秒。
         * @example `1698299727`
         */
        Createtime: number;
        /**
         * 群组名。
         * @example `mytestgroup`
         */
        GroupName: string;
        /**
         * 群组扩展信息。
         * @example `testgroupinfo`
         */
        GroupInfo: string;
        /**
         * 是否已删除。
         * @example `true`
         */
        Delete: boolean;
    }[];
}
