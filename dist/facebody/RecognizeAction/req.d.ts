export interface RecognizeActionRequest {
    /**
     * 输入内容类型，包括视频和图像两种类型。
     * - 0：表示输入视频URL或视频Base64编码字符串。
     * - 1：表示输入图像URL或图像Base64编码字符串。
     * - 其他：非法输入。
     * @example `0`
     */
    "Type": number;
    /**
     * Type为0时需要输入的视频URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/RecognizeAction/RecognizeAction-video1.mp4`
     */
    "VideoUrl"?: string;
    /**
     * 图像列表
     */
    "URLList"?: {
        /**
         * Type为1时需要输入的图像URL地址，**必须输入4张图像，且4张图像建议为两秒钟视频均匀采样的图像，分辨率和通道数必须一致**。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
         * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/RecognizeAction/1RecognizeAction1.png`
         */
        URL: string;
        /**
         * 图像Base64编码字符串，与URL共存时，URL优先。文件的Base64编码处理操作，请参见[文件Base64处理](~~468191~~)。
         * @example `/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgQ****`
         */
        imageData: string;
    }[];
    /**
     * 视频Base64编码字符串，与VideoURL共存时，VideoURL优先。文件的Base64编码处理操作，请参见[文件Base64处理](~~468191~~)。
     * @example `iVBORw0KGgoAAAANSUhEUgAAAoAAAAHJCAIAAACaEB9NAAEAAElEQVR4nNT9Wb****`
     */
    "VideoData"?: string;
}
