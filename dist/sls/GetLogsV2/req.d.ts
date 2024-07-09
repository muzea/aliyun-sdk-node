export interface GetLogsV2Request {
    /**
     * project 名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * logstore 名称。
     * @example `test-logstore`
     */
    "logstore": string;
    /**
     * 压缩方式
     * - Java、Python、Go目前仅支持lz4解压缩
     * - php、Js、C#目前仅支持gzip解压缩
     * @example `lz4`
     */
    "Accept-Encoding": string;
    /**
     * 请求结构体。
     */
    "body"?: {
        /**
         * 查询开始时间点。该时间是指写入日志数据时指定的日志时间。
         * 请求参数from和to定义的时间区间遵循左闭右开原则，即该时间区间包括区间开始时间点，但不包括区间结束时间点。如果from和to的值相同，则为无效区间，函数直接返回错误。
         * Unix时间戳格式，表示从1970-1-1 00:00:00 UTC计算起的秒数。
         * @example `1627268185`
         */
        from: number;
        /**
         * 查询结束时间点。该时间是指写入日志数据时指定的日志时间。
         * 请求参数from和to定义的时间区间遵循左闭右开原则，即该时间区间包括区间开始时间点，但不包括区间结束时间点。如果from和to的值相同，则为无效区间，函数直接返回错误。
         * Unix时间戳格式，表示从1970-1-1 00:00:00 UTC计算起的秒数。
         * @example `1627268185`
         */
        to: number;
        /**
         * 仅当query参数为查询语句时，该参数有效，表示请求返回的最大日志条数。最小值为0，最大值为100，默认值为100。
         * @example `100`
         */
        line: number;
        /**
         * 仅当query参数为查询语句时，该参数有效，表示查询开始行。默认值为0。
         * @example `0`
         */
        offset: number;
        /**
         * 用于指定返回结果是否按日志时间戳降序返回日志，精确到分钟级别。
         * true：按照日志时间戳降序返回日志。
         * false（默认值）：按照日志时间戳升序返回日志。
         * 注意
         * 当query参数为查询语句时，参数reverse有效，用于指定返回日志排序方式。
         * 当query参数为查询和分析语句时，参数reverse无效，由SQL分析语句中order by语法指定排序方式。如果order by为asc（默认），则为升序；如果order by为desc，则为降序。
         * @example `false`
         */
        reverse: boolean;
        /**
         * 是否开启增强sql，默认关闭。
         * @example `false`
         */
        powerSql: boolean;
        /**
         * 查询参数
         * @example `mode=scan`
         */
        session: string;
        /**
         * 日志主题。默认值为双引号（""）。
         * @example `""`
         */
        topic: string;
        /**
         * 查询语句或者分析语句。更多信息，请参见查询概述和分析概述。
         * 在query参数的分析语句中加上set session parallel_sql=true;，表示使用SQL独享版。例如* | set session parallel_sql=true; select count(*) as pv 。
         * 说明当query参数中有分析语句（SQL语句）时，该接口的line参数和offset参数无效，建议设置为0，需通过SQL语句的LIMIT语法实现翻页。更多信息，请参见分页显示查询分析结果。
         * @example `status: 401 | SELECT remote_addr,COUNT(*) as pv GROUP by remote_addr ORDER by pv desc limit 5`
         */
        query: string;
        /**
         * scan或短语查询表示是否向前或向后翻页
         * @example `false`
         */
        forward: boolean;
        /**
         * 是否高亮
         * @example `false`
         */
        highlight: boolean;
    };
}
