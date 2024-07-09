export interface GetStoryRequest {
    "domain_id": string;
    /**
     * 请求体参数
     */
    "body"?: {
        /**
         * 空间 id
         * @example `1`
         */
        drive_id: string;
        /**
         * 故事 id
         * @example `9132e0d8-fe92-4e56-86c3-f5f112308003`
         */
        story_id: string;
        /**
         * 图片封面缩略图控制参数
         * @example `image/resize,m_fill,h_128,w_128,limit_0/format,jpg`
         */
        cover_image_thumbnail_process: string;
        /**
         * 视频封面缩略图控制参数
         * @example `video/snapshot,t_1000,f_jpg,w_0,h_0,m_fast,ar_auto`
         */
        cover_video_thumbnail_process: string;
        /**
         * 故事文件图片 url 控制参数
         * @example `image/resize,m_fill,h_128,w_128,limit_0/format,jpg`
         */
        image_url_process: string;
        /**
         * 故事文件图片缩略图控制参数
         * @example `image/resize,m_fill,h_128,w_128,limit_0/format,jpg`
         */
        image_thumbnail_process: string;
        /**
         * 故事文件视频缩略图控制参数
         * @example `video/snapshot,t_1000,f_jpg,w_0,h_0,m_fast,ar_auto`
         */
        video_thumbnail_process: string;
        /**
         * 缩略图过期时间。单位为秒，最短 10 秒，最长 86400 秒
         * 默认15分钟。
         * @example `900`
         */
        url_expire_sec: number;
    };
}
