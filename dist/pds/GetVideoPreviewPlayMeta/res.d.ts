export interface GetVideoPreviewPlayMetaResponse {
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
     * 播放元信息
     */
    video_preview_play_meta: any;
}
