export interface ListInstancesResponse {
    /**
     * 请求 ID。
     * @example `46329898-489C-4E63-9BA1-C1DA5C5D0986`
     */
    RequestId: string;
    /**
     * 云渲染实例列表。
     */
    Instances: {
        /**
         * 实例ID。
         * @example `gcs-bmt0kbn7e013aedg9`
         */
        InstanceId: string;
        /**
         * GCS 云渲染实例规格。
         * @example `gcs.r1c1m1.1xlarge`
         */
        InstanceType: string;
        /**
         * 大区ID。取值：
         * - huadong
         * - xinan
         * - huanan
         * - huabei
         * - huazhong
         * @example `huadong`
         */
        DistrictId: string;
        /**
         * 项目ID。
         * @example `4820372607851300489003`
         */
        ProjectId: string;
        /**
         * 云渲染实例话状态，包括：
         * - CREATING：创建中
         * - RUNNING：实例运行中
         * - OPERATING：实例运维中
         * - DELETING: 实例删除中
         * - MIGRATING: 实例迁移中
         * @example `CREATING`
         */
        Status: string;
        /**
         * 创建时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
         * @example `2023-12-13T11:12:11Z`
         */
        CreationTime: string;
    }[];
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `BEXZPF01W23U46598WVf`
     */
    NextToken: string;
    /**
     * 本次请求所返回的最大记录条数。
     * @example `50`
     */
    MaxResults: string;
}
