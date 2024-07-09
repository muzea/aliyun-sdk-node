export interface RecognizeRideHailingItineraryRequest {
    /**
     * 图片链接（长度不超 2048，不支持 base64）
     * @example `https://img.alicdn.com/imgextra/i1/O1CN01ePLJiZ1n8CTylKsn3_!!6000000005044-2-tps-194-260.png`
     */
    "Url"?: string;
    /**
     * 图片二进制字节流，最大10MB
     * @example `图片二进制`
     */
    "body"?: string;
}
