export interface SubmitQueryRequest {
    /**
     * HTTP请求体
     */
    "body"?: {
        /**
         * SQL语句。
         * @example `show databases`
         */
        sql: string;
        /**
         * 工作空间id
         * @example `WS-A129E61C4892D2B4`
         */
        workspaceId: string;
        catalogId: string;
    };
}
