export interface ListProvisionedProductPlansResponse {
    /**
     * 请求ID。
     * @example `0FEEF92D-4052-5202-87D0-3D8EC16F****`
     */
    RequestId: string;
    /**
     * 计划列表。
     */
    PlanDetails: {
        /**
         * 计划ID。
         * @example `plan-bp18mmdh2u****`
         */
        PlanId: string;
        /**
         * 计划名称。
         * @example `DEMO-创建ECS-637****`
         */
        PlanName: string;
        /**
         * 计划类型。
         * 取值为Ros，表示阿里云资源编排服务（ROS）。
         * @example `Ros`
         */
        PlanType: string;
        /**
         * 产品组合ID。
         * @example `port-bp1438kf2j****`
         */
        PortfolioId: string;
        /**
         * 产品ID。
         * @example `prod-bp1rtrnh2c****`
         */
        ProductId: string;
        /**
         * 产品版本ID。
         * @example `pv-bp19udk22v****`
         */
        ProductVersionId: string;
        /**
         * 实例ID。
         * @example `pp-bp1c35162d****`
         */
        ProvisionedProductId: string;
        /**
         * 用户输入的模板参数。
         */
        Parameters: {
            /**
             * 模板中定义的参数名称。
             * @example `role_name`
             */
            ParameterKey: string;
            /**
             * 用户输入的模板参数值。
             * @example `Test-8`
             */
            ParameterValue: string;
        }[];
        /**
         * 实例名称。
         * @example `rds-MYSQL-875****`
         */
        ProvisionedProductName: string;
        /**
         * 阿里云资源编排服务（ROS）资源栈ID。
         * @example `2599090a-309e-4306-b989-17ba66a9****`
         */
        StackId: string;
        /**
         * 阿里云资源编排服务（ROS）资源栈所属的地域ID。
         * @example `cn-hangzhou`
         */
        StackRegionId: string;
        /**
         * 计划状态。取值：
         * - PreviewInProgress：预检中。
         * - PreviewSuccess：预检成功。
         * - PreviewFailed：预检失败。
         * - ApplicationInProgress：审批中。
         * - ApplicationApproved：审批通过。
         * - ApplicationRejected：审批被拒绝。
         * - ExecuteInProgress：执行中。
         * - ExecuteSuccess：执行成功。
         * - ExecuteFailed：执行失败。
         * - Canceled：已取消。
         * @example `PreviewSuccess`
         */
        Status: string;
        /**
         * 计划状态信息。
         * > 仅在计划状态为PreviewFailed或ExecuteFailed时，返回该参数。
         * @example `Create stack failed: Resource CREATE failed: terraform stack sc-146611588617****-pp-bp1ddg1n2a**** failure...`
         */
        StatusMessage: string;
        /**
         * 计划创建时间。
         * 按照ISO8601标准表示，使用UTC时间，格式：YYYY-MM-DDThh:mm:ssZ。
         * @example `2022-09-13T02:01:22Z`
         */
        CreateTime: string;
        /**
         * 计划最后更新时间。
         * 按照ISO8601标准表示，使用UTC时间，格式：YYYY-MM-DDThh:mm:ssZ。
         * @example `2022-07-18T06:02:35.075Z`
         */
        UpdateTime: string;
        /**
         * 用户自定义标签列表。
         */
        Tags: {
            /**
             * 用户自定义标签键。
             * @example `k1`
             */
            Key: string;
            /**
             * 用户自定义标签值。
             * @example `v1`
             */
            Value: string;
        }[];
        /**
         * 计划操作类型。取值：
         * - LaunchProduct（默认）：启动产品。
         * - UpdateProvisionedProduct：更新实例。
         * - TerminateProvisionedProduct：终止实例。
         * @example `LaunchProduct`
         */
        OperationType: string;
        /**
         * 计划审批人列表。
         */
        AssignedApprovers: {
            /**
             * 计划审批人的RAM实体类型。取值：
             * - RamUser：RAM用户。
             * - RamRole：RAM角色。
             * @example `RamUser`
             */
            PrincipalType: string;
            /**
             * 计划审批人的RAM实体名称。
             * @example `endUser`
             */
            PrincipalName: string;
        }[];
        /**
         * 产品名称。
         * @example `创建ECS`
         */
        ProductName: string;
        /**
         * 计划描述。
         * @example `开发团队使用`
         */
        Description: string;
        /**
         * 计划归属人的RAM实体类型。取值：
         * - RamUser：RAM用户。
         * - RamRole：RAM角色。
         * @example `RamUser`
         */
        OwnerPrincipalType: string;
        /**
         * 计划归属人的RAM实体ID。
         * @example `24477111603637****
        `
         */
        OwnerPrincipalId: string;
        /**
         * 计划归属人的RAM实体名称。
         * @example `enduser`
         */
        OwnerPrincipalName: string;
        /**
         * 计划归属人的云账号ID。
         * @example `146611588617****`
         */
        Uid: string;
    }[];
    /**
     * 总记录数。
     * @example `16`
     */
    TotalCount: number;
    /**
     * 页码。
     * 起始值：1。默认值：1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页时每页显示的数据行数。
     * 取值范围：1~100。起始值：1。默认值：10。
     * @example `10`
     */
    PageSize: number;
}
