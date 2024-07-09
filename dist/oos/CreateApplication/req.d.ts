export interface CreateApplicationRequest {
    /**
     * 地域ID，目前仅支持cn-hangzhou。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 应用名称。
     * @example `MyApplication`
     */
    "Name": string;
    /**
     * 要给应用添加的描述信息。
     * @example `application`
     */
    "Description"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmxsn4m******`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签。
     * @example `{"k1":"v1","k2":"v2"}`
     */
    "Tags"?: any;
    /**
     * 幂等Token。
     * @example `TF-CreateApplication-1647587475-84104b89-eba5-47a8-b2fd-807b8b7d`
     */
    "ClientToken"?: string;
    /**
     * 应用报警配置。
     */
    "AlarmConfig"?: {
        /**
         * 报警联系人组。
         */
        ContactGroups: string[];
        /**
         * 报警模板组。
         */
        TemplateIds: string[];
        /**
         * 健康检查URL。
         * @example `/healthcheck/tcp50122`
         */
        HealthCheckUrl: string;
    };
    /**
     * 应用模板对应的计算巢服务ID
     * @example `service-79538e30e44541b699d8`
     */
    "ServiceId"?: string;
}
