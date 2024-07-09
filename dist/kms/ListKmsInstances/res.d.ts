export interface ListKmsInstancesResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `d3eca5c8-a856-4347-8eb6-e1898c3fda2e`
     */
    RequestId: string;
    KmsInstances: {
        /**
         * KMS实例列表。
         */
        KmsInstance: {
            /**
             * KMS实例的ARN。
             * @example `acs:kms:pre-hangzhou:120708975881****:keystore/kst-phzz64c9f84eo32dbs****`
             */
            KmsInstanceArn: string;
            /**
             * KMS实例的ID。
             * @example `kst-phzz64c9f84eo32dbs****`
             */
            KmsInstanceId: string;
        }[];
    };
    /**
     * KMS实例的总数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页查询时，当前页面的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时，每页包含KMS实例的数量。
     * @example `10`
     */
    PageSize: number;
}
