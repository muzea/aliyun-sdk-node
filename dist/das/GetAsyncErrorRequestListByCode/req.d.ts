export interface GetAsyncErrorRequestListByCodeRequest {
    /**
     * 实例ID。
     * @example `rm-2ze8g2am97624****`
     */
    "InstanceId": string;
    /**
     * 节点ID。
     * > 对于PolarDB MySQL版实例，需要提供节点ID。
     * @example `pi-wz9s658475e58****`
     */
    "NodeId"?: string;
    /**
     * 查询开始时间，格式为Unix时间戳，单位为毫秒。
     * > 查询开始时间需要在数据库实例SQL洞察存储时长范围内，最大不能早于当前时间90天。
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
     * 错误码，您可调用[GetAsyncErrorRequestStatByCode](~~409804~~)接口查询实例的MySQL错误码。
     * @example `1064`
     */
    "ErrorCode"?: string;
}
