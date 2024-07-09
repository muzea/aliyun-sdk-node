export interface GetProvisionedProductPlanResponse {
    /**
     * 请求ID。
     * @example `0FEEF92D-4052-5202-87D0-3D8EC16F81BF`
     */
    RequestId: string;
    /**
     * 计划详情。
     */
    PlanDetail: {
        /**
         * 计划ID。
         * @example `plan-bp1jvmdk2k****`
         */
        PlanId: string;
        /**
         * 计划名称。
         * @example `DEMO-ECS实例`
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
         * @example `port-bp1yt7582g****`
         */
        PortfolioId: string;
        /**
         * 产品ID。
         * @example `prod-bp18r7q127****`
         */
        ProductId: string;
        /**
         * 产品版本ID。
         * @example `pv-bp15e79d26****`
         */
        ProductVersionId: string;
        /**
         * 实例ID。
         * @example `pp-bp1ddg1n2a****`
         */
        ProvisionedProductId: string;
        /**
         * 实例名称。
         * @example `DEMO-ECS实例`
         */
        ProvisionedProductName: string;
        /**
         * 用户输入的模板参数。
         */
        Parameters: {
            /**
             * 模板中定义的参数名称。
             * @example `instance_type`
             */
            ParameterKey: string;
            /**
             * 用户输入的模板参数值。
             * @example `ecs.s6-c1m1.small`
             */
            ParameterValue: string;
        }[];
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
         * @example `2022-05-23T09:46:27Z`
         */
        CreateTime: string;
        /**
         * 计划最后更新时间。
         * 按照ISO8601标准表示，使用UTC时间，格式：YYYY-MM-DDThh:mm:ssZ。
         * @example `2022-05-23T09:47:29Z`
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
         * - LaunchProduct：启动产品。
         * - UpdateProvisionedProduct：更新实例。
         * - TerminateProvisionedProduct：终止实例。
         * @example `LaunchProduct`
         */
        OperationType: string;
        /**
         * 计划描述。
         * @example `创建ECS。`
         */
        Description: string;
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
             * @example `approver`
             */
            PrincipalName: string;
        }[];
        /**
         * 计划归属人的RAM实体类型。取值：
         * - RamUser：RAM用户。
         * - RamRole：RAM角色。
         * @example `RamUser`
         */
        OwnerPrincipalType: string;
        /**
         * 计划归属人的RAM实体ID。
         * @example `27740196382623****`
         */
        OwnerPrincipalId: string;
        /**
         * 计划审批详情。
         */
        ApprovalDetail: {
            /**
             * 操作记录。
             */
            OperationRecords: {
                /**
                 * 已对计划进行操作的RAM实体。
                 */
                Operator: {
                    /**
                     * RAM实体类型。取值：
                     * - RamUser：RAM用户。
                     * - RamRole：RAM角色。
                     * @example `RamUser`
                     */
                    PrincipalType: string;
                    /**
                     * RAM实体ID。
                     * @example `277401963826235***
                    `
                     */
                    PrincipalId: string;
                    /**
                     * 操作人的RAM实体名称。
                     * @example `approver`
                     */
                    PrincipalName: string;
                };
                /**
                 * 操作人的审批附加意见。
                 * @example `同意。`
                 */
                Comment: string;
                /**
                 * 操作时间。
                 * @example `2022-03-22T05:56:14Z`
                 */
                CreateTime: string;
                /**
                 * 操作人对计划进行的操作类型。取值：
                 * - Submit：提交计划。
                 * - Cancel：取消计划。
                 * - Approve：审批通过。
                 * - Reject：审批拒绝。
                 * @example `Approve`
                 */
                ApprovalAction: string;
            }[];
            /**
             * 计划正在执行的操作。
             */
            TodoTaskActivities: {
                /**
                 * 计划正在执行的操作名。
                 * @example `ApproverNode-1`
                 */
                ActivityName: string;
                /**
                 * 委派任务列表。
                 */
                Tasks: {
                    /**
                     * 可对计划进行操作的RAM实体。
                     */
                    Operator: {
                        /**
                         * RAM实体类型。取值：
                         * - RamUser：RAM用户。
                         * - RamRole：RAM角色。
                         * @example `RamUser`
                         */
                        PrincipalType: string;
                        /**
                         * RAM实体名称。
                         * @example `approver`
                         */
                        PrincipalName: string;
                    };
                }[];
            }[];
        };
        /**
         * 计划归属人的RAM实体名称。
         * @example `endUser`
         */
        OwnerPrincipalName: string;
        /**
         * 计划归属人的云账号ID。
         * @example `146611588617****`
         */
        Uid: string;
    };
    /**
     * 计划产品详情。
     */
    ProductDetail: {
        /**
         * 产品ARN。
         * @example `acs:servicecatalog:cn-hangzhou:146611588617****:product/prod-bp18r7q127****`
         */
        ProductArn: string;
        /**
         * 产品描述。
         * @example `这是一个产品描述`
         */
        Description: string;
        /**
         * 创建时间。
         * 按照ISO8601标准表示，使用UTC时间，格式：YYYY-MM-DDThh:mm:ssZ。
         * @example `2022-04-12T06:10:37Z`
         */
        CreateTime: string;
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
         * 产品提供者。
         * @example `IT团队`
         */
        ProviderName: string;
        /**
         * 产品类型。
         * 取值为Ros，表示阿里云资源编排服务（ROS）。
         * @example `Ros`
         */
        ProductType: string;
    };
    /**
     * 计划资源变更列表。
     */
    ResourceChanges: {
        /**
         * 资源逻辑ID。
         * @example `instance`
         */
        LogicalResourceId: string;
        /**
         * 资源物理ID。
         * > 当Action为Modify或Remove时，返回本参数。
         * @example `i-bp13lmam3qd9q6il****`
         */
        PhysicalResourceId: string;
        /**
         * 模板是否为替换更新。取值：
         * - True：替换更新。
         * - False：修改更新。
         * - Conditional：可能是替换更新，模板运行时才能确定。
         * > 当Action为Modify时，返回本参数。
         * @example `True`
         */
        Replacement: string;
        /**
         * 资源类型。
         * @example `alicloud_instance
        `
         */
        ResourceType: string;
        /**
         * 资源行为。取值：
         * - Add：增加资源。
         * - Modify：修改资源。
         * - Remove：删除资源。
         * - None：无变化。
         * @example `Add`
         */
        Action: string;
    }[];
    /**
     * 产品版本详情。
     */
    ProductVersionDetail: {
        /**
         * 是否启用。取值：
         * - true（默认值）：启用。
         * - false：禁用。
         * @example `true`
         */
        Active: boolean;
        /**
         * 产品版本描述。
         * @example `这是一个产品版本描述`
         */
        Description: string;
        /**
         * 产品版本创建时间。
         * 按照ISO8601标准表示，使用UTC时间，格式：YYYY-MM-DDThh:mm:ssZ。
         * @example `2022-04-12T06:10:37Z`
         */
        CreateTime: string;
        /**
         * 推荐信息。取值：
         * - Default（默认值）：无。
         * - Recommended：稳定版。
         * - Latest：最新版。
         * - Deprecated：将废弃。
         * @example `Default`
         */
        Guidance: string;
        /**
         * 产品版本ID。
         * @example `pv-bp15e79d26****`
         */
        ProductVersionId: string;
        /**
         * 产品版本名称。
         * @example `1.0.0`
         */
        ProductVersionName: string;
        /**
         * 产品版本所属的产品ID。
         * @example `prod-bp18r7q127****`
         */
        ProductId: string;
        /**
         * 模板的URL地址。
         * @example `oss://servicecatalog-cn-hangzhou/146611588617****​/terraform/template/tpl-bp1217we23****​/template.json`
         */
        TemplateUrl: string;
        /**
         * 模板类型。
         * 取值为RosTerraformTemplate，表示阿里云资源编排服务（ROS）支持的Terraform模板。
         * @example `RosTerraformTemplate`
         */
        TemplateType: string;
    };
}
