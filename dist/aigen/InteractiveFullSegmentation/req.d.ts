export interface InteractiveFullSegmentationRequest {
    /**
     * 输入的图像URL。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。输入限制如下：
     * - 图像格式：JPG、JPEG、PNG、BMP、WEBP。
     * - 图像大小：不超过10 MB。
     * - 输入图像：大于等于32x32像素，小于等于4096x4096像素。
     * - URL地址中不能包含中文字符。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/aigen/xxx01.png`
     */
    "ImageUrl": string;
    /**
     * 输出图像格式。支持JPG、PNG，默认为PNG。
     * @example `PNG`
     */
    "ReturnFormat"?: string;
}
