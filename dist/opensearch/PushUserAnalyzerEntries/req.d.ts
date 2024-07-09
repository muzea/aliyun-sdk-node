export interface PushUserAnalyzerEntriesRequest {
    /**
     * 分析器名称。
     * @example `“kevin_test”`
     */
    "name": string;
    /**
     * 是否dryRun创建（仅校验数据源是否合法）。取值：-true 是 -false 否
     * @example `true`
     */
    "dryRun"?: boolean;
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * 词条。
         */
        entries: {
            /**
             * 词条操作。
             * 取值：
             * - add：添加。
             * - delete：删除。
             * @example `"add"`
             */
            cmd: string;
            /**
             * 词条key信息。
             * @example `"testvalue"`
             */
            key: string;
            /**
             * 分词结果。
             * @example `"test value"`
             */
            value: string;
            /**
             * 是否进行更细粒度切分。
             * 默认true
             * @example `true`
             */
            splitEnabled: boolean;
        }[];
    };
}
