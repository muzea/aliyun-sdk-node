export interface GetServiceTemplateParameterConstraintsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 服务ID。
     * @example `service-1c11f365190c44xxxxxx`
     */
    "ServiceId": string;
    /**
     * 服务版本。
     * @example `draft`
     */
    "ServiceVersion"?: string;
    /**
     * 模板名称。
     * @example `模板1`
     */
    "TemplateName": string;
    /**
     * 参数信息。
     */
    "Parameters"?: {
        /**
         * 参数名称。
         * @example `PayType`
         */
        ParameterKey: string;
        /**
         * 参数值。
         * @example `PostPaid`
         */
        ParameterValue: string;
    }[];
    /**
     * 客户端Token，用于保证请求的幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * @example `10CM943JP0EN9D51H`
     */
    "ClientToken"?: string;
    /**
     * 部署地域ID。
     * @example `cn-huhehaote`
     */
    "DeployRegionId": string;
    /**
     * 服务实例ID。
     * @example `si-d6ab3a63ccbb4b17****`
     */
    "ServiceInstanceId"?: string;
    /**
     * 是否已开启私网连接。可选值：
     * - true：已开启
     * - false：未开启
     * @example `true`
     */
    "EnablePrivateVpcConnection"?: boolean;
}
