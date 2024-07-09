export interface SubmitScriptReviewRequest {
    /**
     * 话术ID
     * @example `b0f35dd1-0337-402e-9c4f-3a6c2426950a`
     */
    "ScriptId": string;
    /**
     * 实例ID
     * @example `af81a389-91f0-4157-8d82-720edd02b66a`
     */
    "InstanceId": string;
    /**
     * 描述
     * @example `第一版本提交审核`
     */
    "Description": string;
    "From"?: string;
}
