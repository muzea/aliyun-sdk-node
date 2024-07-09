export interface UpdateIndexRequest {
    /**
     * Project名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * Logstore名称。
     * @example `test-logstore`
     */
    "logstore": string;
    /**
     * 请求体。
     */
    "body": {
        /**
         * 字段索引配置，key为字段名称，value为字段索引配置。
         */
        keys: any;
        /**
         * 全文索引配置。
         */
        line: {
            /**
             * 是否包含中文。
             *   - true：包含中文。
             *   - false：不包含中文。
             * @example `false`
             */
            chn: boolean;
            /**
             * 是否大小写敏感。
             * - true：大小写敏感。
             * - false：大小写不敏感。
             * @example `true`
             */
            caseSensitive: boolean;
            /**
             * 分词符列表，用于分割文本。
             */
            token: string[];
            /**
             * 包含的字段列表，不能与exclude_keys同时指定。
             */
            include_keys: string[];
            /**
             * 排除的字段列表，不能与include_keys同时指定。
             */
            exclude_keys: string[];
        };
        /**
         * 数据的保存时间，单位为天。支持 7天、30天、90天。
         * @example `30`
         */
        ttl: number;
        /**
         * 统计字段的最大长度。
         * @example `2048`
         */
        max_text_len: number;
        /**
         * 是否开启日志聚类，开启后白名单 `log_reduce_white_list` 与黑名单 `log_reduce_black_list` 至多生效其中一个。
         * @example `false`
         */
        log_reduce: boolean;
        /**
         * 日志聚类的聚类字段白名单。
         */
        log_reduce_white_list: string[];
        /**
         * 日志聚类的聚类字段黑名单。
         */
        log_reduce_black_list: string[];
    };
}
