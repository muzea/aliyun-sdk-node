export interface GetServiceTemplateParameterConstraintsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 服务ID。
     * @example `service-731f788406024axxxxxx`
     */
    "ServiceId": string;
    /**
     * 服务版本。
     * @example `1`
     */
    "ServiceVersion"?: string;
    /**
     * 模板名称。
     * @example `模板1`
     */
    "TemplateName": string;
    /**
     * 服务实例配置参数。
     */
    "Parameters"?: {
        /**
         * 参数的名称。如果未指定参数的名称和值，则ROS将使用模板中指定的默认值。
         * > Parameters为可选参数。若指定了Parameters，则ParameterKey为必选参数。
         * @example `InstanceType`
         */
        ParameterKey: string;
        /**
         * 模板中已定义的参数的取值。
         * > Parameters为可选参数。若指定了Parameters，则ParameterValue为必选参数。
         * @example `cn-hangzhou-j`
         */
        ParameterValue: string;
    }[];
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 部署地域ID。
     * @example `cn-hangzhou`
     */
    "DeployRegionId": string;
    /**
     * 使用类型。可选值：
     * - Trial：支持试用。
     * - NotTrial：不支持试用。
     * @example `NotTrial`
     */
    "TrialType"?: string;
    /**
     * 套餐规格名称。
     * @example `套餐一`
     */
    "SpecificationName"?: string;
    /**
     * 服务实例ID。
     * @example `si-461ee95f46ca46xxxxxx`
     */
    "ServiceInstanceId"?: string;
    /**
     * 是否已开启私网连接。可能的值：
     * - true：已开启
     * - false：未开启
     * @example `true`
     */
    "EnablePrivateVpcConnection"?: boolean;
}
