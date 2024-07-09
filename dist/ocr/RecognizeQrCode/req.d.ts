export interface RecognizeQrCodeRequest {
    /**
     * 1
     */
    "Tasks": {
        /**
         * 待检测图像的URL地址。JSON数组中的每个元素是一个图片检测任务结构体（image表）。最多支持10个元素，即最多同时对10张图片进行检测。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
         * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/ocr/RecognizeQrCode/RecognizeQrCode6.jpg`
         */
        ImageURL: string;
    }[];
}
