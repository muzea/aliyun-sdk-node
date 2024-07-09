export interface DescribeLogStoreResponse {
    /**
     * 威胁分析服务返回的具体内容。
     */
    Data: {
        /**
         * 日志服务LogStore的名字。
         * @example `cloud-siem`
         */
        LogStoreName: string;
        /**
         * 数据保存天数。
         * @example `180`
         */
        Ttl: number;
        /**
         * 日志服务分区（shard）数目。
         * @example `2`
         */
        ShardCount: number;
        /**
         * 是否通过Web Tracking采集各种浏览器、iOS App或Android App的用户信息，默认关闭。取值：
         * - true：开启
         * - false：关闭
         * @example `false`
         */
        EnableTracking: boolean;
        /**
         * 自动分裂分区（shard）。取值：
         * - true：开启
         * - false：关闭
         * @example `false`
         */
        AutoSplit: boolean;
        /**
         * 最大分裂数。
         * @example `64`
         */
        MaxSplitShard: number;
        /**
         * 接收日志后，是否自动添加客户端外网IP和日志到达时间。取值：
         * - true：自动添加客户端外网IP和日志到达时间
         * - false：不自动添加客户端外网IP和日志到达时间
         * @example `false`
         */
        AppendMeta: boolean;
    };
    /**
     * 请求消息ID。
     * @example `9B9CBCEE-9225-5069-BC7F-880938A2****`
     */
    RequestId: string;
}
