export interface ReleaseSortScriptRequest {
    /**
     * 应用的名称或者是应用id
     * @example `''1234''`
     */
    "appGroupIdentity": string;
    /**
     * 脚本名称
     * @example `''test''`
     */
    "scriptName": string;
    /**
     * 应用下的版本id
     * @example `''12345''`
     */
    "appVersionId": string;
}
