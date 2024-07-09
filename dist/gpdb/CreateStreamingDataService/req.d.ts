export interface CreateStreamingDataServiceRequest {
    /**
     * The region ID.
     * >  You can call the [DescribeRegions](~~86912~~) operation to query the most recent region list.
     * @example `cn-beijing`
     */
    "RegionId"?: string;
    /**
     *
     * @example `test-adbpgss`
     */
    "ServiceName": string;
    /**
     *
     * @example `gp-bp10g78o9807yv9h3`
     */
    "DBInstanceId": string;
    /**
     *
     * @example `2`
     */
    "ServiceSpec": string;
    /**
     *
     * @example `test-adbpgss`
     */
    "ServiceDescription"?: string;
}
