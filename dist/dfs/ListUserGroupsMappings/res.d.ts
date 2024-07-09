export interface ListUserGroupsMappingsResponse {
    /**
     * 请求ID。
     * @example `55C5FFD6-BF99-41BD-9C66-FFF39189****`
     */
    RequestId: string;
    /**
     * 使用分页查询是，指示是否还有数据。
     * @example `true`
     */
    HasMore: boolean;
    /**
     * 下次分页查询的NextToken值。
     * @example `user1`
     */
    NextToken: string;
    /**
     * 文件系统中存在的用户和组的映射关系。
     */
    UserGroupsMappings: {
        /**
         * 用户名。
         * @example `user1`
         */
        UserName: string;
        /**
         * 用户名所属的组列表。
         */
        GroupNames: string[];
    }[];
}
