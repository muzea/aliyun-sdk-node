export interface RecognizeExitEntryPermitToHKRequest {
    /**
     * 图片链接（长度不超 2048，不支持 base64）
     * @example `https://img.alicdn.com/imgextra/i2/O1CN01Rs4C321G2oTD7Dg1U_!!6000000000565-0-tps-1024-692.jpg`
     */
    "Url"?: string;
    /**
     * 图片二进制字节流，最大10MB
     * @example `图片二进制`
     */
    "body"?: string;
    /**
     * 图案坐标信息输出，针对结构化，如身份证人脸头像
     * @example `true/false`
     */
    "OutputFigure"?: boolean;
}
