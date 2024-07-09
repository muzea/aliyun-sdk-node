export interface ListApplicationMembersResponse {
    /**
     * 列表总数
     * @example `100`
     */
    total: number;
    /**
     * 当前所在分页
     * @example `1`
     */
    current: number;
    /**
     * 分页规模
     * @example `10`
     */
    pageSize: number;
    /**
     * 总页数
     * @example `10`
     */
    pages: number;
    /**
     * 成员列表
     */
    records: {
        /**
         * 成员id，类型为User时为成员的阿里云UID
         * @example `1332695887xxxxxx`
         */
        id: string;
        /**
         * 成员类型，目前只支持User
         * @example `User`
         */
        type: string;
        /**
         * 成员显示名
         * @example `成员1`
         */
        displayName: string;
        /**
         * 成员描述
         * @example `成语描述`
         */
        description: string;
        /**
         * 头像
         * @example `http://`
         */
        avatar: string;
        /**
         * 成员的角色列表
         */
        roleList: {
            /**
             * 角色名
             * @example `developer`
             */
            name: string;
            /**
             * 角色显示名
             * @example `开发者`
             */
            displayName: string;
        }[];
    }[];
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `FC93CE1A-8D7A-13A9-8306-7465DE2E5C0F`
     */
    requestId: string;
}
