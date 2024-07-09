export interface RecognizeBusShipTicketRequest {
    /**
     * 图片链接（长度不超 2048，不支持 base64）
     * @example `https://img.alicdn.com/imgextra/i2/O1CN010iDcM7218ZQJtJyGX_!!6000000006940-0-tps-936-541.jpg`
     */
    "Url"?: string;
    /**
     * 图片二进制字节流，最大10MB
     * @example `图片二进制`
     */
    "body"?: string;
}
