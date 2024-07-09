export interface AdjustVideoColorRequest {
    /**
     * 视频URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videoenhan/AdjustVideoColor/AdjustVideoColor1.mp4`
     */
    "VideoUrl": string;
    /**
     * 输出视频码率，单位为M，默认20M，取值范围`[8,200]`。
     * @example `20`
     */
    "VideoBitrate"?: number;
    /**
     * 输出视频编码格式，可选h264、hevc、prores三种。默认值为h264。
     * @example `h264`
     */
    "VideoCodec"?: string;
    /**
     * 输出视频格式，可选mp4、mov两种。默认值为mp4。
     * @example `mp4`
     */
    "VideoFormat"?: string;
    /**
     * 指定调色模式，默认值为LogC。具体请参见调色模式说明。
     * @example `LogC`
     */
    "Mode"?: string;
}
