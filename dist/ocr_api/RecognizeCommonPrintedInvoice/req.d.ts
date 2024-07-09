export interface RecognizeCommonPrintedInvoiceRequest {
    /**
     * 图片链接（长度不超 2048，不支持 base64）
     * @example `https://img.alicdn.com/imgextra/i2/O1CN01XU9dTh1O4CdHxXhMw_!!6000000001651-0-tps-1437-909.jpg`
     */
    "Url"?: string;
    /**
     * 图片二进制字节流，最大10MB
     * @example `图片二进制`
     */
    "body"?: string;
}
