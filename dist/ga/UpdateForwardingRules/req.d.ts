export interface UpdateForwardingRulesRequest {
    /**
     * 全球加速实例所属的地域ID，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `02fb3da4****`
     */
    "ClientToken"?: string;
    /**
     * 全球加速实例ID。
     * @example `ga-bp17frjjh0udz4q****`
     */
    "AcceleratorId": string;
    /**
     * 监听ID。
     * @example `lsr-bp1s0vzbi5bxlx5****`
     */
    "ListenerId": string;
    /**
     * 转发策略配置信息列表。
     * @example `test`
     */
    "ForwardingRules": {
        /**
         * 转发策略优先级。取值范围：**1**~**10000**。值越小表示优先级越高。
         * @example `1000`
         */
        Priority: number;
        /**
         * 转发条件列表。
         */
        RuleConditions: {
            /**
             * 转发条件类型。取值：
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
             * 根据**RuleConditionType**传入不同的JSON字符串值。
             * - 当**RuleConditionType**取值为**Host**时，该参数为域名条件配置信息。一个转发策略内只允许创建一个域名类型转发规则，该转发规则内支持配置多个域名，多个域名间为“或”关系。域名长度为3~128个字符，允许包含字母、数字、短划线（-）和半角句号（.），支持使用星号（*）和半角问号（?）作为通配符。取值样例为`["www.example.com", "www.aliyun.com"]`。
             * - 当**RuleConditionType**取值为**Path**时，该参数为路径条件配置信息。一个转发策略内允许创建多个路径类型转发规则，多个路径类型转发规则间为”或“关系，一个转发路径类型规则内支持配置多个路径，多个路径间为“或”关系。路径长度为1~128个字符，必须以正斜线（/）开头，只允许包含字母、数字、美元符号（$）、短划线（-）、下划线（_）、半角句号（.）、加号（+）、正斜线（/）、and（&）、波浪线（~）、at（@）、半角冒号（:）、撇号（'），支持使用星号（*）和半角问号（?）作为通配符。取值样例为`["/a", "/b/"]`。
             * - 当**RuleConditionType**取值为**RequestHeader**时，该参数为HTTP标头字段条件配置信息，由键（Key）和值（Value）组成。同一个转发规则条件内标头字段值不能重复。取值样例为`[{"header1":["value1","value2"]}]`。
             *     - Key：HTTP标头的键值长度为1~40个字符，支持字母、数字、短划线（-）和下划线（_）。
             *     - Value：HTTP标头的值长度为1~128个字符，支持ASCII码值`ch >= 32 && ch < 127`范围内可打印字符，开头和结尾不能为空格。
             * - 当**RuleConditionType**取值为**Query**时，该参数为查询字符串条件配置信息，由键（Key）和值（Value）组成。取值样例为`[{"query1":["value1"]}, {"query2":["value2"]}]`。
             *     - Key：HTTP标头的键值长度为1~100个字符，支持ASCII码值`ch >= 32 && ch < 127`范围内可打印字符，如果是字母必须为小写字母，不支持空格和`[]{}<>\;/?:@&=+,$%|"^~`。
             *     - Value：HTTP标头的值长度为1~128个字符，支持ASCII码值`ch >= 32 && ch < 127`范围内可打印字符，如果是字母必须为小写字母，不支持空格和`[]{}<>\;/?:@&=+,$%|"^~`。
             * - 当**RuleConditionType**取值为**Method**时，该参数为请求方法配置信息。取值范围为**HEAD**、**GET**、**POST**、**OPTIONS**、**PUT**、**PATCH**、**DELETE**。取值样例为`["GET", "OPTIONS", "POST"]`。
             * - 当**RuleConditionType**取值为**Cookie**时，该参数为Cookie配置信息，由键（Key）和值（Value）组成。取值样例为`[{"cookie1":["value1"]}, {"cookie2":["value2"]}]`
             *     - Key：Cookie的键值长度为1~100个字符，支持ASCII码值`ch >= 32 && ch < 127`范围内可打印字符，如果是字母必须为小写字母，不支持空格和`#[]{}\|<>&`。
             *     - Value：Cookie的值长度为1~128个字符，支持ASCII码值`ch >= 32 && ch < 127`范围内可打印字符，如果是字母必须为小写字母，不支持空格和`#[]{}\|<>&`。
             * - 当**RuleConditionType**取值为**SourceIP**时，该参数为源IP配置信息，支持IP地址，例如1.1.XX.XX/32，或IP地址段，例如2.2.XX.XX/24。一个转发规则只允许创建一个源IP规则，该转发规则内支持配置多个源IP，多个IP之间为“或”关系。取值样例为`["1.1.XX.XX/32", "2.2.XX.XX/24"]`。
             * @example `["www.example.com", "www.aliyun.com"]`
             */
            RuleConditionValue: string;
            /**
             * 路径配置信息。
             * > 不推荐使用该参数，建议直接使用**RuleConditionType**和**RuleConditionValue**配置转发条件。
             */
            PathConfig: {
                /**
                 * 路径配置信息。
                 * > 不推荐使用该参数，建议直接使用**RuleConditionType**和**RuleConditionValue**配置转发条件。
                 */
                Values: string[];
            };
            /**
             * 域名配置信息。
             * > 不推荐使用该参数，建议直接使用**RuleConditionType**和**RuleConditionValue**配置转发条件。
             */
            HostConfig: {
                /**
                 * 域名配置信息。
                 * > 不推荐使用该参数，建议直接使用**RuleConditionType**和**RuleConditionValue**配置转发条件。
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
             * > 当前无实际意义，无需配置。
             * @example `20`
             */
            Order: number;
            /**
             * 转发动作类型。取值：
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
             * 根据**RuleActionType**传入不同的JSON字符串值。
             * 一个转发规则最多只能有一条**ForwardGroup**、**Redirect**、**FixResponse**类型的转发动作。**Rewrite**、**AddHeader**、**RemoveHeader**类型的转发动作顺序必须在**ForwardGroup**类型的转发动作之前。
             * - 当**RuleActionType**取值为**ForwardGroup**时，该参数为虚拟终端节点组信息。仅支持转发至一个虚拟终端节点组。取值样例为`{"type":"endpointgroup", "value":"epg-bp1enpdcrqhl78g6r****"}`，其中：
             *     - `type`：取值为`endpointgroup`。
             *     - `value`：目标虚拟终端节点组ID。
             * - 当**RuleActionType**取值为**Redirect**时，该参数为重定向配置信息。**Redirect**类型的转发动作中`protocol`、`domain`、`port`、`path`、`query`不能全部为空或者默认值。取值样例为`{"protocol":"HTTP", "domain":"www.example.com", "port":"80", "path":"/a","query":"value1", "code":"301" }`，其中：
             *     - `protocol`：要跳转的协议。取值范围为`${protocol}`（默认值）、`HTTP`、`HTTPS`。
             *     - `domain`：要跳转的域名。默认值为`${host}`（默认值），您还可以输入其他域名信息，域名长度为3~128个字符，只允许包含小写字母、数字和特殊字符`.-?=~_-+/^*!$&|()[]`。
             *     - `port`：要跳转的端口。默认值为`${port}`，您还可以输入端口号，端口取值范围为1~63335。
             *     - `path`：要跳转的路径。默认值为`${path}`，路径长度限制为1~128个字符。正则表达式类型的路径，必须以波浪线（~）开头，支持的大小写字母、数字和特殊字符`.-_/=?~^*$:()[]+|`；非正则表达式类型的路径，必须以正斜线（/） 开头，支持大小写字母、数字和特殊字符`.-_/=?:`。
             *     - `query`：要跳转的查询字符串。默认值为`${query}`，您还可以输入其他查询字符串信息，查询字符串长度为1~128个字符，支持ASCII码值`ch >= 32 && ch < 127`范围内可打印字符，如果是字母必须为小写字母，不支持空格和特殊字符`[]{}<>\#|&`。
             *     - `code`：跳转方式。支持`301`、`302`、`303`、`307`或`308`。
             * - 当**RuleActionType**取值为**FixResponse**时，该参数为返回固定响应配置信息。取值样例为`{"code":"200", "type":"text/plain", "content":"dssacav" }`，其中：
             *     - `code`：响应状态码。仅支持`2xx`、`4xx`、`5xx`数字型字符串，`x`为任意数字。
             *     - `type`：响应正文类型。仅支持**text/plain**, **text/css**, **text/html**, **application/javascript**, **application/json**。
             *     - `content`：响应正文。响应正文长度不能超过1000个字符，不支持中文字符。
             * - 当**RuleActionType**取值为**AddHeader**时，该参数为插入HTTP标头字段配置信息。转发规则中存在**AddHeader**类型的转发动作，必须同时配置一条**ForwardGroup**类型的转发动作。取值样例为`[{"name":"header1","type":"userdefined", "value":"value"}]`，其中：
             *     - `name`：HTTP标头字段名称。名称长度为1~40字符，支持大小写字母、数字、短划线（-）和下划线（_）。**AddHeader**中的HTTP标头字段名称不能重复，也不能和**RemoveHeader**中的HTTP标头字段名称重复。
             *     - `type`：HTTP标头字段内容类型。取值范围为`user-defined`（用户指定）、`ref`（引用）、`system-defined`（系统定义）。
             *     - `value`：HTTP标头字段内容，内容不能为空。`type`为`user-defined`（用户指定）时，长度为1~128个字符，支持ASCII码值`ch >= 32 && ch < 127`范围内的可打印字符，支持大小写字母、数字、短划线（-）和下划线（_），开头和结尾不能为空格；`type`为`ref`（引用）时，长度为1~128个字符，支持大小写字母、数字、短划线（-）和下划线（_），开头和结尾不能为空格；`type`为`system-defined`（系统定义）时，仅支持取值为`ClientSrcIp`。
             * - 当**RuleActionType**取值为**RemoveHeader**时，该参数为删除HTTP标头字段信息。转发规则中存在**RemoveHeader**类型的转发动作，必须同时配置一条**ForwardGroup**类型的转发动作。长度为1~40字符，支持大小写字母、数字、短划线（-）和下划线（_）。取值样例为`["header1"]`。
             * - 当**RuleActionType**取值为**Rewrite**时，该参数为重写配置信息。转发规则中存在**Rewrite**类型的转发动作，必须同时配置一条**ForwardGroup**类型的转发动作。取值样例为`{"domain":"value1", "path":"value2", "query":"value3"}`，其中：
             *     - `domain`：要跳转的域名。默认值为`${host}`，您还可以输入其他域名信息，域名长度为3~128个字符，只允许包含小写字母、数字和特殊字符`.-?=~_-+/^*!$&|()[]`。
             *     - `path`：要跳转的路径。默认值为`${path}`，路径长度限制为1~128个字符。正则表达式类型的路径，必须以波浪线（~）开头，支持的大小写字母、数字和特殊字符`.-_/=?~^*$:()[]+|`；非正则表达式类型的路径，必须以正斜线（/） 开头，支持大小写字母、数字和特殊字符`.-_/=?:`。
             *     - `query`：要跳转的查询字符串。默认值为`${query}`，您还可以输入其他查询字符串信息，查询字符串长度为1~128个字符，支持ASCII码值`ch >= 32 && ch < 127`范围内可打印字符，如果是字母必须为小写字母，不支持空格和特殊字符`[]{}<>\#|&`。
             * @example `[{"type":"endpointgroup", "value":"epg-bp1enpdcrqhl78g6r****"}]`
             */
            RuleActionValue: string;
            /**
             * 转发配置。
             * > 不推荐使用该参数，建议直接使用**RuleActionType**和**RuleActionValue**配置转发动作。
             */
            ForwardGroupConfig: {
                /**
                 * 终端节点组配置。
                 * > 不推荐使用该参数，建议直接使用**RuleActionType**和**RuleActionValue**配置转发动作。
                 */
                ServerGroupTuples: {
                    /**
                     * 终端节点组ID。
                     * > 不推荐使用该参数，建议直接使用**RuleActionType**和**RuleActionValue**配置转发动作。
                     * @example `epg-bp1ieei9664r5nv****`
                     */
                    EndpointGroupId: string;
                }[];
            };
        }[];
        /**
         * 转发策略ID。
         * @example `frule-bp1dii16gu9qdvb34****`
         */
        ForwardingRuleId: string;
        /**
         * 转发策略名称。
         * 名称长度为2~128个英文或中文字符，必须以大小写字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
         * @example `test`
         */
        ForwardingRuleName: string;
        /**
         * 规则生效方向。无需配置。
         * 目前默认为**request**，表示请求方向生效。
         * @example `request`
         */
        RuleDirection: string;
    }[];
}
