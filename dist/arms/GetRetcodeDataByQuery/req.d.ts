export interface GetRetcodeDataByQueryRequest {
    /**
     * 应用ID。
     * 在**ARMS控制台**的**前端监控** > **前端列表**页面单击目标应用名称。此时浏览器地址栏中的URL即包含前端应用的pid，格式为pid=xxx。由于浏览器进行了编码，应用需要对xxx%40xxx格式的pid稍作修改。例如，如果URL中包含的pid为eb4zdose6v%409781be0f44d****，则需要将%40替换为@，即：eb4zdose6v@9781be0f44d****。
     * @example `atc889zkcf@d8deedfa9bf****`
     */
    "Pid": string;
    /**
     * 符合SLS Logstore查询语法的查询语句。
     * @example `t : pv|select sum(times) as pv , approx_distinct(uid) as uv , (date-date%3600000) as date  group by date`
     */
    "Query": string;
    /**
     * 查询开始时间点。Unix时间戳类型，表示从1970-1-1 00:00:00 UTC计算起的秒数。
     * @example `1668687302`
     */
    "From": number;
    /**
     * 查询结束时间点。Unix时间戳类型，表示从1970-1-1 00:00:00 UTC计算起的秒数。
     * @example `1668688000`
     */
    "To": number;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
