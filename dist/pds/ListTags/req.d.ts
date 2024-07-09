export interface ListTagsRequest {
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
         * 图片缩略图处理
         * @example `image/resize,w_200`
         */
        image_thumbnail_process: string;
        /**
         * 视频缩略图处理
         * @example `video/snapshot,t_7000,f_jpg,w_800,h_600,m_fast`
         */
        video_thumbnail_process: string;
    };
}
