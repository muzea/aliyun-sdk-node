export interface CreateJobRequest {
    /**
     * 作业名称。最大长度为10。
     * @example `testjob`
     */
    "JobName": string;
    /**
     * 作业描述。
     * @example `Demo`
     */
    "JobDescription"?: string;
    /**
     * 任务列表，当前仅支持1个任务。
     */
    "Tasks": {
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
                 * 使用容器实例。
                 */
                Container: {
                    /**
                     * 容器镜像。
                     * @example `registry-vpc.cn-hangzhou.aliyuncs.com/ehpc/hpl:latest`
                     */
                    Image: string;
                    /**
                     * 容器工作目录。
                     * @example `/usr/local/`
                     */
                    WorkingDir: string;
                    /**
                     * 容器启动命令列表。最多20个命令，单个命令最长256个字符。
                     * > 当启动命令包含空格时（例如：`sleep 60s`），传入的JSON格式参数为`["sleep", "60s"]`。
                     */
                    Command: string[];
                    /**
                     * 容器的环境变量。最多20组。
                     */
                    EnvironmentVars: {
                        /**
                         * 环境变量名。长度为 1~128 位。格式要求：[0-9a-zA-Z]，以及下划线，不能以数字开头。
                         * @example `PATH`
                         */
                        Name: string;
                        /**
                         * 环境变量值。长度为 0~256 位。
                         * @example `/usr/local/bin`
                         */
                        Value: string;
                    }[];
                    /**
                     * VM应用ID。
                     * @example `ci-vm-32k6LXAi3cOG`
                     */
                    AppId: string;
                };
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
                     * @example `ZWNobyBoZWxsbyBlY3Mh`
                     */
                    PrologScript: string;
                    /**
                     * 运行作业脚本。需Base64编码。
                     * @example `ZWNobyBoZWxsbyBlY3Mh`
                     */
                    Script: string;
                    /**
                     * 容器应用ID
                     * @example `ci-vm-9jc58Pm5Leky`
                     */
                    AppId: string;
                };
            }[];
            /**
             * 容器挂载的数据卷列表。最多10组。
             */
            VolumeMount: {
                /**
                 * 容器挂载数据卷的目录。
                 * > 容器挂载目录下的内容会被Volume的内容直接覆盖，请谨慎使用。
                 * @example `/mnt`
                 */
                MountPath: string;
                /**
                 * 当前支持的数据卷类型。取值为`alicloud/nas`，表示挂载 NAS。
                 * @example `alicloud/nas`
                 */
                VolumeDriver: string;
                /**
                 * 数据卷挂载参数列表。为KV形式，采用JSON传递。
                 * @example `{"server":"xxxxx-xxxxx.cn-heyuan.nas.aliyuncs.com","vers":"3","path":"/data","options":"nolock,tcp,noresvport"}`
                 */
                MountOptions: string;
            }[];
            /**
             * 资源信息。
             */
            Resource: {
                /**
                 * 运行作业的CPU个数。
                 * @example `2`
                 */
                Cores: number;
                /**
                 * 运行作业的内存大小。单位为GiB。
                 * @example `4`
                 */
                Memory: number;
                /**
                 * 云盘数组。
                 */
                Disks: {
                    /**
                     * 云盘类型。目前仅支持System，表示系统盘。
                     * @example `System`
                     */
                    Type: string;
                    /**
                     * 云盘大小。单位为GiB。
                     * @example `40`
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
             * @example `1`
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
    }[];
    /**
     * 资源部署策略。
     */
    "DeploymentPolicy"?: {
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
}
