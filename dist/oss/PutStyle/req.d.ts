export interface PutStyleRequest {
    /**
     * Bucket名称。
     * @example `examplebucket
    `
     */
    "bucket": string;
    /**
     * 图片样式名称。
     * @example `imagestyle`
     */
    "styleName": string;
    /**
     * 样式分类。
     * 取值：image、document、video。
     * @example `image`
     */
    "category"?: string;
    /**
     * 保存图片样式信息的请求体。
     */
    "body"?: {
        /**
         * 保存图片样式信息列表的容器。
         */
        Style: any;
    };
}
