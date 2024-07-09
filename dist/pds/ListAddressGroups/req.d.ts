export interface ListAddressGroupsRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 空间id
         * @example `1`
         */
        drive_id: string;
        /**
         * 限定此次返回资源的数量。如果不设定，默认返回100，最大不能超过100。
         * @example `100`
         */
        limit: number;
        /**
         * 设定结果从marker之后按字母排序的第一个开始返回。如果不设定，则从头开始返回数据。
         * 默认值：无
         * @example `NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg`
         */
        marker: string;
        /**
         * 图片缩略图处理样式
         * @example `image/resize,w_200`
         */
        image_thumbnail_process: string;
        /**
         * 视频缩略图处理样式
         * @example `video_thumbnail_process`
         */
        video_thumbnail_process: string;
    };
}
