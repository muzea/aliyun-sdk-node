export interface GetIndexResponse {
    /**
     * 索引类型。
     * @example `v2`
     */
    index_mode: string;
    /**
     * 字段索引配置。key为字段名称，value为索引配置。
     */
    keys: any;
    /**
     * 全文索引配置。
     */
    line: {
        /**
         * 包含的字段列表。
         */
        include_keys: string[];
        /**
         * 	排除的字段列表。
         */
        exclude_keys: string[];
        /**
         * 是否包含中文。
         * - true：包含中文。
         * - false：不包含中文。
         * @example `false`
         */
        chn: boolean;
        /**
         * 分词符列表。
         */
        token: string[];
        /**
         * 是否大小写敏感。
         *   - true：大小写敏感。
         *   - false：大小写不敏感。
         * @example `false`
         */
        caseSensitive: boolean;
    };
    /**
     * 存储类型，目前固定取值为pg。
     * @example `pg`
     */
    storage: string;
    /**
     * 索引文件生命周期，支持7天、30天、90天。
     * @example `30`
     */
    ttl: number;
    /**
     * 索引最后更新时间。Unix时间戳格式，表示从1970-1-1 00:00:00 UTC计算起的秒数。
     * @example `1524155379`
     */
    lastModifyTime: number;
    /**
     * 是否开启日志聚类。
     * @example `false`
     */
    log_reduce: boolean;
    /**
     * 日志服务默认字段值的最大长度为2048字节，即2 KB。如果您需要修改字段值的最大长度，可设置统计字段（text）最大长度，取值范围为64~16384字节。
     * @example `2048`
     */
    max_text_len: number;
    /**
     * 日志聚类的聚类字段过滤黑名单，仅当日志聚类开启时有效。
     */
    log_reduce_black_list: string[];
    /**
     * 日志聚类的聚类字段过滤白名单，仅当日志聚类开启时有效
     */
    log_reduce_white_list: string[];
}
