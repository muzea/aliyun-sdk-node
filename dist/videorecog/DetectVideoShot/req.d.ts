export interface DetectVideoShotRequest {
    /**
     * 视频URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videorecog/DetectVideoShot/DetectVideoShot2.mp4`
     */
    "VideoUrl": string;
}
