export interface ListReleaseVersionsResponse {
    /**
     * 版本列表。
     */
    ReleaseVersions: {
        /**
         * 版本序列。
         * @example `EMR-5.X`
         */
        Series: string;
        /**
         * EMR发行版。
         * @example `EMR-5.8.0`
         */
        ReleaseVersion: string;
        /**
         * IaaS类型。
         * @example `ECS`
         */
        IaasType: string;
    }[];
    /**
     * 请求ID。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    RequestId: string;
    /**
     * 返回读取到的数据位置。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C89568980`
     */
    NextToken: string;
    /**
     * 本次请求所返回的最大记录条数。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 本次请求条件下的数据总量。
     * @example `200`
     */
    TotalCount: number;
}
