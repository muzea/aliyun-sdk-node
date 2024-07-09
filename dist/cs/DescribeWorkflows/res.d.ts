export interface DescribeWorkflowsResponse {
    /**
     * Job列表。
     */
    jobs: {
        /**
         * 集群ID。
         * @example `cb1a7214cfc0b41d9bb086affc2d8f51c`
         */
        cluster_id: string;
        /**
         * 工作流名称。
         * @example `wgs-gpu-qb4dk`
         */
        job_name: string;
        /**
         * 工作流创建时间。
         * @example `2020-01-15T13:18:52Z`
         */
        create_time: string;
    }[];
}
