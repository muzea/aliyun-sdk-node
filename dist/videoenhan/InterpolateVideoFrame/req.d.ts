export interface InterpolateVideoFrameRequest {
    /**
     * 输入视频URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videoenhan/InterpolateVideoFrame/InterpolateVideoFrame3.mp4`
     */
    "VideoURL": string;
    /**
     * 输出视频的帧率，默认输入50，取值范围`[1,120]`。
     * @example `70`
     */
    "FrameRate"?: number;
    /**
     * 输出视频码率，单位为Mbps，默认20 Mbps，取值范围`[8,200]`
     * @example `30`
     */
    "Bitrate"?: number;
}
