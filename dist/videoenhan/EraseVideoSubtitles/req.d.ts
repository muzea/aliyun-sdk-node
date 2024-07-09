export interface EraseVideoSubtitlesRequest {
    /**
     * 视频URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videoenhan/EraseVideoSubtitles/EraseVideoSubtitles1.mp4`
     */
    "VideoUrl": string;
    /**
     * 字幕区域左上角点x坐标/视频宽度，取值0~1。
     * @example `0`
     */
    "BX"?: number;
    /**
     * 字幕区域左上角点y坐标/视频高度，取值0~1。
     * @example `0.75`
     */
    "BY"?: number;
    /**
     * 字幕区域的宽度/视频宽度，取值0~1。
     * @example `1`
     */
    "BW"?: number;
    /**
     * 字幕区域的高度/视频高度，取值0~1。
     * @example `0.25`
     */
    "BH"?: number;
}
