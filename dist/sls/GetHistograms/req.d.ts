export interface GetHistogramsRequest {
    /**
     * project 名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * Logstore名称。
     * @example `test-logstore`
     */
    "logstore": string;
    /**
     * 子时间区间的开始时间点。UNIX时间戳格式，表示从1970-1-1 00:00:00 UTC计算起的秒数。
     * @example `1409529600`
     */
    "from": number;
    /**
     * 子时间区间的结束时间点。UNIX时间戳格式，表示从1970-1-1 00:00:00 UTC计算起的秒数。
     * @example `1409569200`
     */
    "to": number;
    /**
     * 日志主题。
     * @example `topic`
     */
    "topic"?: string;
    /**
     * 查询语句。仅支持查询语句，不支持分析语句。关于查询语句的详细语法，请参见[查询语法](~~43772~~)。
     * @example `with_pack_meta`
     */
    "query"?: string;
}
