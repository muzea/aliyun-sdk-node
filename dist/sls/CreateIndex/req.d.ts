export interface CreateIndexRequest {
    /**
     * Logstore的名称。
     * @example `ali-logstore-test`
     */
    "logstore": string;
    /**
     * Project名称。
     * @example `ali-project-test`
     */
    "project": string;
    /**
     * 请求消息体。
     */
    "body"?: {
        /**
         * 字段索引配置，key为字段名称，value为字段索引配置。该参数和line必须至少指定一个，更多示例，请参见示例。
         */
        keys: any;
        /**
         * 全文索引配置。该参数和keys必须至少指定一个，更多示例，请参见示例。
         */
        line: {
            /**
             * 是否包含中文。
             * - true：包含中文。
             * - false（默认值）：不包含中文。
             * @example `false`
             */
            chn: boolean;
            /**
             * 是否大小写敏感。
             * - true：大小写敏感。
             * - false（默认值）：大小写不敏感。
             * @example `false`
             */
            caseSensitive: boolean;
            /**
             * 分词符列表。可以设置一个分词参数，指定这个字段按照哪一种方式分词。更多分词符，请参见示例。
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
         * 日志保存时间，单位为天。可选 7天、30天、90天。
         * @example `30`
         */
        ttl: number;
        /**
         * 日志服务默认字段值的最大长度为2048字节，即2 KB。如果您需要修改字段值的最大长度，可设置统计字段（text）最大长度，取值范围为64~16384字节。
         * @example `2048`
         */
        max_text_len: number;
        /**
         * 是否开启日志聚类。开启后白名单与黑名单至多生效其中一个。
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
