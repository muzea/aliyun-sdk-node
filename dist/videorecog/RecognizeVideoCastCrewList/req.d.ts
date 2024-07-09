export interface RecognizeVideoCastCrewListRequest {
    /**
     * 视频URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `https://shanghai.oss-cn-shanghai.aliyuncs.com/download/xxxx.mp4`
     */
    "VideoUrl": string;
    /**
     * 场景结果输出功能参数控制。
     */
    "Params"?: {
        /**
         * 视频信息提取类型：
         * - subtitles：字幕提取。
         * - cast：演职员表提取。
         * @example `cast`
         */
        Type: string;
    }[];
}
