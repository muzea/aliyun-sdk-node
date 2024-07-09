export interface GenerateImageWithTextRequest {
    /**
     * 文本内容，支持中英文，中文不超过75个字，英文不超过75个字母，超过部分会自动截断。
     * 建议文本内容尽可能详细准确，详细的文本描述内容有助于获得更佳的图片生成效果。
     * @example `一只戴着太阳镜的小松鼠在演奏吉他`
     */
    "Text": string;
    /**
     * 生成的图像分辨率。支持512*512、1024*1024、1024*768、768*1024、720*1280和1280*720像素，默认1024*1024像素。
     * @example `1024*1024`
     */
    "Resolution"?: string;
    /**
     * 图片生成数量。支持1~4张，默认1张。
     * @example `1`
     */
    "Number"?: number;
}