export interface EditJobTemplateRequest {
    /**
     * 作业模板ID。
     * 您可以通过调用[ListJobTemplates](~~87248~~)获取待修改的模板ID。
     * @example `ehpc-job-tmpl-6RxO5y****`
     */
    "TemplateId": string;
    /**
     * 执行作业命令。
     * @example `./LammpsTest/lammps.pbs`
     */
    "CommandLine": string;
    /**
     * 作业模板名称。
     * 您可以通过调用[ListJobTemplates](~~87248~~)获取待修改的模板名称。
     * @example `jobTemapleteName`
     */
    "Name": string;
    /**
     * 执行作业的用户名。
     * 您可以通过调用[ListUsers](~~188572~~)获取用户名。
     * @example `user`
     */
    "RunasUser"?: string;
    /**
     * 执行作业优先级，取值范围：0~9，取值越大，优先级越高。
     * 默认值：0
     * @example `0`
     */
    "Priority"?: number;
    /**
     * 执行作业路径。
     * @example `./packageFolder`
     */
    "PackagePath"?: string;
    /**
     * 标准输出路径。
     * @example `./LammpsTest`
     */
    "StdoutRedirectPath"?: string;
    /**
     * 错误输出路径。
     * @example `./Lammps`
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
     * 作业队列。
     * 格式X-Y:Z， 最小值X是第一个索引，最大值Y是最后一个索引，Z表示步长，例如2-7:2，表示作业队列包含编号为2、4、6的3个子作业。
     * @example `1-10:2`
     */
    "ArrayRequest"?: string;
    /**
     * 执行作业的环境变量，可以在作业执行文件中访问环境变量。
     * @example `[{Name:,Value:},{Name:,Value:}]`
     */
    "Variables"?: string;
    /**
     * 执行作业的队列名称。
     * @example `workq`
     */
    "Queue"?: string;
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
     * 提交作业所需计算节点数。取值范围：1~500
     * >若该参数为空，则参数Task、Thread、Mem、Gpu不生效。
     * @example `2`
     */
    "Node"?: number;
    /**
     * 单个计算节点所需任务数。取值范围：1~1000
     * @example `2`
     */
    "Task"?: number;
    /**
     * 单个任务所需线程数。取值范围：1~1000
     * @example `1`
     */
    "Thread"?: number;
    /**
     * 单个计算节点最大使用内存数，支持GB、MB、KB，单位不区分大小写。
     * @example `1GB`
     */
    "Mem"?: string;
    /**
     * 单个计算节点使用GPU的数量，取值范围：1~8。
     * 仅支持使用pbs调度器的集群，且集群内计算节点含GPU时该参数生效。
     * @example `1`
     */
    "Gpu"?: number;
    /**
     * 已上传到OSS上的作业文件链接。
     * @example `https://test.oss-cn-beijing.aliyuncs.com/test.py`
     */
    "InputFileUrl"?: string;
    /**
     * 是否解压下载后的作业文件。取值范围：
     * - true：是
     * - false：否
     * @example `true`
     */
    "WithUnzipCmd"?: boolean;
    /**
     * 解压命令，当WithUnzipCmd取值为true时，该参数生效。取值范围：
     * - tar xzf：解开gzip格式压缩包
     * - tar xf：解开tar格式压缩包
     * - unzip：解开zip格式压缩包
     * @example `tar xzf`
     */
    "UnzipCmd"?: string;
}
