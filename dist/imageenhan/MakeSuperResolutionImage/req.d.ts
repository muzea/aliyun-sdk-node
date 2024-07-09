export interface MakeSuperResolutionImageRequest {
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * 输入限制：
     * - 图像格式：JPEG、JPG、PNG、BMP。
     * - 图像大小：不超过3 MB。
     * - 图像分辨率：不小于32×32像素，长边不大于1920像素，短边不大于1080像素。
     * - URL地址中不能包含中文字符。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/MakeSuperResolutionImage/MakeSuperResolutionImage5.png`
     */
    "Url": string;
    /**
     * 图像输出模式，默认为`base`。取值如下：
     * - base：普通模式，即稳定的超分辨率效果。
     * - enhancement：增强模式，相比普通模式更加突出的增强的效果，进一步提升输出图像的清晰度和锐利度。
     * @example `base`
     */
    "Mode"?: string;
    /**
     * 放大倍数。取值为1、2、3、4。缺省时默认为2。
     * @example `2`
     */
    "UpscaleFactor"?: number;
    /**
     * 输出图像的存储格式。可选范围：`png`、`jpg`、`bmp`，默认`png`。
     * > 当输入图像是RGBA格式时，为了保证输出图像仍为RGBA格式以及Alpha通道的准确性，输出格式将强制置为`png`。
     * @example `png`
     */
    "OutputFormat"?: string;
    /**
     * 输出图像的质量因子，值越大质量越高。取值范围\[30,100]，默认95，仅当**OutputFormat**是`jpg`时有效。
     * @example `95`
     */
    "OutputQuality"?: number;
}
