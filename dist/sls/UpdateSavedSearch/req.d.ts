export interface UpdateSavedSearchRequest {
    /**
     * Project名称。
     * @example `my-project`
     */
    "project": string;
    /**
     * 要更新的快速查询的名称。
     * @example `savedsearch-name`
     */
    "savedsearchName": string;
    /**
     * 快速查询结构体。
     */
    "body"?: {
        /**
         * 快速查询的名称。名称长度为3~63个字符。
         * @example `savedsearch-name`
         */
        savedsearchName: string;
        /**
         * 快速查询的查询和分析语句。由查询语句和分析语句构成，格式为查询语句|分析语句。更多信息，请参见[查询语法](~~43772~~)和[分析语法](~~53608~~)。
         * @example `*|select date_format(__time__-__time__%60, '%H:%i:%s') as time, COUNT(*) as pv group by time`
         */
        searchQuery: string;
        /**
         * 快速查询所属的Logstore名称。
         * @example `aliyun-test-logstore`
         */
        logstore: string;
        /**
         * 日志主题。
         * @example `theme`
         */
        topic: string;
        /**
         * 显示名称。
         * @example `displayname`
         */
        displayName: string;
    };
}
