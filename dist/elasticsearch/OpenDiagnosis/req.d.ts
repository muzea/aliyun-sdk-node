export interface OpenDiagnosisRequest {
    /**
     * 实例ID。
     * @example `es-cn-n6w1o1x0w001c****`
     */
    "InstanceId": string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF****`
     */
    "ClientToken"?: string;
    /**
     * 支持的请求语言，默认为浏览器请求语言。可选值：
     * - en：英语
     * - zh：简体中文
     * - zt：繁体中文
     * - es：西班牙语
     * - fr：法语
     * @example `en`
     */
    "lang"?: string;
}
