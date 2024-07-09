export interface ListFileSystemWithMountTargetsResponse {
    /**
     * 分页查询时设置的每页行数。 取值范围：1~50。 默认值：10。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID
     * @example `25638B77-2F19-5DC5-B578-7790CE92052B`
     */
    RequestId: string;
    /**
     * 分页查询的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 显示列表条目总数。
     * @example `1`
     */
    TotalCount: number;
    FileSystemList: {
        /**
         * 文件系统列表。
         */
        FileSystems: {
            /**
             * 文件系统状态。可能值：
             * - Pending：当前文件系统正在处理任务中。
             * - Running：当前文件系统可用。
             * - Stopped：当前文件系统不可用。
             * - Extending：当前文件系统扩容中。
             * - Stopping：当前文件系统停机中。
             * - Deleting：当前文件系统删除中。
             * @example `Running`
             */
            Status: string;
            /**
             * 文件系统的容量。单位：GiB
             * @example `5120`
             */
            Capacity: number;
            /**
             * 文件系统创建时间。
             * @example `2018-07-26 16:36:27`
             */
            CreateTime: string;
            /**
             * 存储规格类型。
             * - 当FileSystemType为standard时，可能值：Capacity（容量型）、Performance（性能型）
             * - 当FileSystemType为extreme时，可能值：standard（标准型）、advance（高级型）
             * <props="china">
             * - 当FileSystemType为CPFS时，可能值：advance_100（100MB/s/TiB基线）、advance_200（200MB/s/TiB基线）</props>
             * @example `Performance`
             */
            StorageType: string;
            /**
             * 文件系统的带宽。单位：MB/s
             * @example `150`
             */
            BandWidth: number;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 文件系统ID。
             * @example `088b****`
             */
            FileSystemId: string;
            /**
             * 文件系统类型，可能值：
             * - standard：通用型NAS
             * - extreme：极速型NAS
             * <props="china">
             * - cpfs：CPFS</props>
             * @example `standard`
             */
            FileSystemType: string;
            /**
             * NAS文件系统已使用的容量，单位为Byte。
             * @example `1216816455`
             */
            MeteredSize: number;
            /**
             * 文件系统是否加密。
             * 使用KMS服务托管密钥，对文件系统落盘数据进行加密存储。在读写加密数据时，无需解密。
             * 取值：
             * - 0（默认值）：不加密。
             * - 1：NAS托管密钥。当FileSystemType=standard或extreme时，支持NAS托管密钥。
             * - 2：用户管理密钥。仅当FileSystemType=extreme时，支持用户管理密钥。
             * @example `0`
             */
            EncryptType: number;
            /**
             * 文件系统的协议类型。可能值：
             * - NFS- SMB
             * <props="china">
             * - CPFS</props>
             * @example `NFS`
             */
            ProtocolType: string;
            /**
             * 文件系统描述。
             * @example `FilesDescription`
             */
            Destription: string;
            PackageList: {
                /**
                 * 存储包信息列表。
                 */
                Packages: {
                    /**
                     * 存储包ID。
                     * @example `naspackage-0be9c4b624-37****`
                     */
                    PackageId: string;
                }[];
            };
            MountTargetList: {
                /**
                 * 挂载点列表。
                 */
                MountTargets: {
                    /**
                     * 挂载点状态。可能值：
                     * - Active：可用
                     * - Inactive：不可用
                     * - Pending：任务排队中
                     * - Deleting：删除中
                     * @example `Active`
                     */
                    Status: string;
                    /**
                     * 专有网络ID。
                     * @example `vpc-8vbvb34rtyh6xb3zrehs1****`
                     */
                    VpcId: string;
                    /**
                     * 挂载目标域。
                     * @example `088b****-lj2.cn-hangzhou.nas.aliyuncs.com`
                     */
                    MountTargetDomain: string;
                    /**
                     * 权限组是否为用户的默认权限组。
                     * 包括：
                     * - true：该权限组为默认权限组。当该权限组为默认权限组时，允许所有IP地址访问，且用户无法删除默认权限组及权限组内的权限规则。
                     * - false：该权限组不是默认权限组。
                     * @example `DEFAULT_VPC_GROUP_NAME`
                     */
                    AccessGroup: string;
                    /**
                     * 交换机ID。
                     * @example `vsw-8vb34rtyh6xb3zrehs1****`
                     */
                    VswId: string;
                    /**
                     * 网络类型。可能值：
                     * - vpc：专有网络
                     * - classic：经典网络
                     * @example `vpc`
                     */
                    NetworkType: string;
                }[];
            };
            /**
             * 专有网络ID。
             * @example `vpc-bp132kgui8n0targbn1cm`
             */
            VpcId: string;
        }[];
    };
}
