export interface ImageBlindCharacterWatermarkRequest {
    /**
     * 指定调用功能。包括：
     * - encode_text：为采用老版本模型添加文字水印。
     * - encode_text_plus：为采用新版本模型1添加文字水印。
     * - encode_text_bold：为采用新版本模型2添加文字水印。
     * - decode_text：为采用老版本模型解码图像中的文字水印，对应加水印方法encode_text。
     * - decode_text_plus：为采用新版本模型1解码图像中的文字水印，对应加水印方法encode_text_plus。
     * - decode_text_bold：为采用新版本模型2解码图像中的文字水印，对应加水印方法encode_text_bold。
     * @example `encode_text`
     */
    "FunctionType": string;
    /**
     * 待加入的水印文字，字数不超过16个，超过会影响加水印效果。
     * >- 当FunctionType为`encode_text`、`encode_text_plus`或`encode_text_bold`时，该参数必填。
     * - 当FunctionType为`decode_text`、`decode_text_plus`或`decode_text_bold`时，该参数不填。
     * @example `阿里云版权所有一二三四五六七八九`
     */
    "Text"?: string;
    /**
     * 待解析图，即带有文字水印的合成图。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * >- 当FunctionType为`decode_text`、`decode_text_plus`或`decode_text_bold`时，该参数必填。
     * - 当FunctionType为`encode_text`、`encode_text_plus`或`encode_text_bold`，该参数不填。
     * @example `https://viapi-doc.oss-cn-shanghai.aliyuncs.com/imageenhan/xxxxx.jpg`
     */
    "WatermarkImageURL"?: string;
    /**
     * 输出图格式。可以选择`png`、`jpg`、`bmp`三种格式，默认`png`。
     * >- 当FunctionType为`encode_text`、`encode_text_plus`或`encode_text_bold`时，该参数必填。
     * - 当FunctionType为`decode_text`、`decode_text_plus`或`decode_text_bold`时，该参数不填。
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
     * >- 当FunctionType为`encode_text`、`encode_text_plus`、`encode_text_bold`或`decode_text`时，该参数必填。
     * - 当FunctionType为`decode_text_plus`或`decode_text_bold`时，该参数不填。
     * @example `https://viapi-test.oss-cn-shanghai.aliyuncs.com/test-team/xxxxx.jpg`
     */
    "OriginImageURL"?: string;
}
