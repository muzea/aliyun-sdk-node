export interface ListRulesResponse {
    /**
     * 本次请求所返回的最大记录条数。
     * @example `50`
     */
    MaxResults: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `CEF72CEB-54B6-4AE8-B225-F876F******`
     */
    RequestId: string;
    /**
     * 转发规则列表。
     */
    Rules: {
        /**
         * 转发规则所属监听ID。
         * @example `lsn-i35udpz3pxsmnf****`
         */
        ListenerId: string;
        /**
         * 转发规则所属负载均衡实例ID。
         * @example `alb-x30o38azsuj0sx****`
         */
        LoadBalancerId: string;
        /**
         * 规则优先级，取值为**1~10000**。值越小表示优先级越高。
         * > 同一个监听内规则优先级必须唯一。
         * @example `1`
         */
        Priority: number;
        /**
         * 转发规则动作列表。
         */
        RuleActions: {
            /**
             * 固定响应内容配置。
             */
            FixedResponseConfig: {
                /**
                 * 返回的固定内容。最大1 KB字节，只支持ASCII字符。
                 * @example `dssacav`
                 */
                Content: string;
                /**
                 * 返回固定内容的格式。
                 * 取值：**text/plain**、**text/css**、**text/html**、**application/javascript**或**application/json**。
                 * @example `text/plain`
                 */
                ContentType: string;
                /**
                 * 返回的HTTP响应码，仅支持**HTTP_2xx**、**HTTP_4xx**、**HTTP_5xx**数字型字符串，**x**为任意数字。
                 * @example `HTTP_2xx`
                 */
                HttpCode: string;
            };
            /**
             * 转发组配置。
             */
            ForwardGroupConfig: {
                /**
                 * 转发到的目的服务器组列表。
                 */
                ServerGroupTuples: {
                    /**
                     * 转发到的目的服务器组ID。
                     * @example `sgp-atstuj3rtoptyui****`
                     */
                    ServerGroupId: string;
                    /**
                     * 权重。取值范围：**0**~**100**。
                     * @example `2`
                     */
                    Weight: number;
                }[];
                /**
                 * 服务器组间会话保持配置
                 */
                ServerGroupStickySession: {
                    /**
                     * 当ServerGroupTuple.N数量大于1时，可选是否开启在服务器组间的会话保持
                     */
                    Enabled: boolean;
                    /**
                     * 当Enabled=True时，可以配置会话保持的超时时间
                     * @example `100`
                     */
                    Timeout: number;
                };
            };
            /**
             * 写入头字段配置。
             */
            InsertHeaderConfig: {
                /**
                 * 插入的头字段名称，长度为1\~40个字符，支持大小写字母a\~z、数字、下划线（_）和短划线（-）。头字段名称不能重复用于`InsertHeader`中。
                 * > 不允许用户在头字段名称中使用**Cookie**和**Host**。
                 * @example `key`
                 */
                Key: string;
                /**
                 * 插入的头字段内容。
                 * - **ValueType**取值为**SystemDefined**时取值如下：
                 *     - **ClientSrcPort**：客户端端口。
                 *     - **ClientSrcIp**：客户端IP地址。
                 *     - **Protocol**：客户端请求的协议（HTTP或HTTPS)。
                 *     - **SLBId**：应用型负载均衡实例ID。
                 *     - **SLBPort**：应用型负载均衡实例监听端口。
                 * - **ValueType**取值为**UserDefined**时：您可自定义头字段内容，限制长度为1\~128个字符，支持通配符星号（*）、半角问号（?）和ASCII码值`ch >= 32 && ch < 127`范围内的可打印字符，开头和结尾不能为空格。
                 * - **ValueType**取值为**ReferenceHeader**时：您可以引用请求头字段中的某一个字段，限制长度限制为1\~128个字符，支持小写字母a\~z、数字、短划线（-）和下划线（_）。
                 * @example `ClientSrcPort`
                 */
                Value: string;
                /**
                 * 头字段内容类型。取值：
                 * - **UserDefined**：用户指定。
                 * - **ReferenceHeader**：引用用户请求头中的某一个字段。
                 * - **SystemDefined**：系统定义。
                 * @example `SystemDefined`
                 */
                ValueType: string;
            };
            /**
             * 转发规则动作执行的顺序，取值为**1~50000**，按值从小到大执行动作。值不能为空，不能重复。
             * @example `1`
             */
            Order: number;
            /**
             * 重定向配置。
             */
            RedirectConfig: {
                /**
                 * 要跳转的主机地址。取值：
                 * - **${host}**（默认值）：取此值时不支持和其他字符拼接使用。
                 * - 其他取值，字符集和格式限制如下：
                 *     - 主机名长度为3\~128个字符，支持小写字母a\~z、数字、短划线（-）、半角句号（.）以及通配符星号（*）和半角问号（?）。
                 *     - 主机名至少包含一个半角句号（.），且半角句号（.）不能出现在开头或结尾。
                 *     - 最右侧的域标签只能包含字母和通配符，不能包含数字或短划线（-）。
                 *     - 短划线（-）不能出现在其它域标签的开头或结尾。
                 *     -  通配符星号（*）和半角问号（?）可以出现在域标签的任意位置。
                 * @example `www.example.com`
                 */
                Host: string;
                /**
                 * 跳转方式，取值为**301**、**302**、**303**、**307**或**308**。
                 * @example `301`
                 */
                HttpCode: string;
                /**
                 * 要跳转的路径。取值：
                 * - **${path}**（默认值）：可以引用**${host}**、**${protocol}**和**${port}**，由**${host}**、**${protocol}**和**${port}**组成，每个变量最多出现一次。上述变量可以同时使用，也可以和下面罗列的可取值范围内的字符串拼接使用。
                 * - 其他取值，字符集和格式限制如下：
                 *     - 长度为1~128个字符。
                 *     - 必须以正斜线（/）开头，支持字母、数字和特殊字符`$-_.+/&~@:`，不支持`“%#;!()[]^,” `，同时支持通配符星号（*）和半角问号（?）。
                 * @example `/test`
                 */
                Path: string;
                /**
                 * 要跳转的端口。取值：
                 * - **${port}**（默认值）：该取值不支持和其他字符同时使用。
                 * - 其他取值：**1~63335**。
                 * @example `10`
                 */
                Port: string;
                /**
                 * 要跳转的协议。取值：
                 * - **${protocol}**（默认值）：取该值时不支持和其他字符拼接使用。
                 * - **HTTP**或**HTTPS**。
                 *
                 * > HTTPS监听仅支持跳转HTTPS协议。
                 * @example `HTTP`
                 */
                Protocol: string;
                /**
                 * 要跳转的查询字符串。长度为1~128个字符，支持小写字母和可见字符，不支持 `#[]{}\|<>&`。
                 * @example `quert`
                 */
                Query: string;
            };
            /**
             * 去除HTTP头部配置。
             */
            RemoveHeaderConfig: {
                /**
                 * 去除的头字段名称，长度为1\~40个字符，支持大小写字母a~z、数字、下划线（_）和短划线（-）。头字段名称不能重复用于RemoveHeader中。
                 * * 请求方向（Direction取值为Request）：不允许将头名称设置为以下字段（不区分大小写）：`slb-id`、`slb-ip`、`x-forwarded-for`、`x-forwarded-proto`、`x-forwarded-eip`、`x-forwarded-port`、`x-forwarded-client-srcport`、`connection`、`upgrade`、`content-length`、`transfer-encoding`、`keep-alive`、`te`、`host`、`cookie`、`remoteip`、`authority`。
                 * * 响应方向（Direction取值为Response）：响应方向不允许将头名称设置为以下字段（不区分大小写）：`connection`、`upgrade`、`content-length`、`transfer-encoding`。
                 * @example `key`
                 */
                Key: string;
            };
            /**
             * 重写配置。
             */
            RewriteConfig: {
                /**
                 * 要跳转的主机地址。取值：
                 * - **${host}**（默认值）：取此值时不支持和其他字符拼接使用。
                 * - 其他取值，字符集和格式限制如下：
                 *     - 主机名长度为3\~128个字符，支持小写字母a\~z、数字、短划线（-）、半角句号（.）以及通配符星号（*）和半角问号（?）。
                 *     - 主机名至少包含一个半角句号（.），且半角句号（.）不能出现在开头或结尾。
                 *     - 最右侧的域标签只能包含字母和通配符，不能包含数字或短划线（-）。
                 *     - 短划线（-）不能出现在其它域标签的开头或结尾。
                 *     -  通配符星号（*）和半角问号（?）可以出现在域标签的任意位置。
                 * @example `www.example.com`
                 */
                Host: string;
                /**
                 * 内部跳转的目的路径。长度为1~128个字符，以正斜线（/）开头，支持字母、数字、星号（*）、半角问号（?）和`$-_.+/&~@:`，不支持`“%#;!()[]^,” `。
                 * @example `/tsdf`
                 */
                Path: string;
                /**
                 * 内部跳转的查询字符串。长度为1~128个字符，支持小写字母和可见字符，不支持 `#[]{}\|<>&`。
                 * @example `quedsa`
                 */
                Query: string;
            };
            /**
             * 流量镜像。
             */
            TrafficMirrorConfig: {
                /**
                 * 流量镜像的目的，可以是服务器组
                 * @example `ForwardGroupMirror`
                 */
                TargetType: string;
                /**
                 * 流量镜像至服务器组。
                 */
                MirrorGroupConfig: {
                    /**
                     * 流量镜像至服务器组。
                     */
                    ServerGroupTuples: {
                        /**
                         * 服务器组ID。
                         * @example `sgp-00mkgijak0w4qgz9****`
                         */
                        ServerGroupId: string;
                        /**
                         * 权重。取值范围：**0**~**100**。
                         * @example `2`
                         */
                        Weight: number;
                    }[];
                };
            };
            /**
             * 流量限速。
             */
            TrafficLimitConfig: {
                /**
                 * 每秒请求次数。取值范围：**1**~**100000**。
                 * @example `4`
                 */
                QPS: number;
                /**
                 * 单IP每秒请求次数。 取值范围：**1 ~ 100000**。
                 * > 如果同时配置**QPS**参数，**PerIpQps**参数的取值必须小于**QPS**参数的取值。
                 * @example `80`
                 */
                PerIpQps: number;
            };
            /**
             * 动作类型。取值：
             * - **ForwardGroup**：转发至多个虚拟服务器组。
             * - **Redirect**：重定向。
             * - **FixedResponse**：返回固定内容。
             * - **Rewrite**：重写。
             * - **InsertHeader**：写入头字段。
             * - **RemoveHeaderConfig**：删除头字段。
             * - **TrafficLimitConfig**：流量限速。
             * - **TrafficMirrorConfig**：流量镜像。
             * - **CorsConfig**：跨域。
             * 转发规则中包括的动作类型：
             * - **FinalType**：一个转发规则的动作中仅能有一项FinalType的动作并且最后执行，只能包含一项**ForwardGroup**、**Redirect**、或**FixedResponse**。
             * - **ExtType**：一个转发规则可以有一项或多项此类**ExtType**的动作，在**FinalType**的动作之前执行，且需要与**FinalType**并存。包含多项**InsertHeader**或一项**Rewrite**。
             * @example `ForwardGroup`
             */
            Type: string;
            /**
             * 跨域。
             */
            CorsConfig: {
                /**
                 * 允许的访问来源。
                 */
                AllowOrigin: string[];
                /**
                 * 选择跨域访问时允许的HTTP方法。
                 */
                AllowMethods: string[];
                /**
                 * 允许跨域的Header列表。
                 */
                AllowHeaders: string[];
                /**
                 * 允许暴露的Header列表。
                 */
                ExposeHeaders: string[];
                /**
                 * 是否允许携带凭证信息。取值：
                 * - **on**：是。
                 * - **off**：否。
                 * @example `on`
                 */
                AllowCredentials: string;
                /**
                 * 预检请求在浏览器的最大缓存时间，单位：秒。
                 * 取值范围：**-1**~**172800**。
                 * @example `1000`
                 */
                MaxAge: number;
            };
        }[];
        /**
         * 转发规则条件列表。
         */
        RuleConditions: {
            /**
             * Cookie配置。
             */
            CookieConfig: {
                /**
                 * Cookie值。
                 */
                Values: {
                    /**
                     * Cookie键。长度为1~100个字符，支持小写字母、可见字符、星号（*）和半角问号（?），不支持空格和`#[]{}\|<>&`。
                     * @example `test`
                     */
                    Key: string;
                    /**
                     * Cookie值。长度为1~128个字符，支持小写字母、可见字符、星号（*）和半角问号（?），不支持空格和`#[]{}\|<>&`。
                     * @example `test`
                     */
                    Value: string;
                }[];
            };
            /**
             * 头字段配置。
             */
            HeaderConfig: {
                /**
                 * 头字段键。长度为1\~40个字符。支持字母a\~z、数字、短划线（-）和下划线（_）。不支持Cookie和Host。
                 * @example `Port`
                 */
                Key: string;
                /**
                 * 头字段值。
                 */
                Values: string[];
            };
            /**
             * 主机配置。
             */
            HostConfig: {
                /**
                 * 主机名。
                 */
                Values: string[];
            };
            /**
             * 请求方法配置。
             */
            MethodConfig: {
                /**
                 * 请求方法。
                 */
                Values: string[];
            };
            /**
             * 转发路径配置。
             */
            PathConfig: {
                /**
                 * 转发路径。
                 */
                Values: string[];
            };
            /**
             * 查询字符串配置。
             */
            QueryStringConfig: {
                /**
                 * 查询字符串。
                 */
                Values: {
                    /**
                     * 查询字符串键。长度为1~100个字符，支持小写字母、可见字符、星号（*）和半角问号（?），不支持空格和`#[]{}\|<>&`。
                     * @example `test`
                     */
                    Key: string;
                    /**
                     * 查询字符串值。长度为1~128个字符，支持小写字母、可见字符、星号（*）和半角问号（?），不支持空格和`#[]{}\|<>&`。
                     * @example `test`
                     */
                    Value: string;
                }[];
            };
            /**
             * 基于源IP业务流量匹配。
             */
            SourceIpConfig: {
                /**
                 * 需要匹配的源IP列表。
                 */
                Values: string[];
            };
            /**
             * 响应状态码配置。
             */
            ResponseStatusCodeConfig: {
                /**
                 * 响应状态码列表。
                 */
                Values: string[];
            };
            /**
             * 响应HTTP头部配置。
             */
            ResponseHeaderConfig: {
                /**
                 * 响应HTTP头部键。长度为1\~40个字符。支持字母a~z、数字、短划线（-）和下划线（_）。不支持Cookie和Host。
                 * @example `key`
                 */
                Key: string;
                /**
                 * 响应HTTP头部值列表。
                 */
                Values: string[];
            };
            /**
             * 转发规则类型。取值：
             * - **Host**：主机。
             * - **Path**：路径。
             * - **Header**：HTTP头字段。
             * - **QueryString**：查询字符串。
             * - **Method**：请求方法。
             * - **Cookie**：Cookie。
             * - **SourceIp**：源IP。
             * @example `Host`
             */
            Type: string;
        }[];
        /**
         * 转发规则ID。
         * @example `rule-bpn0kn908w4nbw****`
         */
        RuleId: string;
        /**
         * 转发规则名称。 长度为2~128个英文或中文字符，必须以大小字母或中文开头，可包含数字，半角句号（.），下划线（_）和短划线（-）。
         * @example `rule-instance-test`
         */
        RuleName: string;
        /**
         * 转发规则状态。取值：
         * - **Provisioning**：创建中。
         * - **Configuring**：变配中。
         * - **Available**：运行中。
         * @example `Available`
         */
        RuleStatus: string;
        /**
         * 转发规则的方向。取值：
         * * Request（默认值）：请求类型，对从客户端发送到ALB的报文进行条件匹配并进行相应的处理。
         * * Response：响应类型，对从后端服务器组返回到ALB的报文进行条件匹配并进行相应的处理。
         * > 基础版的ALB实例不支持Response类型。
         * @example `Request`
         */
        Direction: string;
        /**
         * 标签。
         */
        Tags: {
            /**
             * 标签键。最多支持128个字符，不能以aliyun或acs:开头，不能包含http://或https://。
             * @example `env`
             */
            Key: string;
            /**
             * 标签值。最多支持128个字符，不能以aliyun或acs:开头，不能包含http://或https://。
             * @example `product`
             */
            Value: string;
        }[];
    }[];
    /**
     * 本次请求条件下返回的总数据记录数。
     * @example `1000`
     */
    TotalCount: number;
}
