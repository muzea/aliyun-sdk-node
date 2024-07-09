export interface ListStackOperationRisksResponse {
    /**
     * 请求ID。
     * @example `72108E7A-E874-4A5E-B22C-A61E94AD12CD`
     */
    RequestId: string;
    /**
     * 风险信息。
     */
    RiskResources: {
        /**
         * 资源逻辑ID，即模板定义的资源名称。
         * @example `MySG`
         */
        LogicalResourceId: string;
        /**
         * 资源物理ID，即实际的资源ID。
         * @example `sg-bp1dpioafqphedg9****`
         */
        PhysicalResourceId: string;
        /**
         * 对资源进行风险检测失败时的请求ID。
         * > 当风险检测正常时，不返回该参数。
         * @example `DF4296CF-F45F-4845-A72B-BE617601DB25`
         */
        RequestId: string;
        /**
         * 资源类型。
         * @example `ALIYUN::ECS::SecurityGroup`
         */
        ResourceType: string;
        /**
         * 对资源进行风险检测失败时的错误码。
         * > 当风险检测正常时，不返回该参数。
         * @example `NoPermission`
         */
        Code: string;
        /**
         * 对资源进行风险检测失败时的错误信息。
         * > 当风险检测正常时，不返回该参数。
         * @example `You are not authorized to complete this action.`
         */
        Message: string;
        /**
         * 风险类型。取值：
         * - Referenced：当前资源被其他资源引用。
         * - MaybeReferenced：当前资源可能被其他资源引用。
         * - AdditionalRiskCheckRequired：嵌套资源栈需要额外进行风险检测。
         * - OperationIgnored：当前操作对当前资源不生效。
         * @example `Referenced`
         */
        RiskType: string;
        /**
         * 风险原因。
         * @example `There are some ECS instances (i-bp18el96s4wq635e****) depending on the security group.`
         */
        Reason: string;
    }[];
    /**
     * 调用者所属账号缺少的资源操作列表。
     */
    MissingPolicyActions: string[];
}
