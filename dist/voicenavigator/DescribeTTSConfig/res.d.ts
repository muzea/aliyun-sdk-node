export interface DescribeTTSConfigResponse {
    /**
     * 请求ID
     * @example `F132DDBA-66C4-5BD3-BF7E-9642FE877158`
     */
    RequestId: string;
    /**
     * 音量
     * @example `50`
     */
    Volume: number;
    /**
     * 发音人
     * @example `aixia`
     */
    Voice: string;
    /**
     * 语速
     * @example `-150`
     */
    SpeechRate: number;
    NlsServiceType: string;
    AppKey: string;
    Engine: string;
    EngineXunfei: string;
    PitchRate: number;
}
