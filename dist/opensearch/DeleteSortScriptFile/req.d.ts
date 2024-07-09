export interface DeleteSortScriptFileRequest {
    /**
     * 应用名称
     * @example `search`
     */
    "appGroupIdentity": string;
    /**
     * 版本ID
     * @example `1234567`
     */
    "appVersionId": string;
    /**
     * 脚本名称
     * @example `cava`
     */
    "scriptName": string;
    /**
     * 需要删除的脚本文件名
     * @example `cavafile`
     */
    "fileName": string;
}
