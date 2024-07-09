export interface GetSortScriptRequest {
    /**
     * 应用的名称、应用id
     * @example `my_app`
     */
    "appGroupIdentity": string;
    /**
     * 脚本名称
     * @example `script1`
     */
    "scriptName": string;
    /**
     * 应用下的版本id
     * @example `160051478`
     */
    "appVersionId": string;
}
