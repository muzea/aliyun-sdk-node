export interface CompareFaceWithMaskRequest {
    /**
     * 图像A的URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `https://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/CompareFaceWithMask/CompareFaceWithMask-left1.jpeg`
     */
    "ImageURLA": string;
    /**
     * 图像B的URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `https://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/CompareFaceWithMask/CompareFaceWithMask-right1.jpeg`
     */
    "ImageURLB": string;
    /**
     * 质量分阈值，对人脸图片进行质量分析判断，若某张人脸质量分小于该阈值，则会在返回结果上增加MessageTips说明。
     * @example `97.0`
     */
    "QualityScoreThreshold"?: number;
}
