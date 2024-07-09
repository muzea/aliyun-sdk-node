export interface DeleteSmartAccessGatewayDnsForwardRequest {
    /**
     * 网关实例id
     * @example `sag-v9un1ccz22owd76lf8`
     */
    "SagInsId": string;
    /**
     * 设备SN
     * @example `sagf4dkqh78`
     */
    "SagSn": string;
    /**
     * 实例ID
     * @example `sagv3dnsforward-nc7qabskj17werc7su`
     */
    "InstanceId": string;
    /**
     * 智能接入网关实例所在的地域id
     * @example `cn-shanghai`
     */
    "RegionId": string;
}
