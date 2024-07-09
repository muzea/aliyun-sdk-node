export interface ListRulesRequest {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 本次读取的最大数据记录数。
     * 取值：**1~100**。
     * 默认值：**20**，表示用户没有传入数据。
     * > 此参数为可选。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 转发规则列表，一次最多支持查询20个转发规则。
     */
    "RuleIds"?: string[];
    /**
     * 监听ID列表。
     */
    "ListenerIds"?: string[];
    /**
     * 负载均衡实例ID列表。
     */
    "LoadBalancerIds"?: string[];
    /**
     * 转发规则的方向。取值：
     * - **Request**（默认值）：请求类型，对从客户端发送到ALB的报文进行条件匹配并进行相应的处理。
     * - **Response**：响应类型，对从后端服务器组返回到ALB的报文进行条件匹配并进行相应的处理。
     * >基础版的ALB实例不支持Response类型.
     * @example `Request`
     */
    "Direction"?: string;
    /**
     * 标签。
     */
    "Tag"?: {
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
}
