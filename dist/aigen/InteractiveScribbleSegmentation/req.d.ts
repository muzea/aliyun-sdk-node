export interface InteractiveScribbleSegmentationRequest {
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
     * 输入的Mask URL。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。输入限制如下：
     * - 图像格式：JPG、JPEG、PNG、BMP、WEBP。
     * - 图像大小：不超过5 MB。
     * - 输入图像：大于等于32x32像素，并与输入原图分辨率保持一致。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/aigen/xxx02.png`
     */
    "MaskImageUrl"?: string;
    /**
     * 正向涂抹轨迹图像URL。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。输入限制如下：
     * - 图像格式：JPG、JPEG、PNG、BMP、WEBP。
     * - 图像大小：不超过5 MB。
     * - 输入图像：大于等于32x32像素，小于等于4096x4096像素，并与输入原图分辨率保持一致。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/aigen/xxx03.png`
     */
    "PosScribbleImageUrl"?: string;
    /**
     * 负向涂抹轨迹图像URL。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。输入限制如下：
     * - 图像格式：JPG、JPEG、PNG、BMP、WEBP。
     * - 图像大小：不超过5 MB。
     * - 输入图像：大于等于32x32像素，小于等于4096x4096像素，并与输入原图分辨率保持一致。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/aigen/xxx04.png`
     */
    "NegScribbleImageUrl"?: string;
    /**
     * 整合的Mask URL。将初始mask、正向划线记录、负向划线记录分别放在rgb图像的三个通道，合成一个图片，减少传输的图片数量，从而节省上传下载时间。输入限制如下：
     * - 图像格式：JPG、JPEG、PNG、BMP、WEBP。
     * - 图像大小：不超过5 MB。
     * - 输入图像：大于等于32x32像素，小于等于4096x4096像素，并与输入原图分辨率保持一致。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/aigen/xxx05.png`
     */
    "IntegratedMaskUrl"?: string;
    /**
     * 输出图像形式。取值范围如下：
     * - rgb_alpha（默认）：返回四通道PNG图，即透明底图。
     * - only_alpha：返回单通道mask。
     * - white_background：返回白底图。
     * @example `only_alpha`
     */
    "ReturnForm"?: string;
    /**
     * 输出图像格式。支持JPG、PNG，默认为PNG。
     * @example `PNG`
     */
    "ReturnFormat"?: string;
    /**
     * 是否做边缘羽化。默认值为true。
     * @example `true`
     */
    "EdgeFeathering"?: string;
    /**
     * 选择mask精细化模型。取值范围如下：
     * - edgerefine：稳定但精细度稍微差一点。
     * - maskrefine（默认）：精细度高但不够稳定。
     * @example `edgerefine`
     */
    "PostprocessOption"?: string;
}
