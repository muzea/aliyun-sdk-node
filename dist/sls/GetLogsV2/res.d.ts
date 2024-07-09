export interface GetLogsV2Response {
    /**
     * 返回数据meta信息
     */
    meta: {
        /**
         * 查询的结果是否完整。
         * - Complete：查询已经完成，返回结果为完整结果。
         * - Incomplete：查询已经完成，返回结果为不完整结果，需要重复请求以获得完整结果。
         * @example `Complete`
         */
        progress: string;
        /**
         * 查询语句中 | 之后的SQL部分
         * @example `select *`
         */
        aggQuery: string;
        /**
         * 查询语句中 | 之前的部分
         * @example `*`
         */
        whereQuery: string;
        /**
         * 是否sql查询
         * @example `false`
         */
        hasSQL: boolean;
        /**
         * 本次查询处理的行数。
         * @example `10000`
         */
        processedRows: number;
        /**
         * 本次查询消耗的毫秒时间。
         * @example `5`
         */
        elapsedMillisecond: number;
        /**
         * 独享SQL的核时
         * @example `0.002`
         */
        cpuSec: number;
        /**
         * 使用cpu核数
         * @example `3`
         */
        cpuCores: number;
        /**
         * 查询结果中所有的key
         */
        keys: string[];
        /**
         * 查询语句中所有的词
         */
        terms: any[];
        /**
         * 限制条数，sql不带limit会返回
         * @example `100`
         */
        limited: number;
        /**
         * 查询模式枚举
         * 0: 普通查询（包括sql）
         * 1: 短语查询
         * 2: SCAN扫描
         * 3: SCAN SQL
         * @example `0`
         */
        mode: number;
        /**
         * 短语查询
         */
        phraseQueryInfo: {
            /**
             * 是否已经扫描了全部日志
             * @example `true`
             */
            scanAll: boolean;
            /**
             * 本次扫描结果对应的索引过滤后的起始offset
             * @example `0`
             */
            beginOffset: number;
            /**
             * 本次扫描结果对应的索引过滤后的结束offset
             * @example `0`
             */
            endOffset: number;
            /**
             * 本次扫描结果对应的索引过滤后的最后时间
             * @example `1`
             */
            endTime: number;
        };
        /**
         * scan时返回扫描的数据量（字节）。
         * @example `1024`
         */
        scanBytes: number;
        /**
         * 高亮内容
         */
        highlights: any[][];
        /**
         * 本次查询请求返回的日志行数。
         * @example `1`
         */
        count: number;
        /**
         * 查询处理日志量
         * @example `10000`
         */
        processedBytes: number;
        /**
         * 是否秒级精确
         * @example `true`
         */
        isAccurate: boolean;
        /**
         * 列类型
         */
        columnTypes: string[];
        /**
         * 可观测数据类型
         * @example `None`
         */
        telementryType: string;
    };
    /**
     * 返回结果。
     */
    data: any[];
}
