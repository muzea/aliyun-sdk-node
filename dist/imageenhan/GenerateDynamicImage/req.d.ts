export interface GenerateDynamicImageRequest {
    /**
     * 输入图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `https://vigen-invi.oss-cn-shanghai.aliyuncs.com/temp/xl/dynamicPhoto/viapi_test_images/xxxx.jpg`
     */
    "Url": string;
    /**
     * 天空和头发的微动状态。采用二进制字符串，某一位为1表示对应区域进行微动。<br>最低位为1，表示天空微动；第二位为1，表示头发微动。
     * - `1`和`01`均表示天空微动。
     * - `10`表示头发微动，天空不动。
     * - `11`表示头发和天空都微动。
     * @example `11`
     */
    "Operation": string;
}
