export interface RecognizeCharacterRequest {
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/ocr/RecognizeCharacter/RecognizeCharacter5.jpg`
     */
    "ImageURL": string;
    /**
     * 图像中文字的最小高度，单位像素。
     * @example `10`
     */
    "MinHeight": number;
    /**
     * 是否输出文字框的概率。取值：
     * - true：输出文字框的概率。
     * - false：不输出文字框的概率。
     * @example `true`
     */
    "OutputProbability": boolean;
}
