export interface GenerateImageWithTextAndImageRequest {
    /**
     * 文本内容。支持中英文，中文不超过75个字，英文不超过75个字母，超过部分会自动截断。
     * 建议文本内容尽可能详细准确，详细的文本描述内容有助于获得更佳的图片生成效果。
     * @example `大雪中的雪人精灵，4K，摄影`
     */
    "Text": string;
    /**
     * 生成的图像分辨率。支持512*512、1024*1024、1024*768、768*1024、720*1280、1280*720像素，默认1024*1024像素。
     * @example `1024*1024`
     */
    "Resolution"?: string;
    /**
     * 图片生成数量。支持1~4张，默认1张。
     * @example `1`
     */
    "Number"?: number;
    /**
     * 参考图地址。参考图分辨率请尽量和需要生成的图像分辨率接近，生成过程会先按照参数`AspectRatioMode`设定的模式，将参考图缩放裁剪到`resolution`参数指定的分辨率，再参考缩放裁剪后的图片进行图像生成，供用户参考。
     * 推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `https://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/GenerateImageWithTextAndImage/GenerateImageWithTextAndImage11.jpg`
     */
    "RefImageUrl": string;
    /**
     * 参考程度。值在0～1之间，默认值为0.2。
     * - 0：完全不参考参考图，只基于文本生成图像。
     * - 1：完全复制参考图。
     * @example `0.2`
     */
    "Similarity"?: number;
    /**
     * 图像缩放裁剪模式。包括center_crop和resize，默认为center_crop。
     * - center_crop：最大限度保留图像中心部分，将边缘进行裁剪。
     * - resize：将图像拉伸到最终分辨率。
     * @example `center_crop`
     */
    "AspectRatioMode"?: string;
}
