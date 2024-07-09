export interface DeleteSortScriptRequest {
    /**
     * 应用的名称或者是应用id
     * @example `search`
     */
    "appGroupIdentity": string;
    /**
     * 脚本名称
     * @example `cava`
     */
    "scriptName": string;
    /**
     * 应用下的版本id
     * @example `1234567`
     */
    "appVersionId": string;
}
