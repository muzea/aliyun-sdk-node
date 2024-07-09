export interface GetOssUsageDataRequest {
    /**
     * 起始时间点，UTC时间，格式：2010-01-21T09:50:23Z。
     * @example `2022-01-11T00:00:00Z`
     */
    "StartTime": string;
    /**
     * 结束时间点，UTC时间，格式：2010-01-21T09:50:23Z。
     * @example `2022-01-12T00:00:00Z`
     */
    "EndTime": string;
    /**
     * OSS逻辑bucket名称。
     * @example `ens-sink-bucketzyp1656903494`
     */
    "Bucket"?: string;
    /**
     * 时间聚合粒度，单位：分钟。
     * 默认为5分钟，取值范围：5~1440。
     * @example `10`
     */
    "Period"?: string;
}
