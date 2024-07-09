export interface GetVideoPreviewPlayMetaRequest {
    "domain_id"?: string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 分享id。
         * 如果通过分享操作文件，请携带`x-share-token` header鉴权并传递此字段，此时`drive_id`无效。否则请使用`aksk`或者`access_token`方式鉴权，并传递`drive_id`字段。
         * `share_id`和`drive_id`两者必须有一个字段赋值。
         * @example `7JQX1FswpQ8`
         */
        share_id: string;
        /**
         * 空间id
         * @example `1`
         */
        drive_id: string;
        /**
         * 文件id
         * @example `9520943DC264`
         */
        file_id: string;
        /**
         * 所属分类。
         * 需要开通对应的转码功能，枚举如下：
         * - live_transcoding（live边转边播）
         * - quick_video（quick边转边播）
         * - offline_audio（离线音频转码）
         * - offline_video（离线视频转码）
         * @example `live_transcoding`
         */
        category: string;
    };
}
