export interface ListCpfsFileSystemsResponse {
    /**
     * 本页条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `2B900AFE-C938-4551-86E9-97E231BBC876`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目总数。
     * @example `10`
     */
    TotalCount: number;
    FileSystemList: {
        /**
         * 文件系统列表。
         */
        FileSystems: {
            /**
             * 文件系统ID。
             * @example `096751****`
             */
            FileSystemId: string;
            /**
             * 文件系统容量。单位：GiB
             * @example `5120`
             */
            Capacity: string;
            /**
             * 文件系统创建时间。
             * @example `2018-07-26 16:36:27`
             */
            CreateTime: string;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-b`
             */
            ZoneId: string;
            /**
             * 挂载的文件存储的协议类型。可能值：
             * - NFS
             * - SMB
             * @example `NFS`
             */
            ProtocolType: string;
            /**
             * 文件系统描述。
             * @example `FilsDestription`
             */
            Destription: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            MountTargetList: {
                /**
                 * 挂载点列表。
                 */
                MountTargets: {
                    /**
                     * 专有网络ID。
                     * @example `vpc-8vbvb34rtyh6xb3zrehs1****`
                     */
                    VpcId: string;
                    /**
                     * 挂载点状态。可能值：
                     * - Active：可用
                     * - Inactive：不可用
                     * - Pending：挂载中
                     * - Deleting：删除中
                     * @example `Active`
                     */
                    Status: string;
                    /**
                     * 交换机ID。
                     * @example `vsw-8vb34rtyh6xb3zrehs1****`
                     */
                    VswId: string;
                    /**
                     * 网络类型。
                     * @example `VPC`
                     */
                    NetworkType: string;
                    /**
                     * 挂载目标域。
                     * @example `c0967****.cn-hangzhou.cpfs.nas.aliyuncs.com`
                     */
                    MountTargetDomain: string;
                }[];
            };
        }[];
    };
}
