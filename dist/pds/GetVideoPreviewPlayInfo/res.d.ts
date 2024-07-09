export interface GetVideoPreviewPlayInfoResponse {
    /**
     * 域id
     * @example `bj1`
     */
    domain_id: string;
    /**
     * 分享id
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
     * @example `fileid1`
     */
    file_id: string;
    /**
     * 播放信息
     */
    video_preview_play_info: any;
    /**
     * 错误码
     * @example `VideoPreviewWaitAndRetry`
     */
    code: string;
    /**
     * 错误信息
     * @example `media is transcoding, please wait and retry.`
     */
    message: string;
    /**
     * master m3u8 的 url
     * @example `https://pds-xxx-valueadd.oss-xxx.aliyuncs.com/qv/xxx/master.m3u8`
     */
    master_url: string;
}
