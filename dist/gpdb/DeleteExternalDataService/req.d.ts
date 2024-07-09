export interface DeleteExternalDataServiceRequest {
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~86912~~)接口查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 服务ID。
     * @example `1`
     */
    "ServiceId": string;
    /**
     * 实例ID。
     * @example `gp-xxx`
     */
    "DBInstanceId": string;
}
