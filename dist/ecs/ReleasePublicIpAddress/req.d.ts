export interface ReleasePublicIpAddressRequest {
    /**
     * 实例所属地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定的实例ID。
     * @example `i-bp67acfmxazb4p****`
     */
    "InstanceId"?: string;
    /**
     * 实例公网IP地址。
     * @example `121.40.**.**`
     */
    "PublicIpAddress": string;
    /**
     * >该参数暂未开放使用。
     * @example `hide`
     */
    "DryRun"?: boolean;
}
