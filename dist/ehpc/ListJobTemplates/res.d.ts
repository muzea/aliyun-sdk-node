export interface ListJobTemplatesResponse {
    /**
     * 本页条数。
     * @example `1`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE7****`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目总数。
     * @example `1`
     */
    TotalCount: number;
    Templates: {
        /**
         * 作业模板信息列表。
         */
        JobTemplates: {
            /**
             * 单个计算节点所需任务数。可能值：1~1000
             * @example `2`
             */
            Task: number;
            /**
             * 作业的环境变量。
             * @example `[{Name:,Value:},{Name:,Value:}]`
             */
            Variables: string;
            /**
             * 执行作业命令。
             * @example `./LammpsTest/lammps.pbs`
             */
            CommandLine: string;
            /**
             * 作业队列。
             * @example `workq`
             */
            Queue: string;
            /**
             * 作业优先级。可能值：0~9，取值越大，优先级越高。
             * @example `0`
             */
            Priority: number;
            /**
             * 单个计算节点最大使用内存数。支持GB、MB、KB，单位不区分大小写。
             * @example `1GB`
             */
            Mem: string;
            /**
             * 单个任务所需线程数。可能值：1~1000
             * @example `1`
             */
            Thread: number;
            /**
             * 作业队列。
             * 格式为X-Y:Z， 最小值X是第一个索引，最大值Y是最后一个索引，Z表示步长，例如2-7:2，表示作业队列包含编号为2、4、6的3个子作业。
             * @example `2-7:2`
             */
            ArrayRequest: string;
            /**
             * 错误输出路径。
             * @example `./LammpsTest`
             */
            StderrRedirectPath: string;
            /**
             * 提交作业所需计算节点数。可能值：1~500
             * @example `2`
             */
            Node: number;
            /**
             * 标准输出路径。
             * @example `./Lammps`
             */
            StdoutRedirectPath: string;
            /**
             * 单个计算节点使用GPU的数量。可能值：1~8。
             * 仅支持使用pbs调度器的集群，且集群内计算节点含GPU时该参数生效。
             * @example `1`
             */
            Gpu: number;
            /**
             * 执行作业路径。
             * @example `./jobfolder`
             */
            PackagePath: string;
            /**
             * 作业最大运行时间。支持三种格式：
             * - hh:mm:ss
             * - mm:ss
             * - ss
             * @example `12:00:00`
             */
            ClockTime: string;
            /**
             * 是否支持重新执行作业。可能值：
             * - true：支持
             * - false：不支持
             * @example `false`
             */
            ReRunable: boolean;
            /**
             * 作业模板名称。
             * @example `job1`
             */
            Name: string;
            /**
             * 作业模板ID。
             * @example `ehpc-job-tmpl-6RxO5y****`
             */
            Id: string;
            /**
             * 执行作业的用户名称。
             * @example `user1`
             */
            RunasUser: string;
            /**
             * 已上传到OSS上的作业文件链接。
             * @example `https://test.oss-cn-beijing.aliyuncs.com/test.py`
             */
            InputFileUrl: string;
            /**
             * 是否解压下载后的作业文件。取值范围：
             * - true：是
             * - false：否
             * @example `true`
             */
            WithUnzipCmd: boolean;
            /**
             * 解压命令，当WithUnzipCmd取值为true时，该参数生效。取值范围：
             * - tar xzf：解开gzip格式压缩包
             * - tar xf：解开tar格式压缩包
             * - unzip：解开zip格式压缩包
             * @example `tar xzf`
             */
            UnzipCmd: string;
        }[];
    };
}
