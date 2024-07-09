export interface GetShareLinkByAnonymousResponse {
    /**
     * 创建者id
     * @example `c9b7a5aa04d14ae3867fdc886fa01da4`
     */
    creator_id: string;
    /**
     * 创建者名字（已脱敏）
     * @example `AB***CD`
     */
    creator_name: string;
    /**
     * 创建者手机号（已脱敏）
     * @example `136****00`
     */
    creator_phone: string;
    /**
     * 过期时间
     * @example `2020-08-20T06:51:27.292Z`
     */
    expiration: string;
    /**
     * 修改时间
     * @example `2019-08-20T06:51:27.292Z`
     */
    updated_at: string;
    /**
     * 创建者头像
     * @example `https://aliyunpds.com/a.jpg`
     */
    avatar: string;
    /**
     * 分享名称
     * @example `百家讲坛-1.MP4`
     */
    share_name: string;
    /**
     * 预览次数
     * @example `80`
     */
    preview_count: number;
    /**
     * 转存次数
     * @example `2`
     */
    save_count: number;
    /**
     * 下载次数
     * @example `50`
     */
    download_count: number;
    /**
     * 被举报次数
     * @example `0`
     */
    report_count: number;
    /**
     * 视频预览次数
     * @example `5`
     */
    video_preview_count: number;
    /**
     * 访问次数
     * @example `30`
     */
    access_count: number;
    /**
     * 禁止预览
     * @example `false`
     */
    disable_preview: boolean;
    /**
     * 禁止转存
     * @example `false`
     */
    disable_save: boolean;
    /**
     * 禁止下载
     * @example `false`
     */
    disable_download: boolean;
    /**
     * 预览次数限制
     * @example `100`
     */
    preview_limit: number;
    /**
     * 转存次数限制
     * @example `100`
     */
    save_limit: number;
    /**
     * 下载次数限制
     * @example `100`
     */
    download_limit: number;
    /**
     * 转存和下载总次数限制
     * @example `200`
     */
    save_download_limit: number;
}
