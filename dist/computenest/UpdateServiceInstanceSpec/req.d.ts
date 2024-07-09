export interface UpdateServiceInstanceSpecRequest {
    /**
     * 服务实例ID。
     * 您可以通过调用[ListServiceInstances - 查询服务实例列表](~~396200~~)获取服务实例ID。
     * @example `si-d6ab3a63ccbb4b17****`
     */
    "ServiceInstanceId": string;
    /**
     * 服务实例套餐名称。
     * 当服务商在添加变配操作时设置**变更类型**为**套餐变更**，您可以设置该参数。
     * 您可以通过查看[GetService - 查询服务详细信息](~~2340828~~)接口中返回参数**DeployMetadata**的**PredefinedParameters**属性获取服务设置的套餐名称。
     * @example `套餐一`
     */
    "PredefinedParametersName"?: string;
    /**
     * 服务实例变更参数。
     * 当服务商在添加变配操作时设置**变更类型**为**参数变更**，您可以设置该参数。
     * > - 您可以通过查看[GetService - 查询服务详细信息](~~2340828~~)接口中返回参数**OperationMetadata**的**ModifyParametersConfig**属性获取服务设置的变更参数。
     * > - 您还可以通过[计算巢控制台](https://computenest.console.aliyun.com/service/instance/cn-hangzhou)的**服务实例变更**页面查看服务设置的变更参数。
     * 例如，如果服务设置了ECS实例规格升配，此时您需要输入比原来服务实例更高的实例规格配置。
     * @example `{
      "InstanceType": "ecs.g8ise.2xlarge"
    }`
     */
    "Parameters"?: any;
    /**
     * 是否对此次创建请求执行预检，包括权限、实例状态校验等操作。
     * 取值：
     * - true：发送请求，不创建服务实例。
     * - false：发送请求，检查通过后创建服务实例。
     * @example `true`
     */
    "DryRun"?: boolean;
    /**
     * 用户侧是否启用Prometheus监控。
     * 取值：
     * true：启用。
     * false：不启用。
     * @example `true`
     */
    "EnableUserPrometheus"?: boolean;
    /**
     * 变配操作名称。
     * 您可以通过查看[GetService - 查询服务详细信息](~~2340828~~)接口中返回参数**OperationMetadata**的**ModifyParametersConfig**属性获取服务设置的变配操作名称和变配操作内容。
     * @example `套餐变配`
     */
    "OperationName"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 云市场购买订单信息，服务未上云市场或按量计费不必传。
     */
    "Commodity"?: {
        /**
         * 是否自动支付。
         * 取值：
         * - **true**（默认值）：自动支付。您需要确保账户余额充足。
         * - **false**：只生成订单不扣费。如果您的支付方式余额不足，可以将参数AutoPay设置为false，此时会生成未支付订单，您可以登录[RDS管理控制台](https://rdsnext.console.aliyun.com/dashboard/cn-beijing)自行支付。
         * @example `true`
         */
        AutoPay: boolean;
    };
}
