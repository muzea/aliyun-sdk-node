export interface TaggingAdImageRequest {
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `https://viapi-demo.oss-cn-shanghai.aliyuncs.com/viapi-demo/images/DetectImageElements/xxxx.png`
     */
    "ImageURL": string;
}
