export interface RecognizeInternationalBusinessLicenseRequest {
    /**
     * 图片/PDF 链接（长度不超 2048，不支持 base64）
     * @example `https://www.example.com`
     */
    "Url"?: string;
    /**
     * 图片/PDF二进制字节流，最大10M
     * @example `图片二进制文件`
     */
    "body"?: string;
    /**
     * 国家名称
     * @example `India（India、Korea）`
     */
    "Country": string;
}
