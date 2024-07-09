export interface RecognizeUsedCarInvoiceRequest {
    /**
     * 图片链接（长度不超 2048，不支持 base64）
     * @example `https://img.alicdn.com/imgextra/i4/O1CN01NiY6e220zrtvT6dFJ_!!6000000006921-0-tps-3468-4624.jpg`
     */
    "Url"?: string;
    /**
     * 图片二进制字节流，最大10MB
     * @example `图片二进制`
     */
    "body"?: string;
}
