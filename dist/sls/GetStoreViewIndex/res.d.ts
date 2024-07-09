export interface GetStoreViewIndexResponse {
    /**
     * 索引配置列表。
     */
    indexes: {
        /**
         * LogStore 所属日志项目名称。
         * @example `example-project`
         */
        project: string;
        /**
         * LogStore 名称。
         * @example `my-logstore`
         */
        logstore: string;
        /**
         * LogStore 索引配置。
         */
        index: any;
    }[];
}
