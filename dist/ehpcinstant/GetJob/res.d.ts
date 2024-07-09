export interface GetJobResponse {
    /**
     * 请求ID。
     * @example `896D338C-E4F4-41EC-A154-D605E5DE****`
     */
    RequestId: string;
    /**
     * 作业详细信息。
     */
    JobInfo: {
        /**
         * 作业ID。
         * @example `job-xxxx`
         */
        JobId: string;
        /**
         * 作业名称。
         * @example `testJob`
         */
        JobName: string;
        /**
         * 作业描述。
         * @example `Demo`
         */
        JobDescription: string;
        /**
         * 任务列表，当前仅支持1个任务。
         */
        Tasks: {
            /**
             * 任务名称。
             * @example `task0`
             */
            TaskName: string;
            /**
             * 任务规格详情。
             */
            TaskSpec: {
                /**
                 * 任务执行配置。
                 */
                TaskExecutor: {
                    /**
                     * 使用ECS实例。
                     */
                    VM: {
                        /**
                         * 镜像ID。
                         * @example `m-xxxx`
                         */
                        Image: string;
                        /**
                         * 前处理脚本。需Base64编码。
                         * @example `ZWNobyAiMTIzNCIgPiBgZGF0ZSArJXNg`
                         */
                        PrologScript: string;
                        /**
                         * 运行作业脚本。需Base64编码。
                         * @example `ZWNobyAiMTIzNCIgPiBgZGF0ZSArJXNg`
                         */
                        Script: string;
                    };
                }[];
                /**
                 * 资源信息。
                 */
                Resource: {
                    /**
                     * 运行作业的CPU个数。
                     * @example `1`
                     */
                    Cores: number;
                    /**
                     * 内存资源总量。单位：GiB。
                     * @example `4`
                     */
                    Memory: number;
                    /**
                     * 云盘数组。
                     */
                    Disks: {
                        /**
                         * 云盘类型。支持以下类型：
                         * - System：系统盘。
                         * - Data：数据盘。
                         * @example `System`
                         */
                        Type: string;
                        /**
                         * 云盘大小。
                         * @example `100`
                         */
                        Size: number;
                    }[];
                };
            };
            /**
             * 任务执行策略。
             */
            ExecutorPolicy: {
                /**
                 * 作业运行最大节点数。
                 * @example `10`
                 */
                MaxCount: number;
                /**
                 * 数组作业详情。
                 */
                ArraySpec: {
                    /**
                     * 数组作业索引的起始值。取值范围：0~4999。
                     * @example `0`
                     */
                    IndexStart: number;
                    /**
                     * 数组作业索引的结束值。取值范围：0~4999，且大于等于IndexStart。
                     * @example `9`
                     */
                    IndexEnd: number;
                    /**
                     * 数组作业索引的间隔。
                     * > 若数组作业属性为IndexStart=1,IndexEnd=5,IndexStep=2，则该数组作业包含三个子任务，子任务索引分别为1,3,5。
                     * @example `1`
                     */
                    IndexStep: number;
                };
            };
            /**
             * 是否是长时间运行的作业。
             * @example `true`
             */
            TaskSustainable: boolean;
            /**
             * 任务执行状态。
             */
            ExecutorStatus: {
                /**
                 * 子作业ID
                 * @example `0`
                 */
                ArrayId: number;
                /**
                 * 作业状态。
                 * @example `Running`
                 */
                Status: string;
                /**
                 * 状态原因描述。
                 * @example `Creating executor`
                 */
                StatusReason: string;
                /**
                 * 作业创建时间。
                 * @example `2024-02-04 13:54:10`
                 */
                CreateTime: string;
                /**
                 * 作业开始时间。
                 * @example `2024-02-04 13:54:10`
                 */
                StartTime: string;
                /**
                 * 作业结束时间。
                 * @example `2024-02-04 13:54:10`
                 */
                EndTime: string;
            }[];
        }[];
        /**
         * 资源部署策略。
         */
        DeploymentPolicy: {
            /**
             * 资源类型。当前仅支持Dedicated，需开通白名单使用。
             * @example `Dedicated`
             */
            AllocationSpec: string;
            /**
             * 网络配置信息。
             */
            Network: {
                /**
                 * 交换机数组。
                 */
                Vswitch: string[];
            };
        };
        /**
         * 作业提交时间。
         * @example `2024-03-05 20:00:46`
         */
        CreateTime: string;
        /**
         * 作业开始时间。
         * @example `2024-03-05 20:00:48`
         */
        StartTime: string;
        /**
         * 作业结束时间。
         * @example `2024-03-05 20:01:48`
         */
        EndTime: string;
        /**
         * 作业状态。
         * @example `Succeed`
         */
        Status: string;
    };
}
