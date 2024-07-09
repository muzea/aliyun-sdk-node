export interface DescribeFileSystemsResponse {
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 单页行数。
     * @example `2`
     */
    PageSize: number;
    /**
     * 总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 文件系统信息集合。
     */
    FileSystems: {
        /**
         * 文件系统ID。
         * @example `c50f8*****`
         */
        FileSystemId: string;
        /**
         * 文件系统名称。
         * @example `FileSystem1`
         */
        FileSystemName: string;
        /**
         * 地域ID。
         * @example `cn-beijing-cmcc`
         */
        EnsRegionId: string;
        /**
         * 存储类型。取值：
         * - capacity：容量型
         * - performance：极速型
         * @example `capacity`
         */
        StorageType: string;
        /**
         * 文件系统协议类型。取值：
         * - NFS：NFS文件协议
         * - SMB：SMB文件协议
         * @example `NFS`
         */
        ProtocolType: string;
        /**
         * 容量。单位：MiB。
         * @example `100000`
         */
        Capacity: number;
        /**
         * 文件系统的使用量。
         * 非实时使用量，为上一小时最大使用量，单位：Byte。
         * @example `102400`
         */
        MeteredSize: number;
        /**
         * 文件系统状态
         * - pending：当前文件系统正在处理任务中。
         * - running：当前文件系统可用，当状态为running时才可以进行后续操作（例如：创建挂载点等）。
         * - stopped：当前文件系统不可用。
         * - extending：当前文件系统扩容中。
         * - stopping：当前文件系统停机中。
         * - deleting：当前文件系统删除中。
         * @example `running`
         */
        Status: string;
        /**
         * 付费类型。取值：PostPaid（后付费）。
         * @example `PostPaid`
         */
        PayType: string;
        /**
         * 文件系统创建时间。
         * @example `2022-08-31 12:00:00`
         */
        CreationTime: string;
        /**
         * 挂载点信息集合
         */
        MountTargets: {
            /**
             * 挂载点路径。
             * @example `*.*.*.*:/${FileSystemName}/{MountTargetName}`
             */
            MountTargetDomain: string;
            /**
             * 挂载点名称。
             * @example `target1`
             */
            MountTargetName: string;
            /**
             * 网络ID。
             * @example `n-****`
             */
            NetWorkId: string;
            /**
             * 挂载点状态。取值：
             * - active：可用
             * - inactive：不可用
             * - pending：任务处理中
             * - deleting：删除中
             * @example `active`
             */
            Status: string;
        }[];
    }[];
    /**
     * 请求ID。
     * @example `762DD527-358B-1E48-8005-CCE3ED4EB9E0`
     */
    RequestId: string;
}
