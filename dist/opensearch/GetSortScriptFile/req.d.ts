export interface GetSortScriptFileRequest {
    /**
     * 应用的名称或者是应用id
     * @example `my_app`
     */
    "appGroupIdentity": string;
    /**
     * 脚本名称
     * @example `UserScorer.cava`
     */
    "scriptName": string;
    /**
     * 应用下的版本id
     * @example `123456`
     */
    "appVersionId": string;
    /**
     * 脚本文件名称
     * @example `script1`
     */
    "fileName": string;
}
