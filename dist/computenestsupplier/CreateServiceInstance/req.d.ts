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
     * 服务实例部署的参数。
     * > 若服务实例包含部署地域信息，则需在部署参数中填写。
     * @example `{
          "RegionId": "cn-hangzhou"
          "NodeCount": 3,
          "SystemDiskSize": 40,
          "InstancePassword": "******"
    }`
     */
    "Parameters"?: any;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 模板名称，服务支持多模板时需要指定模板名称。
     * @example `模板1`
     */
    "TemplateName"?: string;
    /**
     * 资源组ID。
     * @example `rg-aekzuqyxxxxxx`
     */
    "ResourceGroupId"?: string;
    /**
     * 用户ID。
     * @example `1563457855xxxxxx`
     */
    "UserId"?: string;
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
     * 服务实例的释放时间。
     * > 仅支持托管版场景中，服务商对自己的服务实例设置该参数。
     * @example `2023-12-12T03:13:05Z`
     */
    "EndTime"?: string;
}
