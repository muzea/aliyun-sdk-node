export interface ImageBlindPicWatermarkRequest {
    /**
     * 指定调用功能。包括：
     * - encode_pic：为采用老版本模型添加图像水印。
     * - encode_pic_plus：为采用新版本模型1添加图像水印。
     * - encode_pic_bold：为采用新版本模型2添加图像水印。
     * - decode_pic：为采用老版本模型解码图像中的图像水印，对应加水印方法encode_pic。
     * - decode_pic_plus：为采用新版本模型1解码图像中的图像水印，对应加水印方法encode_pic_plus。
     * - decode_pic_bold：为采用新版本模型2解码图像中的图像水印，对应加水印方法encode_pic_bold。
     * @example `encode_pic`
     */
    "FunctionType": string;
    /**
     * 待添加的水印图片URL。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * >- 当FunctionType为`encode_pic`、`encode_pic_plus`或`encode_pic_bold`时，该参数必填。
     * - 当FunctionType为`decode_pic`、`decode_pic_plus`或`decode_pic_bold`时，该参数不填。
     * @example `https://viapi-test.oss-cn-shanghai.aliyuncs.com/test-team/xxxxx.jpg`
     */
    "LogoURL"?: string;
    /**
     * 待解析图，即带有图片水印的合成图。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * >- 当FunctionType为`decode_pic`、`decode_pic_plus`或`decode_pic_bold`时，该参数必填。
     * - 当FunctionType为`encode_pic`、`encode_pic_plus`或`encode_pic_bold`时，该参数不填。
     * @example `https://viapi-doc.oss-cn-shanghai.aliyuncs.com/imageenhan/xxxxx.jpg`
     */
    "WatermarkImageURL"?: string;
    /**
     * 输出图格式。可以选择`jpeg`、`png`、`jpg`、`bmp`四种格式，默认`png`。
     * >- 当FunctionType为`encode_pic`、`encode_pic_plus`或`encode_pic_bold`时，该参数必填。
     * - 当FunctionType为`decode_pic`、`decode_pic_plus`或`decode_pic_bold`时，该参数不填。
     * @example `jpg`
     */
    "OutputFileType"?: string;
    /**
     * 输出图像的质量大小。图像越大质量越高，取值范围1~100，默认100。
     * >仅当OutputFileType为`jpg`时有效。
     * @example `100`
     */
    "QualityFactor"?: number;
    /**
     * 原始图像。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * >- 当FunctionType为`encode_pic`、`encode_pic_plus`、`encode_pic_bold`或`decode_pic`时，该参数必填。
     * - 当FunctionType为`decode_pic_plus`或`decode_pic_bold`时，该参数不填。
     * @example `https://viapi-test.oss-cn-shanghai.aliyuncs.com/test-team/xxxxx.jpg`
     */
    "OriginImageURL"?: string;
}
