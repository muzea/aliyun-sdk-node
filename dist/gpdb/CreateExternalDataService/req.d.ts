export interface CreateExternalDataServiceRequest {
    /**
     * 地域ID，您可以通过[DescribeRegions](~~86912~~)接口查看可用的地域ID。
     * @example `cn-beijing`
     */
    "RegionId"?: string;
    /**
     * 服务名称。
     * @example `test-adbpgss`
     */
    "ServiceName": string;
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
     * 服务描述。
     * @example `pxf test`
     */
    "ServiceDescription"?: string;
}
