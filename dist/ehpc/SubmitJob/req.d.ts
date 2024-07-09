export interface SubmitJobRequest {
    /**
     * 集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 执行作业命令。
     * @example `./LammpsTest/lammps.pbs`
     */
    "CommandLine": string;
    /**
     * 执行作业的用户名。
     * 您可以通过调用[ListUsers](~~188572~~)获取该集群中的用户名。
     * @example `testuser`
     */
    "RunasUser": string;
    /**
     * 用户密码。
     * @example `12****`
     */
    "RunasUserPassword"?: string;
    /**
     * 作业名称。长度为6~30个字符，必须以英文字母开头，可以包含数字、半角句号（.）。
     * @example `jobtest`
     */
    "Name"?: string;
    /**
     * 作业优先级，取值范围：0~9，取值越大，优先级越高。
     * 默认值：0
     * @example `0`
     */
    "Priority"?: number;
    /**
     * 执行作业路径。
     * @example `./Tem`
     */
    "PackagePath"?: string;
    /**
     * 标准输出路径。
     * @example `./LammpsTest`
     */
    "StdoutRedirectPath"?: string;
    /**
     * 错误输出路径。
     * @example `./LammpsTest`
     */
    "StderrRedirectPath"?: string;
    /**
     * 是否支持重新执行作业。取值范围：
     * - true：支持
     * - false：不支持
     * @example `false`
     */
    "ReRunable"?: boolean;
    /**
     * 队列作业。
     * 格式X-Y:Z， 最小值X是第一个索引，最大值Y是最后一个索引，Z表示步长，例如2-7:2，表示作业队列包含编号为2、4、6的3个子作业。
     * @example `1-10:2`
     */
    "ArrayRequest"?: string;
    /**
     * 执行作业的环境变量，可以在作业执行文件中访问环境变量。
     * @example `[{Name:test1,Value:value1},{Name:test2,Value:value2}]`
     */
    "Variables"?: string;
    /**
     * 上传到OSS的作业文件的URL地址。
     * @example `https://ehpc-hangzhou.oss-cn-hangzhou.aliyuncs.com/test-u4****​/testlist_ehpc.sh`
     */
    "InputFileUrl"?: string;
    /**
     * 解压命令。解压OSS下载的文件。取值范围：
     * - tar xzf：解开gzip格式压缩包
     * - tar xf：解开tar格式压缩包
     * - unzip：解开zip格式压缩包
     * @example `tar xzf`
     */
    "UnzipCmd"?: string;
    /**
     * 提交作业后执行的命令。
     * @example `example.sh`
     */
    "PostCmdLine"?: string;
    /**
     * 容器应用ID。如果选择使用容器执行作业，必须提供容器应用ID。
     * 您可以通过调用[ListContainerApps](~~87333~~)获取容器应用ID。
     * @example `ehpc-container-uerfrfffff****`
     */
    "ContainerId"?: string;
    /**
     * 执行作业的队列名称。
     * 您可以通过调用[ListQueues](~~92176~~)获取队列名称。
     * @example `workq`
     */
    "JobQueue"?: string;
    /**
     * 执行作业所需的计算节点数。
     * > 若该参数为空，则参数Cpu、Task、Thread、Mem、Gpu不生效。
     * @example `2`
     */
    "Node"?: number;
    /**
     * 单个计算节点所需的CPU核数。
     * @example `2`
     */
    "Cpu"?: number;
    /**
     * 单个计算节点创建的进程数。
     * 适用于MPI作业。
     * @example `2`
     */
    "Task"?: number;
    /**
     * 单个计算节点创建的线程数。
     * 适用于OpenMP作业。
     * @example `1`
     */
    "Thread"?: number;
    /**
     * 单个计算节点最大使用内存数，支持GB、MB、KB，单位不区分大小写。
     * @example `1GB`
     */
    "Mem"?: string;
    /**
     * 单个计算节点使用GPU的数量。
     * 仅支持使用PBS调度器的集群，且集群内计算节点含GPU时该参数生效。
     * @example `1`
     */
    "Gpu"?: number;
    /**
     * 作业最大运行时间，支持三种格式：
     * - hh:mm:ss
     * - mm:ss
     * - ss
     * 推荐使用第一种格式。若最大运行时间为12小时，示例：12:00:00。
     * @example `12:00:00`
     */
    "ClockTime"?: string;
    /**
     * 任务重试次数，取值范围1~10。当前任务重试功能仅适用于PBS集群。
     * > 若该参数为空，则参数JobRetry.Priority、JobRetry.OnExitCode不生效。
     * @example `5`
     */
    "JobRetry.Count"?: number;
    /**
     * 重试作业优先级，取值范围：0~9，取值越大，优先级越高。
     * > 若该参数为空，则重试作业优先级=min{原作业优先级+1, 9}
     * @example `1`
     */
    "JobRetry.Priority"?: number;
    /**
     * 作业重试条件。退出码为参数值时，触发作业重试。
     * > 若该参数为空，退出码非0时触发作业重试。
     * @example `1`
     */
    "JobRetry.OnExitCode"?: number;
    /**
     * 采用异步消息链路提交作业。
     * 默认值：false。
     * @example `false`
     */
    "Async"?: boolean;
}
