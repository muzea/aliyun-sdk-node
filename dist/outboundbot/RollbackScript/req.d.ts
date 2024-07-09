export interface RollbackScriptRequest {
    /**
     * 实例id
     * @example `af81a389-91f0-4157-8d82-720edd02b66a`
     */
    "InstanceId": string;
    /**
     * 话术id
     * @example `303523b1-0094-4ebe-b9ed-c23d11c91d61`
     */
    "ScriptId": string;
    /**
     * 回滚的版本
     * @example `1579055782000`
     */
    "RollbackVersion": string;
}
