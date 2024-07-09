export interface CreateSortScriptRequest {
    /**
     * 应用的名称或者是应用id
     * @example `search`
     */
    "appGroupIdentity": string;
    /**
     * 应用下的报表id
     * @example `1234567`
     */
    "appVersionId": string;
    /**
     * 请求体
     */
    "body"?: {
        /**
         * 脚本名称
         * @example `rank_cava_20230606_v7`
         */
        scriptName: string;
        /**
         * 脚本的类型，目前只支持cava_script
         * @example `cava_script
        `
         */
        type: string;
        /**
         * 脚本的作用范围
         * @example `second_rank`
         */
        scope: string;
    };
}
