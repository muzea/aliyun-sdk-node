export interface RemoveImageSubtitlesRequest {
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * > URL地址中不能包含中文字符。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/RemoveImageSubtitles/RemoveImageSubtitles1.jpg`
     */
    "ImageURL": string;
    /**
     * 字幕区域的左上角点x坐标相对图像宽度的占比值，取值范围0~1。
     * @example `0`
     */
    "BX"?: number;
    /**
     * 字幕区域的左上角点y坐标相对图像高度的占比值，取值范围0~1。
     * @example `0.75`
     */
    "BY"?: number;
    /**
     * 字幕区域的宽度相对图像宽度的占比值，取值范围0~1。
     * @example `1`
     */
    "BW"?: number;
    /**
     * 字幕区域的高度相对图像高度的占比值，取值范围0~1。
     * @example `0.25`
     */
    "BH"?: number;
}
