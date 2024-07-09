export interface GetSchedulerInfoRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 调度器详细信息。
     */
    "Scheduler": {
        /**
         * 调度器名称。取值范围：
         * - pbs
         * - pbs19
         * - slurm
         * - slurm19
         * - slurm20
         * @example `pbs`
         */
        SchedName: string;
    }[];
}
