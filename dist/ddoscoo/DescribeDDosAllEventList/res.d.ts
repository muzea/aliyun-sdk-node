export interface DescribeDDosAllEventListResponse {
    /**
     * 查询到的攻击事件的总数量。
     * @example `1`
     */
    Total: number;
    /**
     * 本次请求的ID。
     * @example `25D83ED5-28CB-5683-9CF7-AECE521F3005`
     */
    RequestId: string;
    /**
     * 攻击事件列表。
     */
    AttackEvents: {
        /**
         * 攻击结束时间。使用时间戳表示，单位：秒。
         * @example `1634546030`
         */
        EndTime: number;
        /**
         * 攻击开始时间。使用时间戳表示，单位：秒。
         * @example `1634543764`
         */
        StartTime: number;
        /**
         * DDoS攻击事件的类型。取值：
         * - **web-cc**：表示Web资源耗尽型攻击。
         * - **cc**：表示连接型攻击。
         * - **defense**：表示流量型攻击（清洗事件）。
         * - **blackhole**：表示流量型攻击（黑洞事件）。
         * @example `cc`
         */
        EventType: string;
        /**
         * 攻击流量的带宽峰值。单位：Mbps。
         * @example `101899`
         */
        Mbps: number;
        /**
         * 被攻击的对象。不同攻击事件类型对应的被攻击对象不同，具体说明如下：
         * - Web资源耗尽型攻击（**EventType**为**web-cc**）：该参数表示被攻击的网站域名。
         * - 连接型攻击（**EventType**为**cc**）：该参数表示被攻击的高防IP。
         * - 流量型攻击（**EventType**为**defense**或**blackhole**）：该参数表示被攻击的高防IP。
         * @example `203.107.XX.XX`
         */
        Ip: string;
        /**
         * 攻击来源地域。取值：
         * - **cn**：表示中国内地。
         * - **alb-cn-hongkong-gf-2**：表示中国香港。
         * - **alb-us-west-1-gf-2**：表示美国（硅谷）。
         * - **alb-ap-northeast-1-gf-1**：表示日本（东京）。
         * - **alb-ap-southeast-gf-1**：表示新加坡。
         * - **alb-eu-central-1-gf-1**：表示德国（法兰克福）。
         * - **alb-eu-west-1-gf-1**、**selb-eu-west-1-gf-1a**：表示英国（伦敦）。
         * - **alb-us-east-gf-1**：表示美国（弗吉尼亚）。
         * - **CT-yundi**：表示中国香港。该取值只适用于DDoS高防（国际）安全加速线路实例。
         * @example `cn`
         */
        Area: string;
        /**
         * 被攻击的端口号。
         * > Web资源耗尽型攻击（**EventType**为**web-cc**）不返回该参数。
         * @example `80`
         */
        Port: string;
        /**
         * 攻击流量的包转发率峰值。单位：pps。
         * @example `9664270`
         */
        Pps: number;
    }[];
}
