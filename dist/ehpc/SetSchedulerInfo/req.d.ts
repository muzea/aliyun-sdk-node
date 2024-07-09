export interface SetSchedulerInfoRequest {
    /**
     * 地域ID。
     * 您可以通过调用[ListRegions](~~188593~~)获取E-HPC支持的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * PBS调度器信息列表。
     */
    "PbsInfo"?: {
        /**
         * 队列限制信息列表。
         */
        AclLimit: {
            /**
             * AclLimit指用户使用的队列限制。N的取值范围：0~100。
             * 假设`PbsInfo.N.AclLimit.N.Queue`设置为`workq`，`PbsInfo.N.AclLimit.N.AclUsers`设置为`user1,user2`，表示队列workq只能被user1和user2使用。
             * @example `workq`
             */
            Queue: string;
            /**
             * 限制该队列使用的用户名，多个用户用`,`隔开。
             * 当设置了用户名时，PbsInfo.N.AclLimit.N.Queue为必选。
             * @example `user1,user2`
             */
            AclUsers: string;
        }[];
        /**
         * 集群用户使用的节点信息列表。
         */
        ResourceLimit: {
            /**
             * 集群用户使用队列的最大节点个数。
             * @example `2`
             */
            Nodes: number;
            /**
             * 集群用户使用队列中节点的最大vCPU个数。
             * @example `2`
             */
            Cpus: number;
            /**
             * 运行作业的集群用户名。
             * @example `user1`
             */
            User: string;
            /**
             * PbsInfo指集群中可以设置的PBS调度信息个数。N的取值范围：0~100。
             * ResourceLimit指用户使用的队列资源限制。N的取值范围：0~100。
             * Queue指该集群用户运行作业使用的队列名称。
             * 当ResourceLimit中设置了User、Cpus、Nodes、Mem中任一一个参数时，Queue为必选。
             * @example `workq`
             */
            Queue: string;
            /**
             * 集群用户使用队列的最大内存资源。单位取值范围：
             * - gb
             * - mb
             * - kb
             * @example `2gb`
             */
            Mem: string;
            /**
             * 集群用户提交的最大作业数目。若用户的运行和排队作业数目总和超过此数值则将无法再继续提交作业。
             * @example `1000`
             */
            MaxJobs: number;
        }[];
        /**
         * 作业保留时间，超过保留之间后，作业数据会被销毁。单位为天。
         * 取值范围：1~30。
         * 默认值：14。
         * @example `14`
         */
        JobHistoryDuration: number;
        /**
         * PbsInfo指集群中可以设置的PBS调度信息个数。N的取值范围：0~100。
         * SchedInterval指调度周期，单位：秒
         * 调度周期指运行多个作业之间时间间隔，如设置为60，表示本次作业开始运行60秒后才能开始运行下次作业。
         * 默认值：60
         * @example `60`
         */
        SchedInterval: number;
        /**
         * 集群调度的最大作业数。若集群排队和运行的作业数总和超过此数值则无法再继续提交作业。默认值：20000
         * @example `20000`
         */
        SchedMaxJobs: number;
        /**
         * 集群调度的最大排队作业数。若集群排队作业数量超过此数值则无法再继续提交作业。默认值：10000
         * @example `10000`
         */
        SchedMaxQueuedJobs: number;
    }[];
    /**
     * Slurm调度器信息列表。
     */
    "SlurmInfo"?: {
        /**
         * Backfill调度周期设置，单位：秒
         * 默认值：60
         * @example `60`
         */
        BackfillInterval: number;
        /**
         * SlurmInfo指集群中可以设置的Slurm调度信息个数。N的取值范围：0~100。
         * SchedInterval指主调度周期设置，单位：秒
         * 默认值：60
         * @example `60`
         */
        SchedInterval: number;
    }[];
    /**
     * 调度器信息列表。
     */
    "Scheduler": {
        /**
         * 调度器名，取值范围：
         * - pbs
         * - pbs19
         * - slurm
         * - slurm19
         * - slurm20
         * > 调度器为pbs、pbs19时，PbsInfo.N.SchedInterval、PbsInfo.N.JobHistoryDuration、PbsInfo.N.ResourceLimit、PbsInfo.N.AclLimit中至少一个参数为必选；调度器为slurm、slurm19、slurm20时，SlurmInfo.N.SchedInterval、SlurmInfo.N.BackfillInterval中至少一个参数为必选。
         * @example `pbs`
         */
        SchedName: string;
    }[];
}
