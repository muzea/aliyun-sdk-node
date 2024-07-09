export interface GetVideoPreviewPlayInfoRequest {
    "domain_id": string;
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
        /**
         * 清晰度模板id。
         * 填空表示取所有可用清晰度模板
         * @example `264_480p`
         */
        template_id: string;
        /**
         * 是否不获取播放url。
         * 如果填true，只会获取转码元信息，并不会触发ts转码，返回的信息中没有播放url。否则会返回播放url，如果此template_id的视频还未转码，后台将触发器转码。
         * 转码会产生对应的增值服务费用
         * @example `true`
         */
        get_without_url: boolean;
        /**
         * url超时时间，单位：秒。
         * 默认15分钟，最大4小时。
         * @example `3600`
         */
        url_expire_sec: number;
        /**
         * 是否获取 master m3u8 的 url，仅在 category = quick_video 时有效
         * @example `false`
         */
        get_master_url: boolean;
    };
}
