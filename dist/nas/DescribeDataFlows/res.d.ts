export interface DescribeDataFlowsResponse {
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
    DataFlowInfo: {
        /**
         * 数据流动信息合集。
         */
        DataFlow: {
            /**
             * 文件系统ID。
             * @example `cpfs-099394bd928c****`
             */
            FileSystemId: string;
            /**
             * 数据流动ID。
             * @example `dfid-194433a5be31****`
             */
            DataFlowId: string;
            /**
             * Fileset ID。
             * @example `fset-1902718ea0ae****`
             */
            FsetId: string;
            /**
             * 数据流动状态。包括：
             * - Starting：数据流动正在创建或启动中。
             * - Running：数据流动已创建完成，正常运行中。
             * - Updating：数据流动正在发生修改，例如提升传输带宽、修改自动更新间隔时间。
             * - Deleting：数据流动删除中。
             * - Stopping：数据流动停止中。
             * - Stopped：数据流动已停止。
             * - Misconfigured：数据流动配置异常，例如源端存储无法访问，传输带宽过低无法完成自动更新。
             * @example `Running`
             */
            Status: string;
            /**
             * 错误信息。包括：
             * - 无（默认值）：表示该数据流动状态正常。
             * - SourceStorageUnreachable：未查询到源端存储的访问路径。
             * - ThroughputTooLow：数据流动带宽过低。
             * @example `无`
             */
            ErrorMessage: string;
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
             * 源端存储的安全保护类型，如果源端存储必须通过安全保护访问，请指定源端存储的安全保护类型。取值：
             * - 无（默认值）：表示源端存储不需要通过安全保护方式访问。
             * - SSL：通过SSL证书保护访问。
             * @example `SSL`
             */
            SourceSecurityType: string;
            /**
             * 数据流动的传输带宽上限，单位：MB/s 。取值：
             * - 600
             * - 1200
             * - 1500
             * > 数据流动的传输带宽必须小于文件系统的IO带宽。
             * @example `600`
             */
            Throughput: number;
            /**
             * 数据流动的描述。
             * 限制：
             * - 长度为2~128个英文或中文字符。
             * - 必须以大小写字母或中文开头，不能以`http://`和`https://`开头。
             * - 可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
             * @example `Bucket01数据流动`
             */
            Description: string;
            /**
             * Fileset的创建时间。
             * 执行ISO8601标准表示，返回格式：`yyyy-MM-ddTHH:mm:ssZ`。
             * @example `2021-09-30T10:08:08Z`
             */
            CreateTime: string;
            /**
             * Fileset的最近一次更新时间。
             * 执行ISO8601标准表示，返回格式：`yyyy-MM-ddTHH:mm:ssZ`。
             * @example `2021-09-30T10:08:08Z`
             */
            UpdateTime: string;
            AutoRefresh: {
                /**
                 * 自动更新策略信息集合。
                 * >目前仅CPFS支持。
                 */
                AutoRefresh: {
                    /**
                     * 自动更新目录，CPFS仅自动检查该目录下的源端数据是否发生更新并自动导入更新的数据。
                     * 限制：
                     * - 长度为2~1024个字符。
                     * - 使用UTF-8编码。
                     * - 必须以/开头和结尾。
                     * > 该目录必须是CPFS上的已有目录，且必须位于开启了数据流动的Fileset中。
                     * @example `/prefix1/prefix2/`
                     */
                    RefreshPath: string;
                }[];
            };
            /**
             * Fileset在CPFS文件系统中的路径。
             * 限制：
             * - 长度为2~1024个英文或中文字符。
             * - 使用UTF-8编码。
             * - 必须以/开头和结尾。
             * - 该目录必须是CPFS上的Fileset目录。
             * >目前仅CPFS支持。
             * @example `/a/b/c/`
             */
            FileSystemPath: string;
            /**
             * 自动更新的描述。
             * >目前仅CPFS支持。
             * @example `自动更新01`
             */
            FsetDescription: string;
            /**
             * 自动更新间隔时间。每隔该时间间隔，CPFS会检查目录内是否存在数据更新，如果有数据更新，启动自动更新任务。单位：分钟。
             * 取值范围：5~526600。默认值：10。
             * >目前仅CPFS支持。
             * @example `10`
             */
            AutoRefreshInterval: number;
            /**
             * 自动更新策略，源端数据更新以后，数据更新导入到CPFS的策略。包括：
             * - None：源端的数据更新不自动导入CPFS，用户可通过数据流动任务导入源端的数据更新。
             * - ImportChanged：源端的数据更新自动导入CPFS。
             * >目前仅CPFS支持。
             * @example `None`
             */
            AutoRefreshPolicy: string;
            /**
             * 源端存储Bucket内的访问路径。
             * > 仅支持CPFS智算版。
             * @example `/prefix/
            `
             */
            SourceStoragePath: string;
        }[];
    };
}
