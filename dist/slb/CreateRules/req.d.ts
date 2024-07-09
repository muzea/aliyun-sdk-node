export interface CreateRulesRequest {
    /**
     * 负载均衡实例的地域ID。
     * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 负载均衡实例ID。
     * @example `lb-bp1ca0zt07t934w******`
     */
    "LoadBalancerId": string;
    /**
     * 负载均衡实例前端使用的监听端口。
     * 取值范围：**1~65535**。
     * @example `443`
     */
    "ListenerPort": number;
    /**
     * 负载均衡实例前端使用的协议。
     * > 相同端口存在不同协议监听时，此字段必选。
     * @example `https`
     */
    "ListenerProtocol"?: string;
    /**
     * 要添加的转发规则。一次请求中，最多可添加10条转发规则。每条转发规则包含以下参数：
     * - **RuleName**（必选）：String类型。转发规则名称，长度为1~40个字符，支持字母、数字、短划线（-）、正斜线（/）、半角句号（.）和下划线（_）这些字符。同一个监听内不同规则的名称必须唯一。
     * - **Domain**（可选）： String类型。转发规则关联的请求域名，与**Url**参数至少选择一个。
     * - **Url**（可选）：String类型，可选，访问路径，长度限制为1~80个字符，只能使用字母、数字和短划线（-）、正斜线（/）、半角句号（.）、百分号（%）、问号（?）、井号（#）和and（&amp;）这些字符。 URL不能只为正斜线（/），但必须以正斜线（/）开头，与**Domain**参数至少选择一个。
     * - **VServerGroupId**（必选）：String类型。该转发规则的目标虚拟服务器组ID。
     * > `Domain`和`Url`两者必须指定一个，也可以同时指定。`Domain`和`Url`的组合在同一个监听内必须唯一。
     * @example `[{"RuleName":"Rule2","Domain":"test.com","VServerGroupId":"rsp-bp114ni******"}]`
     */
    "RuleList": string;
}
