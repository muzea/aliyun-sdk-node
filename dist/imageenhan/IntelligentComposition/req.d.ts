export interface IntelligentCompositionRequest {
    /**
     * 输出框的个数，默认值5，取值范围1~10，小于或超出范围会截断取值。
     * @example `5`
     */
    "NumBoxes"?: number;
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/IntelligentComposition/IntelligentComposition3.jpg`
     */
    "ImageURL": string;
}
