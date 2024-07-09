export interface ListLiveMessageGroupByPageResponse {
    /**
     * 请求ID。
     * @example `B5D95365-5A46-1A6A-BBF5-C7B6BDED****`
     */
    RequestId: string;
    /**
     * 总条数。
     * @example `50`
     */
    TotalCount: number;
    /**
     * 返回数据的当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页大小。
     * @example `20`
     */
    PageSize: number;
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
         * 管理员用户ID列表。
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
