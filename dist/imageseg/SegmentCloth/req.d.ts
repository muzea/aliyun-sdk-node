export interface SegmentClothRequest {
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageseg/SegmentCloth/SegmentCloth1.jpg`
     */
    "ImageURL": string;
    /**
     * 服饰类别，取值范围：
     * - tops：上衣
     * - coat：外套
     * - skirt：裙装
     * - pants：裤装
     * - bag：包类
     * - shoes：鞋子
     * - hat：帽子
     */
    "ClothClass"?: string[];
    /**
     * 指定返回的图像格式，取值范围：
     * - whiteBK：返回白底图。
     * - mask：返回单通道mask。
     * - 如果不设置，则返回四通道PNG图。
     * @example `whiteBK`
     */
    "ReturnForm"?: string;
}
