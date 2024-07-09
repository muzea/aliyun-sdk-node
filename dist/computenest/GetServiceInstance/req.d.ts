export interface GetServiceInstanceRequest {
    /**
     * 服务实例ID。
     * >输入参数时， `ServiceInstanceId`或`MarketInstanceId`其中一个参数必须填写，否则将无法查询服务实例的详细信息。
     * @example `si-d6ab3a63ccbb4b17****`
     */
    "ServiceInstanceId"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云市场实例ID。
     * @example `704***59`
     */
    "MarketInstanceId"?: string;
}
