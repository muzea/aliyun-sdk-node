export interface RecognizeQuotaInvoiceRequest {
    /**
     * 图片链接（长度不超 2048，不支持 base64）
     * @example `https://img.alicdn.com/tfs/TB1SwAeXHr1gK0jSZR0XXbP8XXa-870-604.jpg`
     */
    "Url"?: string;
    /**
     * 图片二进制文件，最大10MB，与URL二选一。 使用HTTP方式调用，把图片二进制文件放到HTTP body 中上传即可。 使用SDK的方式调用，把图片放到SDK的body中即可
     * @example `图片二进制文件`
     */
    "body"?: string;
}
