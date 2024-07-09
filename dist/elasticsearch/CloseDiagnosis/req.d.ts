export interface CloseDiagnosisRequest {
    /**
     * 实例ID。
     * @example `es-cn-s9dsk3k4k****`
     */
    "InstanceId": string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF****`
     */
    "ClientToken"?: string;
    /**
     * 多语言支持，默认为浏览器语言，支持：
     * - en：英语
     * - zh：简体中文
     * - zt：繁体中文
     * - es：西班牙语
     * - fr：法语
     * @example `spanish`
     */
    "lang"?: string;
}
