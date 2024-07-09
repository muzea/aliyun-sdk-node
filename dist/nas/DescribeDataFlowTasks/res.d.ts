export interface DescribeDataFlowTasksResponse {
    /**
     * 请求ID。
     * @example `2D69A58F-345C-4FDE-88E4-BF518948****`
     */
    RequestId: string;
    /**
     * 当请求的返回结果被截断时，您可以使用NextToken再次发起请求，获取从当前截断位置之后的内容。
     * @example `TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=`
     */
    NextToken: string;
    TaskInfo: {
        /**
         * 数据流动任务的信息集合。
         */
        Task: {
            /**
             * 文件系统ID。
             * @example `cpfs-099394bd928c****`
             */
            FilesystemId: string;
            /**
             * 数据流动ID。
             * @example `dfid-194433a5be3****`
             */
            DataFlowId: string;
            /**
             * 数据流动任务ID。
             * @example `taskId-12345678`
             */
            TaskId: string;
            /**
             * 源端存储的访问路径。格式：`<storage type>://<path>`。
             * 其中：
             * - storage type：目前只支持OSS。
             * - path：OSS的bucket名称。
             *     - 仅支持小写字母、数字和短划线（-）且必须以小写字母或者数字开头和结尾。
             *     - 长度为8~128个英文字符。
             *     - 使用UTF-8编码。
             *     - 不能以http://和https://开头。
             * > OSS Bucket必须为在该地域已存在的Bucket。
             * @example `oss://bucket1`
             */
            SourceStorage: string;
            /**
             * Fileset在CPFS文件系统中的路径。
             * 限制：
             * - 长度为2~1024个英文或中文字符。
             * - 使用UTF-8编码。
             * - 必须以/开头和结尾。
             * - 该目录必须是CPFS上的Fileset目录。
             * @example `/a/b/c/`
             */
            FileSystemPath: string;
            /**
             * 数据流动任务的发起者。
             * 包括：
             * - User：用户是该任务的发起者。
             * - System：该任务是自动更新任务，是CPFS根据自动更新间隔时间自动发起的任务。
             * @example `User`
             */
            Originator: string;
            /**
             * 数据流动任务类型。包括：
             * - Import：从源端存储将指定的数据导入至CPFS。
             * - Export：将CPFS上指定的数据导出至源端存储。
             * - Evict：释放CPFS上文件的数据块，释放后文件在CPFS上只保留元数据，您仍能查询该文件，但文件数据块已清除，不占用CPFS上的存储容量。当访问该文件数据时，将再从源端存储按需加载。
             * - Inventory：获取CPFS上数据流动管理的文件清单，可提供文件在数据流动中的缓存状态。
             * @example `Import`
             */
            TaskAction: string;
            /**
             * 数据流动任务操作的数据类型。包括：
             * - Metadata：文件的元数据，包括文件的timestamp, ownership, permission等属性信息。选择Metadata，只会导入文件的元数据，用户只能看到该文件，但访问该文件数据时，数据从源端存储按需加载。
             * - Data：文件的数据块。
             * - MetaAndData：文件的元数据和数据块。
             * > CPFS智算版仅支持 MetaAndData 类型。
             * @example `MetaAndData `
             */
            DataType: string;
            /**
             * 数据流动任务的进度。当前数据流动任务已经执行的操作数量。
             * @example `240`
             */
            Progress: number;
            /**
             * 数据流动任务的状态。包括：
             * - Pending: 数据流动任务已创建，在排队中未开始执行。
             * - Executing：数据流动任务在执行中。
             * - Failed：数据流动任务执行失败，可以通过查看数据流动任务报告，查看失败原因。
             * - Completed：数据流动任务执行结束，可以通过查看数据流动任务报告，查看所有文件已正确传输。
             * - Canceled：数据流动任务被取消并且没有完成。
             * - Canceling：数据流动任务正在被取消。
             * @example `Executing`
             */
            Status: string;
            /**
             * 数据流动任务报告在CPFS文件系统中保存的路径。
             * - CPFS的任务报告会生成在该CPFS的`.dataflow_report`目录中。
             * - CPFS智算版会返回一个oss下载链接，可以通过链接下载任务报告。
             * @example `/path_in_cpfs/reportfile.cvs`
             */
            ReportPath: string;
            /**
             * 任务创建时间。
             * @example `2021-08-04 18:27:35`
             */
            CreateTime: string;
            /**
             * 任务开始执行时间。
             * @example `2021-08-04 18:27:35`
             */
            StartTime: string;
            /**
             * 任务结束时间。
             * @example `2021-08-04 18:27:35`
             */
            EndTime: string;
            /**
             * 智能目录路径。
             * @example `/aa/`
             */
            FsPath: string;
            /**
             * 同名文件冲突策略。
             * @example `KEEP_LATEST`
             */
            ConflictPolicy: string;
            /**
             * 数据流动任务执行的目录。
             * @example `/path_in_cpfs/`
             */
            Directory: string;
        }[];
    };
}
