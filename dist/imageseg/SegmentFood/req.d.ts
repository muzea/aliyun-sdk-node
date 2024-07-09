export interface SegmentFoodRequest {
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageseg/SegmentFood/SegmentFood5.jpg`
     */
    "ImageURL": string;
    /**
     * 指定返回的图像形式。
     * - 如果不设置，则返回四通道PNG图。
     * - 如果设置为`mask`，则返回单通道mask。
     * - 如果设置为`whiteBK`，则返回白底图。
     * @example `mask`
     */
    "ReturnForm"?: string;
}
