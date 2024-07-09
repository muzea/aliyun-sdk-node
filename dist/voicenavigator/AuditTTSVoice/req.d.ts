export interface AuditTTSVoiceRequest {
    /**
     * 导航实例ID
     * @example `af81a389-91f0-4157-8d82-720edd02b66a`
     */
    "InstanceId": string;
    /**
     * 发音人
     * @example `aixia`
     */
    "Voice": string;
    /**
     * 试听文本
     * @example `你好`
     */
    "Text": string;
    /**
     * 声音速率
     * @example `100`
     */
    "SpeechRate": string;
    /**
     * 音量
     * @example `10`
     */
    "Volume": string;
    "Engine"?: string;
    "PitchRate"?: string;
    "SecretKey"?: string;
    "AccessKey"?: string;
    "AppKey"?: string;
}
