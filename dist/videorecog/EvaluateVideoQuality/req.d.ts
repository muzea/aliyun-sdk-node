export interface EvaluateVideoQualityRequest {
    /**
     * 视频URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://public-vigen-video.oss-cn-shanghai.aliyuncs.com/Common/xxx/dont_delete/decaption/123.mp4`
     */
    "VideoUrl": string;
    /**
     * 质量评估模式。取值如下：
     * - general（默认）：基础质量评估。
     * - vqa_plus：基础质量评估及瑕疵质量评估。
     * @example `vqa_plus`
     */
    "Mode"?: string;
}
