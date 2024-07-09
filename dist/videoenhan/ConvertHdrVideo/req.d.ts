export interface ConvertHdrVideoRequest {
    /**
     * 输入视频URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `https://invi-label.oss-cn-shanghai.aliyuncs.com/label/temp/faceswap/test_for_api/xxxx.mp4`
     */
    "VideoURL": string;
    /**
     * 输出视频的HDR格式，默认为PQ。仅支持`PQ`和`HLG`两种模式。
     * @example `HLG`
     */
    "HDRFormat"?: string;
    /**
     * 输出视频最大亮度，单位nit。
     * - PQ模式下该参数固定为600nit，输入无效。
     * - HLG模式下该参数从500nit~1000nit范围里设定，默认1000nit。
     * @example `1000`
     */
    "MaxIlluminance"?: number;
    /**
     * 输出视频码率，单位为M，默认20M，取值范围`[8,200]`。
     * @example `30`
     */
    "Bitrate"?: number;
}
