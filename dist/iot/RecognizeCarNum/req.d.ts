export interface RecognizeCarNumRequest {
    /**
     * 待识别图片的URL地址。URL长度不超2048个字符，不支持base64编码。
     * @example `https://img.alicdn.com/***​/i4/O1***f_***-582.png`
     */
    "Url"?: string;
}
