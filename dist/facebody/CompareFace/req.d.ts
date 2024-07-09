export interface CompareFaceRequest {
    /**
     * 质量分阈值，对人脸图片进行质量分析判断，若某张人脸质量分小于该阈值，则会在返回结果上增加MessageTips说明。
     * @example `98.5`
     */
    "QualityScoreThreshold"?: number;
    /**
     * 图像A的URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * > **ImageURLA**与**ImageDataA**二选一，当URL方式与Base64编码方式共存时，URL方式优先。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/CompareFace/CompareFace-right1.png`
     */
    "ImageURLA"?: string;
    /**
     * 图像B的URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * > **ImageURLB**与**ImageDataB**二选一，当URL方式与Base64编码方式共存时，URL方式优先。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/CompareFace/CompareFace-left1.png`
     */
    "ImageURLB"?: string;
    /**
     * 图像A的Base64编码字符串。当与URL方式共存时，URL方式优先。文件的Base64编码处理操作，请参见[文件Base64处理](~~468191~~)。
     * > **ImageURLA**与**ImageDataA**二选一，当URL方式与Base64编码方式共存时，URL方式优先。
     * @example `/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgK****`
     */
    "ImageDataA"?: string;
    /**
     * 图像B的Base64编码字符串。当与URL方式共存时，URL方式优先。文件的Base64编码处理操作，请参见[文件Base64处理](~~468191~~)。
     * > **ImageURLB**与**ImageDataB**二选一，当URL方式与Base64编码方式共存时，URL方式优先。
     * @example `/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgQ****`
     */
    "ImageDataB"?: string;
}
