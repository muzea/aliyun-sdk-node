export interface GenerateVideoCoverRequest {
    /**
     * 视频URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videorecog/videorecog/videorecog1.mp4`
     */
    "VideoUrl": string;
    /**
     * 是否输出GIF格式的封面。true表示输出GIF格式封面，false表示输出普通图片封面。
     * @example `false`
     */
    "IsGif": boolean;
}
