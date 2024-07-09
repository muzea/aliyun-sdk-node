export interface BeginSessionResponse {
    /**
     * 请求ID
     * @example `149C7528-C104-1B50-A4F9-0C5907A8AD9D`
     */
    RequestId: string;
    /**
     * 欢迎语
     * @example `智能对话机器人为您服务，请问有什么可以帮您？`
     */
    WelcomeMessage: string;
    /**
     * 静默超时时间，单位：秒
     * @example `5`
     */
    SilenceReplyTimeout: number;
    /**
     * 语音播报是否可打断
     * @example `false`
     */
    Interruptible: boolean;
    /**
     * ASR尾点检测时间，单位：毫秒
     * @example `700`
     */
    AsrMaxEndSilence: number;
}
