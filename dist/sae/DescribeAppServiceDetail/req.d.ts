export interface DescribeAppServiceDetailRequest {
    /**
     * 应用ID。
     * @example `6dcc8c9e-d3da-478a-a066-86dcf820****`
     */
    "AppId": string;
    /**
     * 服务类型。取值说明如下：
     * - **dubbo**
     * - **springCloud**
     * @example `springCloud`
     */
    "ServiceType"?: string;
    /**
     * 服务分组。自定义。
     * @example `springCloud`
     */
    "ServiceGroup"?: string;
    /**
     * 服务版本。自定义。
     * @example `1.0.0`
     */
    "ServiceVersion"?: string;
    /**
     * 服务名称。
     * @example `edas.service.provider`
     */
    "ServiceName"?: string;
    "NacosInstanceId"?: string;
    "NacosNamespaceId"?: string;
}
