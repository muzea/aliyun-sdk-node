export interface ListScriptVoiceConfigsRequest {
    /**
     * 实例ID
     * @example `af81a389-91f0-4157-8d82-720edd02b66a`
     */
    "InstanceId": string;
    /**
     * 话术ID
     * @example `f95c7ca6-872c-4765-8493-165a8dfc682d`
     */
    "ScriptId": string;
    /**
     * 页数
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 个数
     * @example `20`
     */
    "PageSize": number;
}
