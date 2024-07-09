export interface ToneSdrVideoRequest {
    /**
     * 输入视频URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `https://invi-label.oss-cn-shanghai.aliyuncs.com/label/temp/faceswap/test_for_api/xxxx.mp4`
     */
    "VideoURL": string;
    /**
     * 输出视频码率，单位为M，默认20M，取值范围`[8,200]`。
     * @example `30`
     */
    "Bitrate"?: number;
    /**
     * 使用的调色模型，可选`auto_l1`（较弱）和`auto_l2`（较强）两种方式，默认为`auto_l2`。
     * @example `auto_l2`
     */
    "RecolorModel"?: string;
}
