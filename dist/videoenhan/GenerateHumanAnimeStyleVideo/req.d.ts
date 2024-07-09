export interface GenerateHumanAnimeStyleVideoRequest {
    /**
     * 视频URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `https://viapi-test.oss-cn-shanghai.aliyuncs.com/test/xxx/eas/EvaluateVideoQuality/123.mp4`
     */
    "VideoUrl": string;
    /**
     * 卡通化的风格。取值如下：
     * - anime：日漫风
     * - 3d：3D特效
     * - handdrawn：手绘风
     * - sketch：铅笔画
     * - artstyle：艺术特效
     * @example `anime`
     */
    "CartoonStyle": string;
}
