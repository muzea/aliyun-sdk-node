export interface RefineMaskRequest {
    /**
     * 与输入图像对应的粗糙Mask图像。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageseg/RefineMask/RefineMask6.jpg`
     */
    "MaskImageURL": string;
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageseg/RefineMask/RefineMask1.jpg`
     */
    "ImageURL": string;
}
