export interface RecognizeSocialSecurityCardRequest {
    /**
     * 图片链接（长度不超 2048，不支持 base64）
     * @example `https://img.alicdn.com/imgextra/i4/O1CN01zpM9bJ1Pa5pCwJat7_!!6000000001856-0-tps-282-179.jpg`
     */
    "Url"?: string;
    /**
     * 图片二进制字节流，最大10MB
     * @example `图片二进制`
     */
    "body"?: string;
}
