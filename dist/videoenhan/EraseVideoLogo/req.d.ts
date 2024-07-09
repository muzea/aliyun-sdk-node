export interface EraseVideoLogoRequest {
    /**
     * 视频URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videoenhan/EraseVideoLogo/EraseVideoLogo1.mp4`
     */
    "VideoUrl": string;
    /**
     * Logo区域位置信息。
     */
    "Boxes"?: {
        /**
         * Logo区域宽度与视频宽度的占比值，取值0~1。
         * @example `1.0`
         */
        W: number;
        /**
         * Logo区域高度与视频高度的占比值，取值0~1。
         * @example `1.0`
         */
        H: number;
        /**
         * Logo区域左上角点y坐标与视频高度的占比值，取值0~1。
         * @example `0.0`
         */
        Y: number;
        /**
         * Logo区域左上角点x坐标与视频宽度的占比值，取值0~1。
         * @example `0.0`
         */
        X: number;
    }[];
}
