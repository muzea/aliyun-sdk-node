export interface ListAsynJobsRequest {
    /**
     * 任务ID列表。
     */
    "JobIds"?: string[];
    /**
     * 关联的资源类型。取值：
     * - **loadbalancer**：应用型负载均衡实例。
     * - **listener**：监听。
     * - **rule**：转发规则。
     * - **acl**：访问控制。
     * - **securitypolicy**：安全策略。
     * - **servergroup**：服务器组。
     * @example `loadbalancer`
     */
    "ResourceType"?: string;
    /**
     * 资源实例ID列表。
     */
    "ResourceIds"?: string[];
    /**
     * 操作接口名称。
     * @example `CreateLoadBalancer`
     */
    "ApiName"?: string;
    /**
     * 任务开始时间戳。单位：毫秒。
     * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至开始查询异步任务状态时的总时长。
     * @example `2134663231234`
     */
    "BeginTime"?: number;
    /**
     * 任务结束时间戳。单位：毫秒。
     * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至查询异步任务状态结束时的总时长。
     * @example `2144663233315`
     */
    "EndTime"?: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**，默认值：**20**。
     * @example `20`
     */
    "MaxResults"?: number;
}
