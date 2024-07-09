export interface DescribeIMRobotsResponse {
    /**
     * 请求ID。
     * @example `4D6C358A-A58B-4F4B-94CE-F5AAF023****`
     */
    RequestId: string;
    /**
     * 分页对象。
     */
    PageBean: {
        /**
         * 查询到的IM机器人总数。
         * @example `1`
         */
        Total: number;
        /**
         * 查询的页数。
         * @example `1`
         */
        Page: number;
        /**
         * 每页的IM机器人数。
         * @example `20`
         */
        Size: number;
        /**
         * IM机器人详情。
         */
        AlertIMRobots: {
            /**
             * IM机器人ID。
             * @example `123`
             */
            RobotId: number;
            /**
             * IM机器人类型：
             * - `dingding`：钉钉机器人。
             * - `wechat`：企业微信机器人。
             * @example `dingding`
             */
            Type: string;
            /**
             * IM机器人名称。
             * @example `robot名称`
             */
            RobotName: string;
            /**
             * IM机器人的Webhook地址。
             * @example `https://oapi.dingtalk.com/robot/send?access_token=e1a049121******`
             */
            RobotAddr: string;
            /**
             * 是否发送每日统计信息。
             * - `false`（默认）：不发送统计信息。
             * - `true`：发送统计信息。
             * @example `true`
             */
            DailyNoc: boolean;
            /**
             * 每日统计信息发送的时间点。ARMS告警管理将在设置的时间点发送今日产生告警的总数、解决数和待解决数。
             * @example `09:30,17:30`
             */
            DailyNocTime: string;
            /**
             * 钉钉签名密钥。如配置了密钥则会通过加签的方式进行钉钉认证。如果没有配置密钥，默认使用关键字白名单的方式进行认证，白名单关键字为**告警**。
             * <props="china">更多信息，请参见[钉钉官方文档](https://open.dingtalk.com/document/robots/customize-robot-security-settings)。</props>
             * @example `******`
             */
            DingSignKey: string;
            /**
             * IM机器人的创建时间。
             * @example `2023-01-16 17:21:48`
             */
            CreateTime: string;
            /**
             * 通知策略。
             */
            DispatchRules: {
                /**
                 * 通知策略ID。
                 * @example `12345`
                 */
                id: number;
                /**
                 * 通知策略名称。
                 * @example `通知策略测试`
                 */
                name: string;
            }[];
        }[];
    };
}
