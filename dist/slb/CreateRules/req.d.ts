interface CreateRulesRequest {
    /**
    * 负载均衡实例的地域ID。
    * 您可以通过调用**DescribeRegions**接口查询地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 负载均衡实例ID。
    * @example `lb-bp1ca0zt07t934wxezyxo`
    */ "LoadBalancerId": string;
    /**
    * 负载均衡实例前端使用的监听端口。
    * 取值范围：**1~65535**。
    * @example `443`
    */ "ListenerPort": number;
    /**
    * 要添加的转发规则。一次请求中，最多可添加10条转发规则。每条转发规则包含以下参数：
    * - **RuleName**（必选）：String类型。转发规则名称，长度限制为1~40，只能使用字母、数字和-/._这些字符。同一个监听内不同规则的名称必须唯一。
    * - **Domain**（可选）： String类型。转发规则关联的请求域名。
    * - **Url**（可选）：String类型，可选，访问路径，长度限制为1~80，只能使用字母、数字和-/.%?#&amp;这些字符。
    * - **VServerGroupId**（必选）：String类型。该转发规则的目标虚拟服务器组ID。
    * Domain和Url两者必须指定一个，也可以同时指定。Domain和Url的组合在同一个监听内必须唯一。
    * @example `[{"RuleName":"Rule2","Domain":"test.com","VServerGroupId":"rsp-bp114nimo4kl9"}]`
    */ "RuleList": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
    "ListenerProtocol"?: string;
}
export { CreateRulesRequest };