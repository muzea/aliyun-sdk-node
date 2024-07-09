export interface GetProvisionedProductResponse {
    /**
     * 请求ID。
     * @example `0FEEF92D-4052-5202-87D0-3D8EC16F81BF`
     */
    RequestId: string;
    /**
     * 实例详情。
     */
    ProvisionedProductDetail: {
        /**
         * 实例ID。
         * @example `pp-bp1ddg1n2a****`
         */
        ProvisionedProductId: string;
        /**
         * 实例ARN。
         * @example `acs:servicecatalog:cn-hangzhou:146611588617****:provisionedproduct/pp-bp1ddg1n2a****`
         */
        ProvisionedProductArn: string;
        /**
         * 实例名称。
         * @example `DEMO-ECS实例`
         */
        ProvisionedProductName: string;
        /**
         * 产品ID。
         * @example `prod-bp18r7q127****`
         */
        ProductId: string;
        /**
         * 产品名称。
         * @example `DEMO-创建ECS`
         */
        ProductName: string;
        /**
         * 产品版本ID。
         * @example `pv-bp15e79d26****`
         */
        ProductVersionId: string;
        /**
         * 产品版本名称。
         * @example `1.0`
         */
        ProductVersionName: string;
        /**
         * 上一次执行的任务ID。
         * @example `task-bp1dmg242c****`
         */
        LastTaskId: string;
        /**
         * 上一次执行的实例操作任务ID。
         * 实例操作包括：
         * - LaunchProduct：启动产品。
         * - UpdateProvisionedProduct：更新实例。
         * - TerminateProvisionedProduct：终止实例。
         * @example `task-bp1dmg242c****`
         */
        LastProvisioningTaskId: string;
        /**
         * 上一次成功执行的实例操作任务ID。
         * 实例操作包括：
         * - LaunchProduct：启动产品。
         * - UpdateProvisionedProduct：更新实例。
         * - TerminateProvisionedProduct：终止实例。
         * @example `task-bp1dmg242c****`
         */
        LastSuccessfulProvisioningTaskId: string;
        /**
         * 实例归属人的RAM实体类型。取值：
         * - RamUser：RAM用户。
         * - RamRole：RAM角色。
         * @example `RamUser`
         */
        OwnerPrincipalType: string;
        /**
         * 实例归属人的RAM实体ID。
         * @example `24477111603637****`
         */
        OwnerPrincipalId: string;
        /**
         * 实例状态。取值：
         * - Available：可用。
         * - UnderChange：变更中。
         * - Error：异常。
         * @example `Available`
         */
        Status: string;
        /**
         * 实例状态信息。
         * > 仅在实例状态为Error时，返回该参数。
         * @example `Resource CREATE failed: terraform stack sc-146611588617****-pp-bp1ddg1n2a**** failure...`
         */
        StatusMessage: string;
        /**
         * 实例创建时间。
         * 按照ISO8601标准表示，使用UTC时间，格式：YYYY-MM-DDThh:mm:ssZ。
         * @example `2022-05-23T09:46:27Z`
         */
        CreateTime: string;
        /**
         * 产品组合ID。
         * @example `port-bp1yt7582g****`
         */
        PortfolioId: string;
        /**
         * 阿里云资源编排服务（ROS）资源栈ID。
         * @example `137e31df-3754-40b4-be2f-c793ad84****`
         */
        StackId: string;
        /**
         * 阿里云资源编排服务（ROS）资源栈所属的地域ID。
         * @example `cn-hangzhou`
         */
        StackRegionId: string;
        /**
         * 实例类型。
         * 取值为RosStack，表示阿里云资源编排服务（ROS）的资源栈。
         * @example `RosStack`
         */
        ProvisionedProductType: string;
    };
}
