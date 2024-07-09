export interface GenerateCosplayImageRequest {
    /**
     * 输入的人脸图像URL。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。输入限制如下：
     * - 图像格式：JPG、JPEG、PNG。
     * - 图像大小：不超过4 MB。
     * - 人脸图像：大于等于256x256像素，小于等于5760x3240像素，长宽比不超过1:2。
     * > 当图像分辨率超过最大限制时，请先将图片进行缩放，调整图片大小，具体请参见[图片缩放](~~44688~~)。
     * - URL地址中不能包含中文字符。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/aigen/xxx01.png`
     */
    "FaceImageUrl": string;
    /**
     * 输入的模板图像 URL。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。输入限制如下：
     * - 图像格式：JPG、JPEG、PNG。
     * - 图像大小：不超过4 MB。
     * - 模板图像：大于等于256x256像素，小于等于5760x3240像素，长宽比不超过1:1.5，如果超过将自适应裁剪至1:1.5。
     * > 当图像分辨率超过最大限制时，请先将图片进行缩放，调整图片大小，具体请参见[图片缩放](~~44688~~)。
     * - URL地址中不能包含中文字符。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/aigen/xxx02.png`
     */
    "TemplateImageUrl": string;
    /**
     * 生成风格。取值范围：
     * - 0：真人形象（realportrait）
     * - 1：3D卡通形象（3dcartoon）
     * @example `0`
     */
    "Style": number;
}
