export interface RecognizeChinesePassportRequest {
    /**
     * 图片链接（长度不超 2048，不支持 base64）
     * @example `https://img.alicdn.com/imgextra/i1/O1CN01UNXHMC1FJTGRkdCgT_!!6000000000466-0-tps-1500-1125.jpg`
     */
    "Url"?: string;
    /**
     * 图片二进制字节流，最大10MB
     * @example `图片二进制`
     */
    "body"?: string;
    /**
     * 是否需要图案检测功能，默认需要
     * @example `true`
     */
    "OutputFigure"?: boolean;
}
