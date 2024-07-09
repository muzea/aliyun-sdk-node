export interface ListScriptPublishHistoriesRequest {
    /**
     * 实例id
     * @example `af81a389-91f0-4157-8d82-720edd02b66a`
     */
    "InstanceId": string;
    /**
     * 脚本id
     * @example `b0f35dd1-0337-402e-9c4f-3a6c2426950a`
     */
    "ScriptId": string;
    /**
     * 页码
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页显示多少条
     * @example `10`
     */
    "PageSize": number;
}
