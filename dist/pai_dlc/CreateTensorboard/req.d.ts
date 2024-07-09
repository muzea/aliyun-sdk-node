export interface CreateTensorboardRequest {
    /**
     * 请求参数。
     * @example `380`
     */
    "body"?: {
        /**
         * 工作空间ID。如何获取工作空间ID，请参见[ListWorkspaces](~~449124~~)。
         * @example `123***`
         */
        WorkspaceId: string;
        /**
         * 任务ID。如何获取任务ID，请参见[ListJobs](~~459676~~)。
         * @example `dlc-20210126170216-mtl37ge7gkvdz`
         */
        JobId: string;
        /**
         * 数据集ID，如何获取数据集ID，请参见[ListDatasets](~~457222~~)。
         * @example `d-xxxxxxxx`
         */
        DataSourceId: string;
        /**
         * 数据集类型，取值如下：
         * - OSS
         * - NAS
         * @example `OSS`
         */
        DataSourceType: string;
        /**
         * 数据集的URI：
         * - 当DataSourceType为OSS时，格式为：`oss://[oss-bucket].[endpoint]/[path]`。
         * - 当DataSourceType为NAS时，格式为：`nas://[nas-filesystem-id].[region]/[path]`。
         * @example `oss://.oss-cn-shanghai-finance-1.aliyuncs.com/`
         */
        Uri: string;
        /**
         * 数据集的扩展字段为JSON格式，当前支持MountPath：自定义数据集挂载的路径。
         * @example `{"mountpath":"/root/data/"}`
         */
        Options: string;
        /**
         * Summary目录。
         * @example `/root/data/`
         */
        SummaryPath: string;
        /**
         * Summary相对目录。
         * @example `/summary/`
         */
        SummaryRelativePath: string;
        /**
         * Tensorboard名称。
         * @example `tensorboard`
         */
        DisplayName: string;
        /**
         * 来源类型。
         * @example `job`
         */
        SourceType: string;
        /**
         * 来源ID。
         * @example `dlc-xxxxxx`
         */
        SourceId: string;
        /**
         * 最长运行时长，单位为：分钟。
         * @example `240`
         */
        MaxRunningTimeMinutes: number;
        /**
         * 数据源配置。
         */
        DataSources: any[];
        /**
         * CPU核数。
         * @example `1`
         */
        Cpu: number;
        /**
         * 内存大小，单位为：GB。
         * @example `1000`
         */
        Memory: number;
        /**
         * Tensorboard任务挂载的数据集配置列表。
         */
        TensorboardDataSources: any[];
        /**
         * Tensorboard后付费配置信息，用于创建使用后付费资源的Tensorboard任务。
         */
        TensorboardSpec: any;
    };
}
