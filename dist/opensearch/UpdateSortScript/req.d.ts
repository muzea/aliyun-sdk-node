export interface UpdateSortScriptRequest {
    /**
     * 应用名称或应用id
     * @example `my_app`
     */
    "appGroupIdentity": string;
    /**
     * 应用下的版本id
     * @example `123456`
     */
    "appVersionId": string;
    /**
     * 脚本名
     * @example `test_cava`
     */
    "scriptName": string;
}
