export interface CompileSortScriptRequest {
    /**
     * 应用的名称、应用id
     * @example `search`
     */
    "appGroupIdentity": string;
    /**
     * 脚本名称
     * @example `script`
     */
    "scriptName": string;
    /**
     * 应用下的版本id
     * @example `130196473`
     */
    "appVersionId"?: string;
}
