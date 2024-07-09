export interface SuperResolveVideoRequest {
    /**
     * 输入视频URL。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videoenhan/SuperResolveVideo/SuperResolveVideo2.mp4`
     */
    "VideoUrl": string;
    /**
     * 输出视频编码率，单位为Mbps，默认10 Mbps。取值范围1~100。
     * @example `5`
     */
    "BitRate"?: number;
}
