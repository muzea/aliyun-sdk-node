export interface EnhanceVideoQualityRequest {
    /**
     * 输入视频URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `https://invi-label.oss-cn-shanghai.aliyuncs.com/label/temp/faceswap/test_for_api/xxxx.mp4`
     */
    "VideoURL": string;
    /**
     * 输出视频的宽，默认为输入2倍，单位为px，取值范围`[180,7680]`。
     * @example `2560`
     */
    "OutPutWidth"?: number;
    /**
     * 输出视频的高，默认为输入2倍，单位为px，取值范围`[180,4320]`。
     * @example `1920`
     */
    "OutPutHeight"?: number;
    /**
     * 输出视频的帧率，默认50帧，取值范围`[1,120]`。
     * @example `50`
     */
    "FrameRate"?: number;
    /**
     * 输出视频的HDR格式，仅支持PQ和HLG两种格式，默认为PQ。
     * @example `PQ`
     */
    "HDRFormat"?: string;
    /**
     * 输出视频最大亮度，单位为nit。
     * - 在**PQ**模式下该参数固定为600nit，输入无效。
     * - 在**HLG**模式下该参数取值范围为500nit~1000nit，默认1000nit。
     * @example `600`
     */
    "MaxIlluminance"?: number;
    /**
     * 输出视频码率，单位为MB，默认20MB，取值范围`[8,200]`。
     * @example `20`
     */
    "Bitrate"?: number;
}
