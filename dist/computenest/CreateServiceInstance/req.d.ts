export interface CreateServiceInstanceRequest {
    /**
     * 地域ID。可能的值：
     * - cn-hangzhou：华东1（杭州） 。
     * - ap-southeast-1：新加坡。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 服务实例名称。格式要求如下：
     * - 长度不超过64个字符。
     * - 必须以数字或英文字母开头，可包含数字、英文字母、短划线（-）和下划线（_）。
     * @example `TestName`
     */
    "Name"?: string;
    /**
     * 服务ID。
     * @example `service-0e6fca6a51a54420****`
     */
    "ServiceId": string;
    /**
     * 服务版本。
     * @example `1`
     */
    "ServiceVersion"?: string;
    /**
     * 用户实例部署的参数。
     * > 若服务实例包含部署地域信息，需在部署参数中填写。
     * @example `{
          "RegionId": "cn-hangzhou"
          "NodeCount": 3,
          "SystemDiskSize": 40,
          "InstancePassword": "******"
    }`
     */
    "Parameters"?: any;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 服务实例是否有代运维功能。取值范围：
     * - true：服务实例有代运维功能。
     * - false：服务实例没有代运维功能。
     * @example `true`
     */
    "EnableInstanceOps"?: boolean;
    /**
     * 模板名称，服务支持多模板时需要指定模板名称。
     * @example `模板1`
     */
    "TemplateName"?: string;
    /**
     * 代运维配置。
     */
    "OperationMetadata"?: {
        /**
         * 运维开始时间，只在纯代运维模式下有效。
         * @example `2021-12-29T06:48:56Z`
         */
        StartTime: string;
        /**
         * 运维结束时间，只在纯代运维模式下有效。
         * @example `2022-01-28T06:48:56Z`
         */
        EndTime: string;
        /**
         * 导入的资源列表。
         * @example `{   "RegionId": "cn-hangzhou",   "Type": "ResourceIds",   "ResourceIds": {     "ALIYUN::ECS::INSTANCE": ["i-xxx", "i-yyy"],     "ALIYUN::RDS::INSTANCE": ["rm-xxx", "rm-yyy"],     "ALIYUN::VPC::VPC": ["vpc-xxx", "vpc-yyy"],     "ALIYUN::SLB::INSTANCE": ["lb-xxx", "lb-yyy"]   } }`
         */
        Resources: string;
        /**
         * 导入的服务实例ID。
         * @example `si-d6ab3a63ccbb4b17****`
         */
        ServiceInstanceId: string;
        /**
         * 代运维服务附加信息。
         * @example `  ```json
          {
            "vncInfo": [
              {
                "instanceId": "i-001",
                "username": "admin",
                "password": "******",
                "vncPassword": "******"
              }
            ]
          }
          ````
         */
        ExtraInfo: string;
    };
    /**
     * 资源组ID。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 接收告警的云监控联系人组。
     * @example `云账号报警联系人`
     */
    "ContactGroup"?: string;
    /**
     * 当前服务实例的类型。可选值：
     * - Trial：支持试用。
     * - NotTrial：不支持试用。
     * @example `Trial`
     */
    "TrialType"?: string;
    /**
     * 用户自定义标签。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `key1`
         */
        Key: string;
        /**
         * 标签值。
         * @example `value1`
         */
        Value: string;
    }[];
    /**
     * 套餐规格名称。
     * @example `套餐一`
     */
    "SpecificationName"?: string;
    /**
     * 是否对此次创建请求执行预检，包括权限、实例状态校验等。可能的值：
     * - true：发送请求，不创建服务实例。
     * - false：发送请求，检查通过后创建服务实例。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 商品规格码。
     * @example `yuncode5425200001`
     */
    "SpecificationCode"?: string;
    /**
     * 是否启用Prometheus监控，可能的值：
     * - true：启用。
     * - false：不启用。
     * @example `true`
     */
    "EnableUserPrometheus"?: boolean;
    /**
     * 云市场购买订单信息，服务未上云市场或按量计费不必传。
     */
    "Commodity"?: {
        /**
         * 购买时间单位，可传值：
         * - Year：年。
         * - Month：月。
         * - Day：日。
         * @example `Year`
         */
        PayPeriodUnit: string;
        /**
         * 购买时间长度。
         * @example `1`
         */
        PayPeriod: number;
        /**
         * 是否开启自动续费，取值：
         * * **true**：开启。
         * * **false**：不开启。
         * @example `false`
         */
        AutoRenew: boolean;
        /**
         * 订单是否自动支付。取值：
         * - **true**：自动支付。
         * - **false**：不自动支付。
         * @example `false`
         */
        AutoPay: boolean;
    };
    /**
     * 资源是否自动从余额中扣款支付。取值：
     * - true：自动支付。
     * - false：不自动支付。
     * @example `true`
     */
    "ResourceAutoPay"?: boolean;
}
