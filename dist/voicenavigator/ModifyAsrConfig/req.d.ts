export interface ModifyAsrConfigRequest {
    /**
     * config_level对应的实体ID
     * @example `6cc9f5ca-2cb6-4cc7-a46b-2bbfd3e61b22`
     */
    "EntryId"?: string;
    /**
     * 策略级别，包含 0：系统，1:租户，2：实例
     * @example `0`
     */
    "ConfigLevel"?: number;
    /**
     * 热词ID。请在[ASR热词管理页面](https://aiccs.console.aliyun.com/sentence/vocab?spm=a2c4g.11186623.0.0.7f9bf965IKBpsi)查看ASR热词ID。
     * @example `6cc9f5ca-2cb6-4cc7-a46b-2bbfd3e61b22`
     */
    "AsrVocabularyId"?: string;
    /**
     * 数据集id
     * @example `6cc9f5ca-2cb6-4cc7-a46b-2bbfd3e61b22`
     */
    "AsrCustomizationId"?: string;
    /**
     * asr声学id
     * @example `6cc9f5ca-2cb6-4cc7-a46b-2bbfd3e61b22`
     */
    "AsrAcousticModelId"?: string;
    /**
     * asr热词id
     * @example `6cc9f5ca-2cb6-4cc7-a46b-2bbfd3e61b22`
     */
    "AsrClassVocabularyId"?: string;
}
