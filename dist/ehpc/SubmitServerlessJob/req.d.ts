export interface SubmitServerlessJobRequest {
    /**
     * 集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * Serverless作业名。
     * > 支持英文小写字母、数字或者短划线（-），不能以短划线开头或者结尾。
     * @example `testjob`
     */
    "JobName": string;
    /**
     * 数组作业配置。
     * > 数组作业索引值会通过环境变量`EHPC_ARRAY_TASK_ID`传入Serverless作业容器中，支持用户业务程序访问。
     */
    "ArrayProperties"?: {
        /**
         * 数组作业索引的起始值。取值范围：0~4999。
         * @example `1`
         */
        IndexStart: number;
        /**
         * 数组作业索引的结束值。取值范围：0~4999，且大于等于IndexStart。
         * @example `5`
         */
        IndexEnd: number;
        /**
         * 数组作业索引的间隔。
         * > 若数组作业属性为IndexStart=1,IndexEnd=5,IndexStep=2，则该数组作业包含三个子任务，子任务索引分别为1,3,5。
         * @example `2`
         */
        IndexStep: number;
    };
    /**
     * Serverless作业的调度优先级。取值范围：0~999，取值越大，优先级越高。
     * @example `10`
     */
    "JobPriority"?: number;
    /**
     * 为Serverless作业容器增加的临时存储空间大小。单位：GiB。
     * > Serverless作业容器默认提供30 GiB的免费存储空间，如果您的存储需求大于30 GiB，可以通过该参数自定义增加临时存储空间大小。
     * @example `200`
     */
    "EphemeralStorage"?: number;
    /**
     * Serverless作业的有效期限，超出该时间后，作业会强制终止。单位为秒。
     * @example `3600`
     */
    "Timeout"?: number;
    /**
     * Serverless作业容器所属的交换机ID列表。
     */
    "VSwitchId"?: string[];
    /**
     * Serverless作业容器所采用的ECS实例规格列表。
     */
    "InstanceType"?: string[];
    /**
     * Serverless作业容器的vCPU大小。单位：核。
     * @example `2`
     */
    "Cpu"?: number;
    /**
     * Serverless作业容器的内存大小。单位：GiB。
     * @example `4`
     */
    "Memory"?: number;
    /**
     * 实例的抢占策略。取值范围：
     * - NoSpot：正常按量付费实例。
     * - SpotWithPriceLimit：设置上限价格的抢占式实例。
     * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格的抢占式实例。
     * 默认值：NoSpot。
     * @example `SpotWithPriceLimit`
     */
    "SpotStrategy"?: string;
    /**
     * 设置抢占式实例的每小时最高价格，最多精确到小数点后3位。
     * 当SpotStrategy取值为SpotWithPriceLimit时，必须设置SpotPriceLimit。
     * @example `0.062`
     */
    "SpotPriceLimit"?: number;
    /**
     * Serverless作业容器绑定的RAM角色名称。
     * @example `testRamRoleName`
     */
    "RamRoleName"?: string;
    /**
     * Serverless作业容器的属性。
     */
    "Container": {
        /**
         * 容器的环境变量值。
         */
        EnvironmentVar: {
            /**
             * 环境变量名。长度为1~128位。格式要求：[0-9a-zA-Z]，以及下划线，不能以数字开头。
             * @example `PATH`
             */
            Key: string;
            /**
             * 环境变量值。长度为0~256位。
             * @example `/usr/local/bin`
             */
            Value: string;
        }[];
        /**
         * 容器工作目录。
         * @example `/usr/local/
        `
         */
        WorkingDir: string;
        /**
         * 容器镜像。
         * @example `registry-vpc.cn-hangzhou.aliyuncs.com/ehpc/hpl:latest
        `
         */
        Image: string;
        /**
         * 容器启动指令列表。
         */
        Command: string[];
        /**
         * 容器启动命令对应的参数列表。最多10个。
         */
        Arg: string[];
        /**
         * 容器使用的GPU个数。
         * @example `1`
         */
        Gpu: number;
        /**
         * 容器挂载的数据卷列表。
         */
        VolumeMount: {
            /**
             * 容器挂载数据卷的目录。
             * > 容器挂载目录下的内容会被Volume的内容直接覆盖，请谨慎使用。
             * @example `/data`
             */
            MountPath: string;
            /**
             * 使用FlexVolume插件挂载数据卷时的驱动类型。取值范围如下：
             * - alicloud/nas：挂载NAS。
             * - alicloud/oss：挂载OSS。
             * @example `alicloud/oss`
             */
            FlexVolumeDriver: string;
            /**
             * FlexVolume对象选项列表。为KV形式，采用JSON传递。
             * @example `{"bucket":"hpctest","url": "oss-cn-hangzhou-internal.aliyuncs.com
            ","path":"/data","ramRole":"AliyunECSInstanceForEHPCRole"}`
             */
            FlexVolumeOptions: string;
        }[];
    };
    /**
     * Serverless作业依赖列表。
     */
    "DependsOn"?: {
        /**
         * 所依赖的作业ID。
         * @example `10`
         */
        JobId: string;
        /**
         * 依赖类型。取值范围：
         * - AfterSucceeded：所依赖作业或数组作业**所有子任务**运行成功（退出码为0）。
         * - AfterFailed：所依赖作业或数组作业**任一子任务**运行失败（退出码非0）。
         * - AfterAny：所依赖作业运行结束（成功或失败）。
         * - AfterCorresponding：所依赖数组作业对应的子任务运行成功（退出码为0）。
         * 默认值：AfterSucceeded。
         * @example `AfterAny`
         */
        Type: string;
    }[];
    /**
     * Serverless作业重试策略。
     */
    "RetryStrategy"?: {
        /**
         * Serverless作业重试次数。取值范围：1～10。
         * @example `5`
         */
        Attempts: number;
        /**
         * Serverless作业重试规则列表。最多10个。
         */
        EvaluateOnExit: {
            /**
             * 作业行为。取值范围如下：
             * - Retry：当命中特定退出码时，作业开始新一轮重试。
             * - Exit：当命中特定退出码时，作业退出。
             * @example `Retry`
             */
            Action: string;
            /**
             * 作业退出码，配合Action构成作业重试规则。取值范围：0～255。
             * @example `10`
             */
            OnExitCode: string;
        }[];
    };
}
