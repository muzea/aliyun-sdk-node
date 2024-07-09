export interface ListFlowControlTaskItemsResponse {
    /**
     * 请求ID。
     * @example `8F81A922-6C81-46D6-B78C-CC35E16B1691`
     */
    requestId: string;
    /**
     * 返回参数。
     */
    result: {
        /**
         * 物品总条数。
         * @example `1`
         */
        totalCount: string;
        /**
         * 有效物品个数。
         * @example `1`
         */
        validCount: string;
        /**
         * 物品列表。
         */
        detail: {
            /**
             * 作者。
             * @example `zhangsan`
             */
            author: string;
            /**
             * 持续时间。
             * @example `18`
             */
            duration: string;
            /**
             * 物品ID。
             * @example `123`
             */
            itemId: string;
            /**
             * 物品Type。
             * @example `video`
             */
            itemType: string;
            /**
             * 过期时间。
             * @example `1612687809`
             */
            expireTime: string;
            /**
             * 类目路径。
             * @example `12_34`
             */
            categoryPath: string;
            /**
             * 发布时间。
             * @example `1661931487`
             */
            pubTime: string;
            /**
             * 最后修改时间。
             * @example `1662346558`
             */
            lastModifyTime: string;
            /**
             * 频道。
             * @example `news`
             */
            channel: string;
            /**
             * 权重。
             * @example `10`
             */
            weight: string;
            /**
             * 标题。
             * @example `test`
             */
            title: string;
            /**
             * 物品状态。
             * @example `1`
             */
            status: string;
        }[];
    };
}
