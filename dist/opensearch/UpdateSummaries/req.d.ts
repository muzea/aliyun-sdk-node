export interface UpdateSummariesRequest {
    /**
     * 是否为空运行请求
     * @example `true`
     */
    "dryRun"?: boolean;
    /**
     * 应用名称
     * @example `“my_app_group_name”`
     */
    "appGroupIdentity": string;
    /**
     * 版本号
     * @example `10157886`
     */
    "appId": number;
    /**
     * 请求体
     */
    "body"?: {
        /**
         * 字段
         * @example `"title"`
         */
        field: string;
        /**
         * 片段长度
         * @example `50`
         */
        len: number;
        /**
         * 飘红标签
         * @example `"em"	`
         */
        element: string;
        /**
         * 片段链接符
         * @example `"..."`
         */
        ellipsis: string;
        /**
         * 片段数量
         * @example `1`
         */
        snippet: number;
    }[];
}
