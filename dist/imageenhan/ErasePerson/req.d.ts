export interface ErasePersonRequest {
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理（使用viapiutils显式的方案生成URL）](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/ErasePerson/ErasePerson1.jpg`
     */
    "ImageURL": string;
    /**
     * 图像对于Mask的URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理（使用viapiutils显式的方案生成URL）](~~155645~~)。
     * >Mask图是RGB3通道图，而非Alpha通道透明图。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/ErasePerson/ErasePerson6.jpg`
     */
    "UserMask": string;
}
