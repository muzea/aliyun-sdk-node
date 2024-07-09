export interface GetLogsRequest {
    /**
     * Project名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * 查询Logstore中的数据。
     * @example `example-logstore`
     */
    "logstore": string;
    /**
     * 查询开始时间点。该时间是指写入日志数据时指定的日志时间。
     * - 请求参数**from**和**to**定义的时间区间遵循左闭右开原则，即该时间区间包括区间开始时间点，但不包括区间结束时间点。如果**from**和**to**的值相同，则为无效区间，函数直接返回错误。
     * - Unix时间戳格式，表示从1970-1-1 00:00:00 UTC计算起的秒数。
     * > 如果您要确保不漏查数据，请将查询时间对齐到分钟级别。如果您在分析语句中设置了时间范围，则查询分析时以该时间范围为准。
     * 如果您需要精确到秒，需要在分析语句中指定时间时，使用[from_unixtime函数](~~63451~~)或[to_unixtime函数](~~63451~~)转换下时间格式。例如：
     * - `* | SELECT * FROM log WHERE from_unixtime(__time__) > from_unixtime(1664186624) AND from_unixtime(__time__) < now()`
     * - `* | SELECT * FROM log WHERE __time__ > to_unixtime(date_parse('2022-10-19 15:46:05', '%Y-%m-%d %H:%i:%s')) AND __time__ < to_unixtime(now())`
     * @example `1627268185`
     */
    "from": number;
    /**
     * 查询结束时间点。该时间是指写入日志数据时指定的日志时间。
     * - 请求参数**from**和**to**定义的时间区间遵循左闭右开原则，即该时间区间包括区间开始时间点，但不包括区间结束时间点。如果**from**和**to**的值相同，则为无效区间，函数直接返回错误。
     * - Unix时间戳格式，表示从1970-1-1 00:00:00 UTC计算起的秒数。
     * > 如果您要确保不漏查数据，请将查询时间对齐到分钟级别。如果您在分析语句中设置了时间范围，则查询分析时以该时间范围为准。
     * 如果您需要精确到秒，需要在分析语句中指定时间时，使用[from_unixtime函数](~~63451~~)或[to_unixtime函数](~~63451~~)转换下时间格式。例如：
     * - `* | SELECT * FROM log WHERE from_unixtime(__time__) > from_unixtime(1664186624) AND from_unixtime(__time__) < now()`
     * - `* | SELECT * FROM log WHERE __time__ > to_unixtime(date_parse('2022-10-19 15:46:05', '%Y-%m-%d %H:%i:%s')) AND __time__ < to_unixtime(now())`
     * @example `1627269085`
     */
    "to": number;
    /**
     * 查询语句或者分析语句。更多信息，请参见[查询概述](~~43772~~)和[分析概述](~~53608~~)。
     * 在query参数的分析语句中加上`set session parallel_sql=true;`，表示使用SQL独享版。例如`* | set session parallel_sql=true; select count(*) as pv` 。常见查询与分析问题，请参见[查询与分析日志的常见报错](~~61628~~)。
     * > 当query参数中有分析语句（SQL语句）时，该接口的line参数和offset参数无效，建议设置该接口的参数为0，需通过SQL语句的LIMIT语法实现翻页。更多信息，请参见[分页显示查询分析结果](~~89994~~)。
     * @example `status: 401 | SELECT remote_addr,COUNT(*) as pv GROUP by remote_addr ORDER by pv desc limit 5`
     */
    "query"?: string;
    /**
     * 日志主题。默认值为双引号（""）。更多信息，请参见[日志主题（Topic）](~~48881~~)。
     * @example `topic`
     */
    "topic"?: string;
    /**
     * 仅当query参数为查询语句时，该参数有效，表示请求返回的最大日志条数。最小值为0，最大值为100，默认值为100。
     * @example `100`
     */
    "line"?: number;
    /**
     * 仅当query参数为查询语句时，该参数有效，表示查询开始行。默认值为0。
     * @example `0`
     */
    "offset"?: number;
    /**
     * 用于指定返回结果是否按日志时间戳降序返回日志，精确到分钟级别。
     * - true：按照日志时间戳降序返回日志。
     * - false（默认值）：按照日志时间戳升序返回日志。
     * ><notice>
     * - 当query参数为查询语句时，参数reverse有效，用于指定返回日志排序方式。
     * - 当query参数为查询和分析语句时，参数reverse无效，由SQL分析语句中order by语法指定排序方式。如果order by为asc（默认），则为升序；如果order by为desc，则为降序。
     * ></notice>
     * @example `false`
     */
    "reverse"?: boolean;
    /**
     * 是否使用SQL独享版。更多信息，请参见[开启SQL独享版](~~223777~~)。
     * - true：使用SQL独享版。
     * - false（默认值）：使用SQL普通版。
     * 除通过powerSql参数配置SQL独享版外，您还可以使用**query**参数。
     * @example `false`
     */
    "powerSql"?: boolean;
}
