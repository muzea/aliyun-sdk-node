export interface CreateJobRequest {
    /**
     * 请求Body参数。
     */
    "body"?: {
        /**
         * 任务的名称，命名格式如下：
         * - 名称长度不超过256个字符。
         * - 允许数字、字母、下划线（_）、英文句号（.）和短横线（-）。
         * @example `tf-mnist-test`
         */
        DisplayName: string;
        /**
         * 任务类型，大小写敏感。当前支持的任务类型：
         * - TFJob
         * - PyTorchJob
         * - XGBoostJob
         * - OneFlowJob
         * - ElasticBatch
         * @example `TFJob`
         */
        JobType: string;
        /**
         * **JobSpecs**描述任务运行时的各种配置，诸如镜像地址、启动命令、节点资源申明、副本数量等。
         * DLC任务由不同类型的节点组成，同一类型的节点拥有完全相同的配置，这种配置被称为一个JobSpec。**JobSpecs**描述所有类型节点的配置，是JobSpec的数组。
         */
        JobSpecs: any[];
        /**
         * 任务所有节点的启动命令。
         * @example `python /root/code/mnist.py`
         */
        UserCommand: string;
        /**
         * 任务运行所使用的数据源列表。
         */
        DataSources: {
            /**
             * 数据源的ID。如何查看数据源ID，请参见[ListDatasets](~~457222~~)。
             * @example `d-cn9dl*******`
             */
            DataSourceId: string;
            /**
             * 本任务需要挂载的路径，可选参数，默认使用数据源中的挂载路径。
             * @example `/root/data`
             */
            MountPath: string;
            /**
             *
             * @example `oss://bucket.oss-cn-hangzhou-internal.aliyuncs.com/path/`
             */
            Uri: string;
        }[];
        /**
         * 本任务使用的代码源。任务的节点启动之前，DLC会自动下载代码源中配置好的代码，并Mount到容器的本地目录。
         */
        CodeSource: {
            /**
             * 代码源ID。如何获取代码源ID，请参见[ListCodeSources ](~~459922~~)。
             * @example `code-20210111103721-xxxxxxx`
             */
            CodeSourceId: string;
            /**
             * 本任务运行时，引用的代码仓库的分支，可选参数，默认使用代码源中的配置分支字段。
             * @example `master`
             */
            Branch: string;
            /**
             * 本任务需要下载的代码Commit ID，可选参数，默认使用代码源中的CommitID配置。
             * @example `44da109b5******`
             */
            Commit: string;
            /**
             * 本次任务需要挂载的路径，可选参数，默认使用代码源中配置挂载路径。
             * @example `/root/data`
             */
            MountPath: string;
        };
        /**
         * 用户VPC配置。
         */
        UserVpc: {
            /**
             * 用户VPC的ID。
             * @example `vpc-abcdef****`
             */
            VpcId: string;
            /**
             * 用户交换机的ID，可选参数
             * - 参数值为空时系统会根据库存情况自动选择合适的交换机；
             * - 也可以自己指定交换机ID。
             * @example `vs-abcdef****`
             */
            SwitchId: string;
            /**
             * 用户安全组的ID。
             * @example `sg-abcdef****`
             */
            SecurityGroupId: string;
            /**
             * 扩展网段
             * - 当交换机ID为空时，此参数可以不提供，系统会自动获取VPC下的所有网段；
             * - 当交换机ID不为空时，此参数必须提供，建议填写VPC下的所有网段。
             */
            ExtendedCIDRs: string[];
            /**
             * 默认路由。取值如下：
             * - eth0：表示使用默认网卡，通过公共网关访问外部网络。
             * - eth1：表示使用用户弹性网卡，通过私有网关访问外部网络。具体配置方法，请参考[配置DSW实例通过专有公网网关访问公网](~~2525343~~)。
             * @example `eth0`
             */
            DefaultRoute: string;
        };
        /**
         * 待安装的Python三方库列表。
         */
        ThirdpartyLibs: string[];
        /**
         * Python三方库（requirements.txt）文件所在文件夹名称；每个节点在运行指定的UserCommand之前，PAI-DLC会从指定文件夹取出requirements.txt文件，并调用`pip install -r`安装。
         * @example `/root/code/`
         */
        ThirdpartyLibDir: string;
        /**
         * 环境变量配置。
         */
        Envs: any;
        /**
         * 作业最长运行时长，单位为分钟。
         * @example `1024`
         */
        JobMaxRunningTimeMinutes: number;
        /**
         * 工作空间ID，如何获取工作空间ID，请参见[ListWorkspaces](~~449124~~)。
         * @example `ws-20210126170216-xxxxxxx`
         */
        WorkspaceId: string;
        /**
         * 资源组ID，可选参数。
         * - 参数值为空表示提交到公共资源组。
         * - 如果当前工作空间已经绑定专有资源组，此处可以指定对应的资源组ID；如何创建专有资源组、查询专有资源组ID，详情请参见[准备及管理DLC资源组集群](https://help.aliyun.com/document_detail/202827.html#section-yhx-u5z-nh8)。
         * @example `rs-xxx`
         */
        ResourceId: string;
        /**
         * 任务的优先级，可选参数，默认值1，参数值的范围是1~9。其中：
         * - 1为最低优先级。
         * - 9为最高优先级。
         * @example `8`
         */
        Priority: number;
        /**
         * 作业额外参数配置。
         */
        Settings: any;
        /**
         * 该参数暂未支持，无需关注。
         */
        ElasticSpec: any;
        /**
         * 该参数暂未支持，无需关注。
         * @example `“”`
         */
        DebuggerConfigContent: string;
        /**
         * 本任务的额外配置，通过此参数可以调整挂载的数据源的一些行为。如任务有挂载OSS类型的数据源时，可以通过将此参数配置为 `fs.oss.download.thread.concurrency=4,fs.oss.download.queue.size=16` ，覆盖JindoFS的默认参数。
         * @example `key1=value1,key2=value2`
         */
        Options: string;
        /**
         * 分布式多机任务的成功策略，目前只有Tensorflow的多机任务支持。
         * - ChiefWorker：当指定为这个值的时候，只要Chief的pod成功结束，那么就认为整个任务成功结束。
         * - AllWorkers（默认值）：必须是所有的Worker全部成功，才会认为整个任务成功。
         * @example `AllWorkers`
         */
        SuccessPolicy: string;
        CredentialConfig: any;
    };
}
