export interface ListOfflineMessagesResponse {
    /**
     * 请求ID。
     * @example `629586FE-CB2E-4742-995E-121F952CEB72`
     */
    RequestId: string;
    /**
     * 离线消息分页查询数据对象。
     */
    OfflineMessages: {
        /**
         * 分页对象。
         */
        Pagination: {
            /**
             * 分页页码
             * @example `1`
             */
            PageIndex: number;
            /**
             * 总分页数
             * @example `2`
             */
            TotalPageCount: number;
            /**
             * 分页每页数据集大小
             * @example `20`
             */
            PageSize: number;
            /**
             * 数据集总数
             * @example `30`
             */
            TotalCount: number;
        };
        /**
         * 离线消息列表。
         */
        List: {
            /**
             * 消息失效时间
             * @example `1525693420000`
             */
            ExpiredTime: number;
            /**
             * 消息ID
             * @example `106577`
             */
            Mid: number;
            /**
             * 消息创建时间
             * @example `1525517606000`
             */
            GmtCreate: number;
        }[];
    };
}
