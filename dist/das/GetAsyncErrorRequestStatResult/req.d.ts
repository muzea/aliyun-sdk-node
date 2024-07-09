export interface GetAsyncErrorRequestStatResultRequest {
    /**
     * 实例ID。
     * @example `rm-2ze8g2am97624****`
     */
    "InstanceId": string;
    /**
     * 节点ID。
     * > 对于PolarDB MySQL版实例，需要提供节点ID。
     * @example `pi-bp179lg03445l****`
     */
    "NodeId"?: string;
    /**
     * SQL ID，多个SQL ID请使用英文逗号分隔。您可以调用[GetAsyncErrorRequestListByCode](~~410746~~)接口查询实例中产生MySQL错误码的SQL ID。
     * @example `ad78a4e7d3ce81590c9dc2d5f4bc****,0f92feacd92c048b06a16617a633****`
     */
    "SqlIdList"?: string;
    /**
     * 查询开始时间，格式为Unix时间戳，单位为毫秒。
     * > 查询开始时间需在数据库实例SQL洞察存储时长范围内，最大不能早于当前时间90天。
     * @example `1642556990714`
     */
    "Start"?: number;
    /**
     * 查询结束时间，格式为Unix时间戳，单位为毫秒。
     * > 查询结束时间需晚于查询开始时间，且查询开始时间和查询结束时间的间隔不能超过1天。
     * @example `1642566830000`
     */
    "End"?: number;
    /**
     * 数据库名称。
     * @example `testdb01`
     */
    "DbName"?: string;
}
