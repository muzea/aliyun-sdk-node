export interface DescribeDdosEventListResponse {
    /**
     * 查询到的DDoS攻击事件的总数量。
     * @example `1`
     */
    Total: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `BC0907F8-A9F3-5E11-977B-D59CD98C64ED`
     */
    RequestId: string;
    DdosEventList: {
        /**
         * DDoS攻击事件的详情列表。
         */
        DdosEvent: {
            /**
             * DDoS攻击事件的类型。取值：
             * - **defense**：表示流量清洗事件。
             * - **blackhole**：表示黑洞事件。
             * @example `blackhole`
             */
            DdosType: string;
            /**
             * 事件的结束时间。使用时间戳表示，单位：毫秒。
             * @example `1637817679000`
             */
            EndTime: number;
            /**
             * 事件的开始时间。使用时间戳表示，单位：毫秒。
             * @example `1637812279000`
             */
            StartTime: number;
            /**
             * 最后一次遭受攻击的时间。使用时间戳表示，单位：毫秒。
             * > 只有在一次攻击事件中，公网IP资产遭到多次攻击时，才会返回该参数。
             * @example `1637817679000`
             */
            DelayTime: number;
            /**
             * 事件的状态。取值：
             * - **mitigating**：表示清洗中，即正在进行流量清洗。
             * - **blackholed**：表示黑洞中，即公网IP资产处于黑洞状态。
             * - **normal**：表示正常，即事件已结束。
             * @example `normal`
             */
            DdosStatus: string;
            /**
             * 黑洞解除时间。使用时间戳表示，单位：毫秒。
             * > 只有当**DdosType**为**blackhole**（表示黑洞事件）时，才会返回该参数。
             * @example `1637814079000`
             */
            UnBlackholeTime: number;
        }[];
    };
}
