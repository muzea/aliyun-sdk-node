export interface ListItemsResponse {
    /**
     * 结果
     */
    result: {
        /**
         * 统计
         */
        total: {
            /**
             * 场景加权物品数量
             * @example `10`
             */
            sceneWeightItem: number;
            /**
             * 全部数量
             * @example `5000`
             */
            totalCount: number;
            /**
             * 列出数量
             * @example `3000`
             */
            queryCount: number;
            /**
             * 场景可推荐物品数量
             * @example `200`
             */
            sceneRecommendItem: number;
            /**
             * 加权物品
             * @example `10`
             */
            weightItem: number;
            /**
             * 实例可推荐物品数量
             * @example `200`
             */
            instanceRecommendItem: number;
        };
        /**
         * 详细信息
         */
        detail: {
            /**
             * 标题
             * @example `test`
             */
            title: string;
            /**
             * 类目路径
             * @example `1_2`
             */
            categoryPath: string;
            /**
             * itemId，同数据规范同字段
             * @example `123`
             */
            itemId: string;
            /**
             * itemType，同数据规范同字段
             * @example `item`
             */
            itemType: string;
            /**
             * 是否可推荐
             * @example `1`
             */
            status: string;
            /**
             * 品牌ID
             * @example `1`
             */
            brandId: string;
            /**
             * 店铺ID
             * @example `1`
             */
            shopId: string;
            /**
             * 发布时间
             * @example `1647998107012`
             */
            pubTime: string;
            /**
             * 频道
             * @example `news`
             */
            channel: string;
            /**
             * 持续时间
             * @example `30`
             */
            duration: string;
            /**
             * 作者
             * @example `abc`
             */
            author: string;
            /**
             * 过期时间
             * @example `1647998107012`
             */
            expireTime: string;
        }[];
    };
    /**
     * 当前请求的RequestID
     * @example `6839AE7C-A984-48C1-AC17-331BAC6D97BC`
     */
    requestId: string;
}
