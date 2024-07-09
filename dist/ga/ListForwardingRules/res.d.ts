export interface ListForwardingRulesResponse {
    /**
     * 请求ID。
     * @example `CFC67ED9-4AB1-431F-B6E3-A752B7B8CCD4`
     */
    RequestId: string;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 转发策略信息列表。
     */
    ForwardingRules: {
        /**
         * 转发策略优先级。
         * 返回为**1**~**10000**。值越小表示优先级越高。
         * @example `1000`
         */
        Priority: number;
        /**
         * 转发策略ID。
         * @example `frule-bp19a3t3yzr21q3****`
         */
        ForwardingRuleId: string;
        /**
         * 转发策略名称。
         * @example `auto_named_rule`
         */
        ForwardingRuleName: string;
        /**
         * 规则生效方向。
         * 目前默认返回**request**，表示请求方向生效。
         * @example `request`
         */
        ForwardingRuleDirection: string;
        /**
         * 转发策略状态。
         * - **active**：正常。
         * - **configuring**：变配中。
         * - **deleting**：删除中。
         * @example `active`
         */
        ForwardingRuleStatus: string;
        /**
         * 转发条件列表。
         */
        RuleConditions: {
            /**
             * 转发条件类型。
             * - **Host**：域名。
             * - **Path**：路径。
             * - **RequestHeader**：HTTP标头。
             * - **Query**：查询字符串。
             * - **Method**：HTTP请求方法。
             * - **Cookie**：Cookie。
             * - **SourceIP**：源IP。
             * @example `Host`
             */
            RuleConditionType: string;
            /**
             * 转发条件类型对应的值。
             * 根据**RuleConditionType**返回不同的JSON字符串值。
             * - 当**RuleConditionType**为**Host**时，该参数返回域名条件配置信息。若一个转发规则内返回多个域名，多个域名间为“或”关系。
             * - 当**RuleConditionType**为**Path**时，该参数返回路径条件配置信息。一个转发策略若返回多个路径类型转发规则，多个路径类型转发规则间为”或“关系，一个转发路径类型规则若返回多个路径，多个路径间为“或”关系。
             * - 当**RuleConditionType**为**RequestHeader**时，该参数返回HTTP标头字段条件配置信息，由键（Key）和值（Value）组成。
             * - 当**RuleConditionType**为**Query**时，该参数返回查询字符串条件配置信息，由键（Key）和值（Value）组成。
             *
             * - 当**RuleConditionType**为**Method**时，该参数返回请求方法配置信息。
             * - 当**RuleConditionType**为**Cookie**时，该参数返回Cookie配置信息，由键（Key）和值（Value）组成。
             * - 当**RuleConditionType**为**SourceIP**时，该参数返回源IP配置信息。若一个转发规则内返回了多个源IP，多个IP之间为“或”关系。
             * @example `["www.example.com", "www.aliyun.com"]`
             */
            RuleConditionValue: string;
            /**
             * 路径配置信息。
             * > 针对2022年07月12日之后创建的全球加速实例，支持所有转发条件类型和转发动作类型，建议通过**RuleConditionType**和**RuleConditionValue**查看转发条件信息。
             */
            PathConfig: {
                /**
                 * 路径配置信息。
                 * > 针对2022年07月12日之后创建的全球加速实例，支持所有转发条件类型和转发动作类型，建议通过**RuleConditionType**和**RuleConditionValue**查看转发条件信息。
                 */
                Values: string[];
            };
            /**
             * 域名配置信息。
             * > 针对2022年07月12日之后创建的全球加速实例，支持所有转发条件类型和转发动作类型，建议通过**RuleConditionType**和**RuleConditionValue**查看转发条件信息。
             */
            HostConfig: {
                /**
                 * 域名配置信息。
                 * > 针对2022年07月12日之后创建的全球加速实例，支持所有转发条件类型和转发动作类型，建议通过**RuleConditionType**和**RuleConditionValue**查看转发条件信息。
                 */
                Values: string[];
            };
        }[];
        /**
         * 转发动作。
         */
        RuleActions: {
            /**
             * 转发优先级。
             * > 当前无实际意义。
             * @example `1`
             */
            Order: number;
            /**
             * 转发动作类型。
             * - **ForwardGroup**：转发。
             * - **Redirect**：重定向。
             * - **FixResponse**：返回固定响应。
             * - **Rewrite**：重写。
             * - **AddHeader**：写入头字段。
             * - **RemoveHeader**：删除头字段。
             * @example `ForwardGroup`
             */
            RuleActionType: string;
            /**
             * 转发动作类型对应的值。
             * 根据**RuleActionType**返回不同的JSON字符串值。
             * - 当**RuleActionType**为**ForwardGroup**时，该参数返回虚拟终端节点组信息。其中：
             *     - `type`：`endpointgroup`。
             *     - `value`：目标虚拟终端节点组ID。
             * - 当**RuleActionType**为**Redirect**时，该参数返回重定向配置信息。其中：
             *     - `protocol`：要跳转的协议。
             *     - `domain`：要跳转的域名。
             *     - `port`：要跳转的端口。
             *     - `path`：要跳转的路径。
             *     - `query`：要跳转的查询字符串。
             *     - `code`：跳转方式。
             * - 当**RuleActionType**为**FixResponse**时，该参数返回配置的返回固定响应信息。其中：
             *     - `code`：响应状态码。
             *     - `type`：响应正文类型。
             *     - `content`：响应正文。
             * - 当**RuleActionType**为**AddHeader**时，该参数返回插入HTTP标头字段配置信息。其中：
             *     - `name`：HTTP标头字段名称。
             *     - `type`：HTTP标头字段内容类型。
             *     - `value`：HTTP标头字段内容。
             * - 当**RuleActionType**为**RemoveHeader**时，该参数返回删除HTTP标头字段信息。
             * - 当**RuleActionType**为**Rewrite**时，该参数返回重写配置信息。其中：
             *     - `domain`：要跳转的域名。
             *     - `path`：要跳转的路径。
             *     - `query`：要跳转的查询字符串。
             * @example `[{"type":"endpointgroup", "value":"epg-bp1enpdcrqhl78g6r****"}]`
             */
            RuleActionValue: string;
            /**
             * 转发动作配置信息。
             * > 针对2022年07月12日之后创建的全球加速实例，支持所有转发条件类型和转发动作类型，建议通过**RuleActionType**和**RuleActionValue**查看转发动作信息。
             */
            ForwardGroupConfig: {
                /**
                 * 终端节点组信息。
                 * > 针对2022年07月12日之后创建的全球加速实例，支持所有转发条件类型和转发动作类型，建议通过**RuleActionType**和**RuleActionValue**查看转发动作信息。
                 */
                ServerGroupTuples: {
                    /**
                     * 终端节点组ID。
                     * > 针对2022年07月12日之后创建的全球加速实例，支持所有转发条件类型和转发动作类型，建议通过**RuleActionType**和**RuleActionValue**查看转发动作信息。
                     * @example `epg-bp1enpdcrqhl78g6r****`
                     */
                    EndpointGroupId: string;
                }[];
            };
        }[];
        /**
         * 监听实例ID。
         * @example `lsr-bp1s0vzbi5bxlx5****`
         */
        ListenerId: string;
        /**
         * 托管实例所属的服务方ID。
         * > 仅在**ServiceManaged**参数为**True**时有效。
         * @example `ALB`
         */
        ServiceId: string;
        /**
         * 是否为托管实例。取值：
         * - **true**：是托管实例。
         * - **false**：不是托管实例。
         * @example `true`
         */
        ServiceManaged: boolean;
        /**
         * 用户在此托管实例下可执行的动作策略列表。
         * > 仅在**ServiceManaged**参数为**True**时有效。
         * > - 当实例处于托管状态时，用户对实例的操作会受到限制，某些操作行为会被禁止。
         */
        ServiceManagedInfos: {
            /**
             * 托管策略动作名称，取值：
             * - **Create**：创建实例。
             * - **Update**：更新当前实例。
             * - **Delete**：删除当前实例。
             * - **Associate**：引用/被引用当前实例。
             * - **UserUnmanaged**：用户解托管实例。
             * - **CreateChild**：在当前实例下创建子资源。
             * @example `Update`
             */
            Action: string;
            /**
             * 子资源类型，取值：
             * - **Listener**：监听资源。
             * - **IpSet**：加速地域资源。
             * - **EndpointGroup**：终端节点组资源。
             * - **ForwardingRule**：转发策略资源。
             * - **Endpoint**：终端节点资源。
             * - **EndpointGroupDestination**：自定义路由监听下的终端节点组协议映射资源。
             * - **EndpointPolicy**：自定义路由监听下的终端节点通行策略资源。
             * > 仅在**Action**参数为**CreateChild**时有效。
             * @example `Listener`
             */
            ChildType: string;
            /**
             * 托管策略动作是否被托管，取值：
             * - **true**：托管策略动作被托管，用户无权在托管实例下执行Action指定的操作。
             * - **false**：托管策略动作未被托管，用户可在托管实例下执行Action指定的操作。
             * @example `false`
             */
            IsManaged: boolean;
        }[];
    }[];
}
