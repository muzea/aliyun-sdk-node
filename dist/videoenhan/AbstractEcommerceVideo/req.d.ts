export interface AbstractEcommerceVideoRequest {
    /**
     * 输入视频URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videoenhan/AbstractEcommerceVideo/AbstractEcommerceVideo1.mp4`
     */
    "VideoUrl": string;
    /**
     * 摘要时长，单位秒。
     * @example `5`
     */
    "Duration": number;
    /**
     * 输出视频的宽度。取值范围32~2160。
     * @example `480`
     */
    "Width"?: number;
    /**
     * 输出视频的高度。取值范围32~2160。
     * @example `480`
     */
    "Height"?: number;
}