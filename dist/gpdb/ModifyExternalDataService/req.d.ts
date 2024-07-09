export interface ModifyExternalDataServiceRequest {
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~86912~~)接口查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID。
     * @example `gp-bp10g78o9807yv9h3`
     */
    "DBInstanceId": string;
    /**
     * 服务规格（单位CU），取值：
     * - 8
     * @example `8`
     */
    "ServiceSpec": string;
    /**
     * 服务ID。
     * @example `1`
     */
    "ServiceId": string;
    /**
     * 服务描述。
     * @example `pxf test`
     */
    "ServiceDescription"?: string;
}
