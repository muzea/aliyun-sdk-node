export interface DescribeLogMetaResponse {
    /**
     * 查询到的配置信息总数量。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `D0D6E6E4-CB8C-4897-B852-46AEFDA04B21`
     */
    RequestId: string;
    /**
     * 云安全中心日志分析的配置信息列表。
     */
    LogMetaList: {
        /**
         * 日志类型名称。
         * @example `Login`
         */
        LogDesc: string;
        /**
         * 当前启用状态。取值：
         * - **disabled**：未启用。
         * - **enabled**：启用。
         * @example `enabled`
         */
        Status: string;
        /**
         * 日志存放的专属Logstore名称。
         * @example `aegis-log-login`
         */
        LogStore: string;
        /**
         * 日志存放的专属Project名称。
         * @example `sasnew-log-XXXX-cn-hangzhou`
         */
        UserProject: string;
        /**
         * 日志分类。取值：
         * - **host**：主机日志。
         * - **network**：网络日志。
         * - **security**：安全日志。
         * @example `host`
         */
        Category: string;
        /**
         * Project名称。
         * @example `aegis-log`
         */
        Project: string;
        /**
         * 用户日志存放的专属Logstore名称。
         * @example `aegis-log-network`
         */
        UserLogStore: string;
        /**
         * 所属地域。
         * @example `cn-hangzhou`
         */
        UserRegion: string;
        /**
         * 日志保存天数。
         * @example `180`
         */
        Ttl: number;
        /**
         * 热存储转冷存储时间。单位：天。
         * > 若为**-1**表示不进行转换。
         * @example `-1`
         */
        HotTtl: number;
        /**
         * 投递的日志主题。
         * @example `aegis-log-login`
         */
        Topic: string;
    }[];
}
