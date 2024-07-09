export interface UpdateServiceInstanceAttributeRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 服务实例ID。
     * @example `si-3df88e962cdexxxxxxxx`
     */
    "ServiceInstanceId": string;
    /**
     * 服务实例到期时间。
     * @example `2023-12-25T02:28:40Z`
     */
    "EndTime"?: string;
}
