export interface UpdateRuleAttributeRequest {
    /**
     * 转发规则ID。
     * @example `rule-4dp5i6ea****`
     */
    "RuleId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF3898`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会更新转发规则属性。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回`HTTP 2xx`状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 转发规则条件。
     */
    "RuleConditions"?: {
        /**
         * Cookie配置。
         */
        CookieConfig: {
            /**
             * Cookie配置。
             */
            Values: {
                /**
                 * Cookie键。长度为1~100个字符，支持小写字母、可见字符、星号（*）和半角问号（?），不支持空格和`#[]{}\|<>&`。
                 * @example `test`
                 */
                Key: string;
                /**
                 * Cookie值。长度为1~128个字符，支持小写英文字母、可见字符、星号（*）和半角问号（?），不支持空格和`#[]{}\|<>&`。
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
             * 头字段键。长度为1~40个字符，支持字母、数字、短划线（-）和下划线（_），不支持Cookie和Host。
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
         * 转发的路径配置。
         */
        PathConfig: {
            /**
             * 转发路径。
             */
            Values: string[];
        };
        /**
         * 查询字符串配置。最多支持添加20个查询字符串。
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
         * 转发规则类型。最多支持添加7个转发规则类型。取值：
         * - **Host**：主机。
         * - **Path**：路径。
         * - **Header**：HTTP头字段。
         * - **QueryString**：查询字符串。
         * - **Method**：请求方法。
         * - **Cookie**：Cookie。
         * - **SourceIp**：源IP。
         * - **ResponseHeader**：响应HTTP头字段。
         * - **ResponseStatusCode**: 响应状态码。
         * @example `Host`
         */
        Type: string;
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
         * 标头条件配置。
         */
        ResponseHeaderConfig: {
            /**
             * 头字段键。
             * - 长度为1~40个字符。
             * - 支持字母a~z、数字、短划线（-）和下划线（_）。
             * - 不支持Cookie和Host。
             * @example `test`
             */
            Key: string;
            /**
             * 头字段值。
             */
            Values: string[];
        };
        /**
         * 基于源IP业务流量匹配。最多支持添加5个基于源IP业务流量匹配。
         */
        SourceIpConfig: {
            /**
             * 添加一个或多个IP地址或者IP地址段。
             */
            Values: string[];
        };
    }[];
    /**
     * 转发规则动作列表。
     */
    "RuleActions"?: {
        /**
         * 固定响应内容配置。
         */
        FixedResponseConfig: {
            /**
             * 返回的固定内容。最大1 KB，只支持ASCII字符。
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
             * 返回的HTTP响应码，仅支持**2xx**、**4xx**、**5xx**数字型字符串，**x**为任意数字。
             * @example `200`
             */
            HttpCode: string;
        };
        /**
         * 转发组配置。
         */
        ForwardGroupConfig: {
            /**
             * 转发到的目标服务器组列表。
             */
            ServerGroupTuples: {
                /**
                 * 转发到的目的服务器组ID。
                 * @example `sg--atstuj3rtoptyui****`
                 */
                ServerGroupId: string;
                /**
                 * 权重。取值越大，权重越大，表示转发的访问请求更多。取值范围：**0**~**100**。
                 * - 目的服务器组数为1时，未指定权重时默认值为**100**。
                 * - 目的服务器组数大于1时，需要用户指定权重值。
                 * @example `30`
                 */
                Weight: number;
            }[];
            /**
             * 服务器组之间会话保持。
             */
            ServerGroupStickySession: {
                /**
                 * 是否开启会话保持。取值：
                 * - **true**：开启。
                 * - **false**（默认值）：不开启。
                 * @example `false`
                 */
                Enabled: boolean;
                /**
                 * 超时时间。单位：秒。取值范围：1~86400。
                 * @example `2`
                 */
                Timeout: number;
            };
        };
        /**
         * 写入头字段配置。
         */
        InsertHeaderConfig: {
            /**
             * 是否覆盖请求中的值。取值：
             * - **true**：是。
             * - **false**（默认值）：否。
             * @example `false`
             */
            CoverEnabled: boolean;
            /**
             * 插入的头字段名称，长度为1\~40个字符，支持大小写字母a\~z、数字、下划线（_）和短划线（-）。**InsertHeaderConfig**中的头字段名称不能重复。
             * > 不允许将头名称设置为以下字段（不区分大小写）：`slb-id`、`slb-ip`、`x-forwarded-for`、`x-forwarded-proto`、`x-forwarded-eip`、`x-forwarded-port`、`x-forwarded-client-srcport`、`connection`、`upgrade`、`content-length`、`transfer-encoding`、`keep-alive`、`te`、`host`、`cookie`、`remoteip`、`authority`。
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
             * @example `UserDefined`
             */
            Value: string;
            /**
             * 头字段内容类型。取值：
             * - **UserDefined**：您自定义头字段内容。
             * - **ReferenceHeader**：引用请求头中的某一个头字段内容。
             * - **SystemDefined**：系统定义头字段内容。
             * @example `UserDefined`
             */
            ValueType: string;
        };
        /**
         * 转发规则动作执行的顺序，取值范围：**1~50000**，按值从小到大执行动作。值不能为空，不能重复。最多支持添加20个转发规则动作执行的顺序。
         * @example `1`
         */
        Order: number;
        /**
         * 重定向配置。最多支持添加20个重定向。
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
             * - **${path}**（默认值）：可以引用**${host}**、**${protocol}**和**${port}**，每个变量最多出现一次。上述变量可以同时使用，也可以和下面罗列的可取值范围内的字符串拼接使用。
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
             * > HTTPS监听仅支持跳转HTTPS协议。
             * @example `HTTP`
             */
            Protocol: string;
            /**
             * 要跳转的查询字符串。取值：
             * - **${query}**（默认值）：可以引用**${host}**、**${protocol}**和**${port}**，每个变量最多出现一次。上述变量可以同时使用，也可以和下面罗列的可取值范围内的字符串拼接使用。
             * - 其他取值，字符集和格式限制如下：
             *     - 长度为1~128个字符。
             *     - 支持可见字符，不支持空格和 `#[]{}\|<>&`。如果是字母则必须是小写字母。
             * @example `quert`
             */
            Query: string;
        };
        /**
         * 重写配置。
         */
        RewriteConfig: {
            /**
             * 内部跳转的目的主机地址。取值：
             * - **${host}**（默认值）：该取值不支持和其他字符拼接。
             * - 其他取值，字符格式限制如下：
             *     - 主机名长度为3\~128个字符，支持小写字母a\~z、数字、短划线（-）、半角句号（.）以及通配符星号（*）和半角问号（?）。
             *     - 主机名至少包含一个半角句号（.），且半角句号（.）不能出现在开头或结尾。
             *     - 最右侧的域标签只能包含字母和通配符，不能包含数字或短划线（-）。
             *     - 短划线（-）不能出现在其它域标签的开头或结尾。通配符星号（*）和半角问号（?）可以出现在域标签的任意位置。
             * @example `www.example.com`
             */
            Host: string;
            /**
             * 要跳转的路径。取值：
             * - **${path}**（默认值）：可以引用**${host}**、**${protocol}**和**${port}**，每个变量最多出现一次。上述变量可以同时使用，也可以和下面罗列的可取值范围内的字符串拼接使用。
             * - 其他取值，字符集和格式限制如下：
             *     - 长度为1~128个字符。
             *     - 必须以正斜线（/）开头，支持字母、数字和特殊字符`$-_.+/&~@:`，不支持`“%#;!()[]^,” `，同时支持通配符星号（*）和半角问号（?）。
             * @example `/tsdf`
             */
            Path: string;
            /**
             * 内部跳转的查询字符串。取值：
             * - **${query}**（默认值）：可以引用**${host}**、**${protocol}**和**${port}**，每个变量最多出现一次。上述变量可以同时使用，也可以和下面罗列的可取值范围内的字符串拼接使用。
             * - 其他取值，字符集和格式限制如下：
             *     - 长度为1~128个字符。
             *     - 支持可见字符，不支持空格和 `#[]{}\|<>&`。如果是字母则必须是小写字母。
             * @example `quedsa`
             */
            Query: string;
        };
        /**
         * 动作类型。最多支持添加11个动作类型。取值：
         * - **ForwardGroup**：转发至多个虚拟服务器组。
         * - **Redirect**：重定向。
         * - **FixedResponse**：返回固定内容。
         * - **Rewrite**：重写。
         * - **InsertHeader**：写入头字段。
         * - **RemoveHeader**：删除头字段。
         * - **TrafficLimit**：流量限速。
         * - **TrafficMirror**：流量镜像。
         * - **Cors**：跨域。
         * 转发规则中包括的动作类型：
         * - **FinalType**：一个转发规则的动作中仅能有一项FinalType的动作并且最后执行，只能包含一项**ForwardGroup**、**Redirect**、或**FixedResponse**。
         * - **ExtType**：一个转发规则可以有一项或多项此类**ExtType**的动作，在**FinalType**的动作之前执行，且需要与**FinalType**并存。包含多项**InsertHeader**或一项**Rewrite**。
         * @example `ForwardGroup`
         */
        Type: string;
        /**
         * 流量限速。
         */
        TrafficLimitConfig: {
            /**
             * 每秒请求次数。取值范围：**1~1000000**。
             * @example `100`
             */
            QPS: number;
            /**
             * 单IP每秒请求次数。 取值范围：**1 ~ 1000000**。
             * > 如果同时配置**QPS**参数，**PerIpQps**参数的取值必须小于**QPS**参数的取值。
             * @example `80`
             */
            PerIpQps: number;
        };
        /**
         * 流量镜像。
         */
        TrafficMirrorConfig: {
            /**
             * 镜像的目标类型。取值：
             * - **ForwardGroupMirror**：表示镜像至服务器组。
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
                     * @example `srg-00mkgijak0w4qgz9****`
                     */
                    ServerGroupId: string;
                }[];
            };
        };
        /**
         * 去除HTTP头部配置。
         */
        RemoveHeaderConfig: {
            /**
             * 去除的头字段名称，长度为1~40个字符，支持大小写字母a~z、数字、下划线（_）和短划线（-）。头字段名称不能重复用于RemoveHeader中。
             * - 请求方向（Direction取值为Request）：不允许将头名称设置为以下字段（不区分大小写）：`slb-id`、`slb-ip`、`x-forwarded-for`、`x-forwarded-proto`、`x-forwarded-eip`、`x-forwarded-port`、`x-forwarded-client-srcport`、`connection`、`upgrade`、`content-length`、`transfer-encoding`、`keep-alive`、`te`、`host`、`cookie`、`remoteip`、`authority`。
             * - 响应方向（Direction取值为Response）：响应方向不允许将头名称设置为以下字段（不区分大小写）：`connection`、`upgrade`、`content-length`、`transfer-encoding`。
             * @example `test`
             */
            Key: string;
        };
        /**
         * 跨域。
         */
        CorsConfig: {
            /**
             * 允许的访问来源列表。支持只配置一个元素`*`，或配置一个或多个值。
             * - 单个值必须以`http://`或者`https://`开头，后边加一个正确的域名或一级泛域名。（例：`http://*.test.abc.example.com`）
             * - 单个值可以不加端口，也可以指定端口，端口范围：**1**~**65535**。
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
     * 转发规则名称。 长度为2~128个英文或中文字符，必须以大小字母或中文开头，可包含数字，半角句号（.），下划线（_）和短划线（-）。
     * @example `rule-instance-test`
     */
    "RuleName"?: string;
    /**
     * 规则优先级，取值范围：**1~10000**。值越小表示优先级越高。
     * > 同一个监听内规则优先级必须唯一。
     * @example `10`
     */
    "Priority"?: number;
}
