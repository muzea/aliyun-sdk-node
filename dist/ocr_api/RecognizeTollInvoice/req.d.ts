export interface RecognizeTollInvoiceRequest {
    /**
     * 图片链接（长度不超 2048，不支持 base64）
     * @example `https://img.alicdn.com/imgextra/i3/O1CN01uUHo411DCwPsBWDMJ_!!6000000000181-0-tps-199-254.jpg`
     */
    "Url"?: string;
    /**
     * 图片二进制字节流，最大10MB
     * @example `图片二进制`
     */
    "body"?: string;
}
