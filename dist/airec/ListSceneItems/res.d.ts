export interface ListSceneItemsResponse {
    /**
     * 返回详情结果
     */
    result: {
        /**
         * 统计
         */
        total: {
            /**
             * 实例中item总数
             * @example `1000`
             */
            totalCount: number;
            /**
             * 当前场景加权的item数
             * @example `1000`
             */
            sceneWeightItem: number;
            /**
             * 当前场景下可推荐的item数
             * @example `1000`
             */
            sceneRecommendItem: number;
            /**
             * 实例中加权的item数
             * @example `1000`
             */
            weightItem: number;
            /**
             * 当前实例可推荐的item数
             * @example `1000`
             */
            instanceRecommendItem: number;
        };
        /**
         * 详情
         */
        detail: {
            /**
             * 标题
             * @example `title`
             */
            title: string;
            /**
             * 类目路径
             * @example `12_34`
             */
            categoryPath: string;
            /**
             * item_id
             * @example `123`
             */
            itemId: string;
            /**
             * item_type
             * @example `video`
             */
            itemType: string;
            /**
             * 是否可推荐，1为可推荐，0为不可推荐
             * @example `1`
             */
            status: string;
            /**
             * 品牌id
             * @example `123`
             */
            brandId: string;
            /**
             * 店铺id
             * @example `123`
             */
            shopId: string;
            /**
             * 发布时间
             * @example `1612687809`
             */
            pubTime: string;
            /**
             * 频道
             * @example `娱乐`
             */
            channel: string;
            /**
             * 停留时长
             * @example `300`
             */
            duration: string;
            /**
             * 作者
             * @example `zhangsan`
             */
            author: string;
            /**
             * 失效时间
             * @example `1612687809`
             */
            expireTime: string;
        }[];
    };
    /**
     * 错误码
     * @example `InternalServerError`
     */
    code: string;
    /**
     * 请求id
     * @example `8F81A922-6C81-46D6-B78C-CC35E16B1691`
     */
    requestId: string;
    /**
     * 错误详情
     * @example `An internal server error occurred`
     */
    message: string;
}
