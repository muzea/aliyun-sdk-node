export interface RecognizeDriverLicenseRequest {
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/ocr/RecognizeDriverLicense/jsz2.jpg`
     */
    "ImageURL": string;
    /**
     * 上传照片为驾驶证首页或者副页。
     * - face：首页
     * - back：副页
     * @example `face`
     */
    "Side"?: string;
}
