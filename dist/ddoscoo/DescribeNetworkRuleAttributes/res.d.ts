export interface DescribeNetworkRuleAttributesResponse {
    /**
     * 本次请求的ID。
     * @example `F9F2F77D-307C-4F15-8D02-AB5957EEBF97`
     */
    RequestId: string;
    /**
     * 非网站业务端口转发规则的防护配置，包括会话保持和DDoS防护策略。
     */
    NetworkRuleAttributes: {
        /**
         * 转发端口。
         * @example `8080`
         */
        FrontendPort: number;
        /**
         * DDoS高防实例ID。
         * @example `ddoscoo-cn-mp91j1ao****`
         */
        InstanceId: string;
        /**
         * 转发协议。取值：
         * - **tcp**
         * - **udp**
         * @example `tcp`
         */
        Protocol: string;
        /**
         * 端口转发规则的防护配置。
         */
        Config: {
            /**
             * 空连接过滤的开关状态。取值：
             * - **on**：开启
             * - **off**：关闭
             * @example `off`
             */
            NodataConn: string;
            /**
             * 虚假源过滤的开关状态。取值：
             * - **on**：开启
             * - **off**：关闭
             * @example `off`
             */
            Synproxy: string;
            /**
             * 会话保持的超时时间。取值范围：**30**~**3600**，单位：秒。默认为**0**，表示关闭。
             * @example `0`
             */
            PersistenceTimeout: number;
            /**
             * 目的限速配置。
             */
            Sla: {
                /**
                 * 目的并发连接限速的开关状态。取值：
                 * - **0**：关闭
                 * - **1**：开启
                 * @example `0`
                 */
                MaxconnEnable: number;
                /**
                 * 目的新建连接限速的开关状态。取值：
                 * - **0**：关闭
                 * - **1**：开启
                 * @example `1`
                 */
                CpsEnable: number;
                /**
                 * 目的新建连接限速。取值范围：**100**~**100000**。
                 * @example `100000`
                 */
                Cps: number;
                /**
                 * 目的并发连接限速。取值范围：**1000**~**1000000**。
                 * @example `1000000`
                 */
                Maxconn: number;
            };
            /**
             * 源限速配置。
             */
            Slimit: {
                /**
                 * 源并发连接限速的开关状态。取值：
                 * - **0**：关闭
                 * - **1**：开启
                 * @example `0`
                 */
                MaxconnEnable: number;
                /**
                 * 源新建连接限速的开关状态。取值：
                 * - **0**：关闭
                 * - **1**：开启
                 * @example `0`
                 */
                CpsEnable: number;
                /**
                 * 源新建连接限速。取值范围：**1**~**500000**，单位：个。
                 * @example `0`
                 */
                Cps: number;
                /**
                 * 源PPS限速。取值范围：**1**~**100000**，单位：Packet/s。默认为**0**，表示未开启源PPS限速。
                 * @example `0`
                 */
                Pps: number;
                /**
                 * 源带宽限速。取值范围：**1024**~**268435456**，单位：Byte/s。默认为**0**，表示未开启源带宽限速。
                 * @example `0`
                 */
                Bps: number;
                /**
                 * 源并发连接限速。取值范围：**1**~**500000**，单位：个。
                 * @example `0`
                 */
                Maxconn: number;
                /**
                 * 源新建连接限速的模式。取值：
                 * - **1**：手动
                 * - **2**：自动
                 * @example `1`
                 */
                CpsMode: number;
            };
            /**
             * 包长度过滤配置。
             */
            PayloadLen: {
                /**
                 * 包长度的最小值。取值范围：**0**~**6000**，单位：Byte。
                 * @example `0`
                 */
                Min: number;
                /**
                 * 包长度的最大值。取值范围：**0**~**6000**，单位：Byte。
                 * @example `6000`
                 */
                Max: number;
            };
            /**
             * 源连接频繁超限控制策略。
             */
            Cc: {
                /**
                 * 源连接多次超限，将源IP加入黑名单的策略。
                 */
                Sblack: {
                    /**
                     * 源IP黑名单配置类型。取值：
                     * - **1**：源新建连接限速IP黑名单
                     * - **2**：源并发连接限速IP黑名单
                     * - **3**：源PPS限速IP黑名单
                     * - **4**：源带宽限速IP黑名单
                     * @example `1`
                     */
                    Type: number;
                    /**
                     * 检查间隔。取值固定为**60**，单位：秒。
                     * @example `60`
                     */
                    During: number;
                    /**
                     * 黑名单有效时长。取值范围：**60**~**604800**，单位：秒。
                     * @example `600`
                     */
                    Expires: number;
                    /**
                     * 源连接超过限制的次数。取值固定为**5**，表示如果源连接在检查间隔内超过限制5次，将源IP加入黑名单。
                     * @example `5`
                     */
                    Cnt: number;
                }[];
            };
        };
    }[];
}
