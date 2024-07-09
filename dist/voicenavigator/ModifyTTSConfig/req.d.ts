export interface ModifyTTSConfigRequest {
    /**
     * 实例ID
     * @example `12f407b22cbe4890ac595f09985848d5`
     */
    "InstanceId": string;
    /**
     * 发音人
     * @example `aixia`
     */
    "Voice"?: string;
    /**
     * 声音速率
     * @example `100`
     */
    "SpeechRate"?: string;
    /**
     * 音量
     * @example `10`
     */
    "Volume"?: string;
    "NlsServiceType"?: string;
    "AppKey"?: string;
    "Engine"?: string;
    "EngineXunfei"?: string;
}
