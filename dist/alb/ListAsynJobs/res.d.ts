export interface ListAsynJobsResponse {
    /**
     * 任务列表。
     */
    Jobs: {
        /**
         * 操作接口名称。
         * @example `CreateLoadBalancer`
         */
        ApiName: string;
        /**
         * 任务开始时间戳。单位：毫秒。
         * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至开始查询异步任务状态时的总时长。
         * @example `2134663231234`
         */
        CreateTime: number;
        /**
         * 如果**Status**为失败，则为错误码。
         * @example `506`
         */
        ErrorCode: string;
        /**
         * 如果**Status**为失败，则为错误信息。
         * @example `AllocateEipAddress Failed`
         */
        ErrorMessage: string;
        /**
         * 任务ID。
         * @example `365F4154-92F6-4AE4-92F8-7FF34B5****`
         */
        Id: string;
        /**
         * 任务结束时间戳。单位：毫秒。
         * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至查询异步任务状态结束时的总时长。
         * @example `2144663233315`
         */
        ModifyTime: number;
        /**
         * 操作类型，取值：
         * - **Create**：创建。
         * - **Update**：修改。
         * - **Delete**： 删除。
         * @example `Create`
         */
        OperateType: string;
        /**
         * 关联的资源实例ID。
         * @example `alb-o8mszt95oamfjy****`
         */
        ResourceId: string;
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
        ResourceType: string;
        /**
         * 任务状态，取值：
         * - **Succeeded**：成功。
         * - **Failed**：失败。
         * - **Processing**：执行。
         * @example `Succeeded`
         */
        Status: string;
    }[];
    /**
     * 分批次查询时每次显示的条目数。
     * @example `10`
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
     * @example `365F4154-92F6-4AE4-92F8-7FF3******`
     */
    RequestId: string;
    /**
     * 列表条目数。
     * @example `1000`
     */
    TotalCount: number;
}
