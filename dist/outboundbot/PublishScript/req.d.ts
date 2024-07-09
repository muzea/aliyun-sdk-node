export interface PublishScriptRequest {
    /**
     * 实例的
     * @example `af81a389-91f0-4157-8d82-720edd02b66a`
     */
    "InstanceId": string;
    /**
     * 要发布的话术id
     * @example `3677fe8b-276f-4541-babf-b9d3082a31ba`
     */
    "ScriptId": string;
    /**
     * 对这次发布话术的描述
     * @example `第一次发布`
     */
    "Description": string;
}
