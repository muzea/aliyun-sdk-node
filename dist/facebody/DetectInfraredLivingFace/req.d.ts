export interface DetectInfraredLivingFaceRequest {
    /**
     * 待检测的图像URL地址数组。
     */
    "Tasks": {
        /**
         * 待检测的图像URL地址。JSON数组中的每个元素是一个图片检测任务结构体（image表）。最多支持10个元素，即同时最多对10张图片进行检测。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
         * > 对于该接口，系统会自动将OSS链接地址转成内网地址然后再下载文件，所以调用该接口并不会产生OSS流量计费。
         * @example `https://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/DetectInfraredLivingFace/DetectInfraredLivingFace.jpeg`
         */
        ImageURL: string;
    }[];
}
