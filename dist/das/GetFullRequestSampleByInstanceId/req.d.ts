export interface GetFullRequestSampleByInstanceIdRequest {
    /**
     * 用户ID，即创建数据库实例的阿里云主账号ID。
     * > 非必填，输入目标数据库实例ID后，在调用API接口时，系统会自动获取用户ID。
     * @example `196278346919****`
     */
    "UserId"?: string;
    /**
     * 实例ID。
     * @example `rm-2ze8g2am97624****`
     */
    "InstanceId": string;
    /**
     * SQL ID。
     * @example `651b56fe9418d48edb8fdf0980ec****`
     */
    "SqlId": string;
    /**
     * 查询开始时间，格式为Unix时间戳，单位为毫秒。
     * > 查询开始时间需要在数据库实例SQL洞察存储时长范围内，最大不能早于当前时间90天。
     * @example `1660097421000`
     */
    "Start": number;
    /**
     * 查询结束时间，格式为Unix时间戳，单位为毫秒。
     * > 查询结束时间需晚于查询开始时间，且查询开始时间和查询结束时间的间隔不能小于1小时。
     * @example `1660104621000`
     */
    "End": number;
    /**
     * PolarDB-X 2.0数据库实例节点信息。
     * - **polarx_cn**：计算节点。
     * - **polarx_en**：数据节点。
     * @example `polarx_cn`
     */
    "Role"?: string;
}
