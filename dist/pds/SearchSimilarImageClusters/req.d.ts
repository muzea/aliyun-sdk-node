export interface SearchSimilarImageClustersRequest {
    "domain_id": string;
    /**
     * 请求参数
     */
    "body"?: {
        /**
         * 空间 id
         * @example `1`
         */
        drive_id: string;
        /**
         * 分页标记，从指定位置查询结果。若为空则表示从头开始查询。
         * @example `YWRzX3VzZXJfcHJvZmlsZV9je1bnQh***`
         */
        marker: string;
        /**
         * 限定此次返回结果的数量，取值范围\[1,100\]，默认50。
         * 返回结果可以小于指定的数量，但不能多于指定的数量。
         * @example `50`
         */
        limit: number;
        /**
         * 排序顺序
         * @example `desc`
         */
        order: string;
        /**
         * 图片缩略图处理样式
         * @example `image/resize,m_fill,h_128,w_128,limit_0/format,jpg`
         */
        image_thumbnail_process: string;
    };
}
