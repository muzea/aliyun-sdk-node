export interface SearchTracesByPageRequest {
    /**
     * 开始时间的时间戳，精确到毫秒。
     * @example `1595174400000`
     */
    "StartTime": number;
    /**
     * 结束时间的时间戳，精确到毫秒。
     * @example `1595210400000`
     */
    "EndTime": number;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 应用名称。
     * @example `arms-k8s-demo-subcomponent`
     */
    "ServiceName"?: string;
    /**
     * 埋点的接口名称。
     * @example `/demo/queryNotExistDB/11`
     */
    "OperationName"?: string;
    /**
     * 最小耗时，单位为毫秒。
     * @example `2`
     */
    "MinDuration"?: number;
    /**
     * 按照时间正序或者倒序排列。默认值为`false`。
     * - `true`：表示倒序
     * - `false`：表示正序
     * @example `false`
     */
    "Reverse"?: boolean;
    /**
     * 应用所在机器的IP地址。
     * @example `172.20.XX.XX`
     */
    "ServiceIp"?: string;
    /**
     * 查询分页的页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 查询分页的每页项目数量，最大值为100。
     * @example `5`
     */
    "PageSize"?: number;
    /**
     * 应用ID。
     * @example `b590lhguqs@9781be0f44dXXXX`
     */
    "Pid"?: string;
    /**
     * 用于排除的筛选条件的结构体。
     */
    "ExclusionFilters"?: {
        /**
         * 用于排除的筛选条件的主键。
         * @example `http.status_code`
         */
        Key: string;
        /**
         * 用于排除的筛选条件的值。
         * @example `404`
         */
        Value: string;
    }[];
    /**
     * 标签列表。
     */
    "Tags"?: {
        /**
         * Tag的主键。系统预置字段如下：
         * - traceId：调用链ID
         * - serverApp：服务端应用名
         * - clientApp：客户端应用名
         * - service：接口名称
         * - rpc：调用类型
         * - msOfSpan：耗时大于
         * - clientIp：客户端IP
         * - serverIp：服务端IP
         * - isError：是否异常调用
         * @example `http.status_code`
         */
        Key: string;
        /**
         * Tag的值。
         * @example `200`
         */
        Value: string;
    }[];
    /**
     * 是否过滤错误的调用链。
     * - `true`：过滤
     * - `false`（默认）：不过滤
     * @example `false`
     */
    "IsError"?: boolean;
}
