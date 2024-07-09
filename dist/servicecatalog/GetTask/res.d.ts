export interface GetTaskResponse {
    /**
     * 请求ID。
     * @example `0FEEF92D-4052-5202-87D0-3D8EC16F81BF`
     */
    RequestId: string;
    /**
     * 任务详情。
     */
    TaskDetail: {
        /**
         * 任务ID。
         * @example `task-bp1dmg242c****`
         */
        TaskId: string;
        /**
         * 任务类型。取值：
         * - LaunchProduct：启动产品。
         * - UpdateProvisionedProduct：更新实例。
         * - TerminateProvisionedProduct：终止实例。
         * @example `LaunchProduct`
         */
        TaskType: string;
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
         * 模板的输出值。
         */
        Outputs: {
            /**
             * 模板中定义的输出值名称。
             * @example `instance_id`
             */
            OutputKey: string;
            /**
             * 模板中定义的输出值的内容。
             * @example `i-xxxxxx`
             */
            OutputValue: string;
            /**
             * 模板中定义的输出值的描述。
             * @example `The ECS instance ID.`
             */
            Description: string;
        }[];
        /**
         * 实例相关输出日志。
         */
        Log: {
            /**
             * Terraform输出日志。
             */
            TerraformLogs: {
                /**
                 * 执行的Terraform命令名称。取值：
                 * - apply
                 * - plan
                 * - destroy
                 * - version
                 * 关于命令含义的更多信息，请参见[Command](https://www.terraform.io/cli/commands)。
                 * @example `apply`
                 */
                Command: string;
                /**
                 * 输出流。取值：
                 * - stdout：标准输出。
                 * - stderr：标准错误输出。
                 * @example `stdout`
                 */
                Stream: string;
                /**
                 * 当前命令在当前输出流中输出的内容。
                 * @example `Apply complete! Resources: 42 added, 0 changed, 0 destroyed.`
                 */
                Content: string;
            }[];
        };
        /**
         * 任务状态。取值：
         * - Succeeded：成功。
         * - InProgress：运行中。
         * - Failed：失败。
         * @example `Succeeded`
         */
        Status: string;
        /**
         * 任务状态信息。
         * > 仅在任务状态为Failed时，返回该参数。
         * @example `Resource CREATE failed: terraform stack sc-146611588617****-pp-bp1ddg1n2a**** failure...`
         */
        StatusMessage: string;
        /**
         * 任务创建时间。
         * 按照ISO8601标准表示，使用UTC时间，格式：YYYY-MM-DDThh:mm:ssZ。
         * @example `2022-05-23T09:46:27Z`
         */
        CreateTime: string;
        /**
         * 任务最后更新时间。
         * 按照ISO8601标准表示，使用UTC时间，格式：YYYY-MM-DDThh:mm:ssZ。
         * @example `2022-05-23T09:47:29Z`
         */
        UpdateTime: string;
        /**
         * 自定义标签。
         */
        TaskTags: {
            /**
             * 自定义标签键。
             * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
             * @example `k1`
             */
            Key: string;
            /**
             * 自定义标签值。
             * 最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。
             * @example `v1`
             */
            Value: string;
        }[];
    };
}
