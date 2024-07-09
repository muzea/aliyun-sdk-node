export interface DescribeVServerGroupsResponse {
    /**
     * 请求ID。
     * @example `9DEC9C28-AB05-4DDF-9A78-6B08******`
     */
    RequestId: string;
    VServerGroups: {
        /**
         * 后端服务器列表。
         */
        VServerGroup: {
            /**
             * 服务器组ID。
             * @example `rsp-0bf******`
             */
            VServerGroupId: string;
            /**
             * 服务器组名称。
             * @example `Group3`
             */
            VServerGroupName: string;
            /**
             * 关联信息。
             */
            AssociatedObjects: {
                Listeners: {
                    /**
                     * 监听列表。
                     */
                    Listener: {
                        /**
                         * 监听端口。
                         * @example `80`
                         */
                        Port: number;
                        /**
                         * 监听协议。取值：**tcp**、**udp**、**http**或**https**。
                         * @example `tcp`
                         */
                        Protocol: string;
                    }[];
                };
                Rules: {
                    /**
                     * 转发规则列表。
                     */
                    Rule: {
                        /**
                         * 访问路径。
                         * @example `/example`
                         */
                        Url: string;
                        /**
                         * 请求域名。
                         * @example `www.example.com`
                         */
                        Domain: string;
                        /**
                         * 转发规则名称。
                         * @example `test`
                         */
                        RuleName: string;
                        /**
                         * 转发规则ID。
                         * @example `rule-a3x3pg1******`
                         */
                        RuleId: string;
                    }[];
                };
            };
            /**
             * 服务器个数。
             * 该参数对应的功能默认不开放，如需使用请联系销售或提交工单。
             * @example `1`
             */
            ServerCount: number;
            /**
             * 传统型负载均衡实例的创建时间，格式：`YYYY-MM-DDThh:mm:ssZ`。
             * @example `2022-08-31T02:49:05Z`
             */
            CreateTime: string;
            Tags: {
                /**
                 * 标签列表。
                 */
                Tag: {
                    /**
                     * 资源的标签键。
                     * @example `TestKey`
                     */
                    TagKey: string;
                    /**
                     * 资源的标签值。
                     * @example `TestValue`
                     */
                    TagValue: string;
                }[];
            };
        }[];
    };
}
