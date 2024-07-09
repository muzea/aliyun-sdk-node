export interface ModifyStreamingDataServiceRequest {
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~86912~~)接口查看可用的地域ID。
     * @example `cn-beijing`
     */
    "RegionId"?: string;
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~196830~~)接口查看目标地域下所有实例的详情，包括实例ID。
     * @example `gp-bp10g78o9807yv9h3`
     */
    "DBInstanceId": string;
    /**
     * 服务规格（单位CU），取值如下：
     * - 2
     * - 4
     * - 8
     * - 16
     * @example `2`
     */
    "ServiceSpec": string;
    /**
     * 服务ID。
     * @example `1`
     */
    "ServiceId": string;
    /**
     * 服务描述。
     * @example `test-adbpgss`
     */
    "ServiceDescription"?: string;
}
