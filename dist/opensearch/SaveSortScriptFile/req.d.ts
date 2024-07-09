export interface SaveSortScriptFileRequest {
    /**
     * 应用的名称或者是应用id
     * @example `''110123411''`
     */
    "appGroupIdentity": string;
    /**
     * 需要更新内容的脚本名称
     * @example `''test1''`
     */
    "scriptName": string;
    /**
     * 应用下的版本id
     * @example `''110123111''`
     */
    "appVersionId": string;
    /**
     * 文件名。
     * @example `''file01''`
     */
    "fileName": string;
    /**
     * scriptContent
     */
    "body"?: {
        /**
         * 脚本内容，base64编码
         * @example `4769#0: *28194492991 a client request body is buffered to a temporary file /usr/local/webserver/openresty/nginx/client_body_temp/0000624474,`
         */
        content: string;
        /**
         * 脚本内容的版本
         * @example `2022-12-01`
         */
        version: number;
    };
}
