export interface DescribeFileSystemsResponse {
    FileSystems: {
        /**
         * 文件系统信息集合。
         */
        FileSystem: {
            /**
             * 文件系统状态。包括：
             * - Pending：当前文件系统正在处理任务中。
             * - Running：当前文件系统可用，当状态为Running时才可以进行后续操作（例如：创建挂载点等）。
             * - Stopped：当前文件系统不可用。
             * - Extending：当前文件系统扩容中。
             * - Stopping：当前文件系统停机中。
             * - Deleting：当前文件系统删除中。
             * @example `Pending`
             */
            Status: string;
            /**
             * 低频存储用量。
             * 单位：Byte。
             * @example `362832`
             */
            MeteredIASize: number;
            /**
             * 文件系统的容量。
             * 单位：GiB。
             * @example `100`
             */
            Capacity: number;
            /**
             * 文件系统的创建时间。
             * @example `2020-01-05T16:00:00Z`
             */
            CreateTime: string;
            /**
             * 计费类型。
             * 包括：
             * - Subscription：包年包月
             * - PayAsYouGo：按量付费
             * - Package：已绑定存储包
             * @example `PayAsYouGo`
             */
            ChargeType: string;
            Tags: {
                /**
                 * 文件系统标签信息集合。
                 */
                Tag: {
                    /**
                     * 标签键。
                     * @example `sdf`
                     */
                    Key: string;
                    /**
                     * 标签值。
                     * @example `asd123`
                     */
                    Value: string;
                }[];
            };
            /**
             * 存储类型。
             * 包括：
             * - 通用型NAS：Capacity（容量型）、Performance（性能型）、Premium（高级型）
             * - 极速型NAS：standard（标准型）、advance（高级型）
             * - CPFS：advance_100（100 MB/s/TiB基线）、advance_200（200 MB/s/TiB基线）
             * >仅中国站支持CPFS文件系统。
             * @example `Performance`
             */
            StorageType: string;
            /**
             * 文件系统的标准存储使用量。
             * 非实时使用量，为上一小时最大使用量，单位：Byte。
             * > 如果您需要查看文件系统总存储容量，请参见[查询文件系统资源使用量](~~250243~~)。
             * @example `1611661312`
             */
            MeteredSize: number;
            /**
             * 文件系统的描述信息。
             * @example `31a8e48eda`
             */
            Description: string;
            /**
             * 文件系统的带宽。
             * 单位：MB/s。通用型NAS没有该字段。
             * @example `150`
             */
            Bandwidth: number;
            SupportedFeatures: {
                /**
                 * 文件系统支持的功能集合。
                 */
                SupportedFeature: string[];
            };
            /**
             * 文件系统版本号。
             * 该字段适用于极速型NAS和CPFS。
             * @example `2.3.4`
             */
            Version: string;
            /**
             * 文件系统协议类型。
             * 包括：
             * - NFS：NFS文件协议
             * - SMB：SMB文件协议
             * - cpfs：CPFS文件系统支持的协议类型。
             * >仅中国站支持CPFS文件系统。
             * @example `NFS`
             */
            ProtocolType: string;
            MountTargets: {
                /**
                 * 挂载点信息集合。
                 */
                MountTarget: {
                    /**
                     * 专有网络ID。
                     * @example `vpc-bp1sevsgtqvk5gxbl****`
                     */
                    VpcId: string;
                    /**
                     * 挂载点状态。
                     * 包括：
                     * - Active：可用
                     * - Inactive：不可用
                     * - Pending：任务处理中
                     * - Deleting：删除中
                     * - Hibernating：休眠中
                     * - Hibernated：已休眠
                     * @example `active`
                     */
                    Status: string;
                    ClientMasterNodes: {
                        /**
                         * 客户端管理节点信息集合。
                         * 仅CPFS文件系统返回该参数。
                         */
                        ClientMasterNode: {
                            /**
                             * 管理节点ECS实例ID。
                             * @example `i-hp3i3odi5ory1buo****`
                             */
                            EcsId: string;
                            /**
                             * 管理节点默认登录密码。
                             * @example `123456`
                             */
                            DefaultPasswd: string;
                            /**
                             * 管理节点ECS实例IP。
                             * @example `192.168.1.0`
                             */
                            EcsIp: string;
                        }[];
                    };
                    /**
                     * 挂载点。
                     * @example `109c042666-w****.cn-hangzhou.nas.aliyuncs.com`
                     */
                    MountTargetDomain: string;
                    /**
                     * 挂载点使用的权限组名称。
                     * @example `test-001`
                     */
                    AccessGroupName: string;
                    /**
                     * IPv4和IPv6双栈挂载点。
                     * >仅极速型NAS中国内地各地域支持IPv6功能。
                     * @example `174494b666-x****.dualstack.cn-hangzhou.nas.aliyuncs.com`
                     */
                    DualStackMountTargetDomain: string;
                    /**
                     * 交换机ID。
                     * @example `vsw-bp1omfzsszekkvaxn****`
                     */
                    VswId: string;
                    Tags: {
                        /**
                         * 挂载点标签信息集合。
                         */
                        Tag: {
                            /**
                             * 标签键。
                             * @example `adasfsdfd`
                             */
                            Key: string;
                            /**
                             * 标签值。
                             * @example `afsa`
                             */
                            Value: string;
                        }[];
                    };
                    /**
                     * 网络类型。取值为 vpc，表示专有网络类型。
                     * @example `vpc`
                     */
                    NetworkType: string;
                }[];
            };
            /**
             * KMS密钥ID。
             * @example `0e478b7a-4262-4802-b8cb-00d3fb40****`
             */
            KMSKeyId: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 文件系统类型。
             * 包括：
             * - standard：通用型NAS
             * - extreme：极速型NAS
             * - cpfs：CPFS。
             * >仅中国站支持CPFS文件系统。
             * @example `standard`
             */
            FileSystemType: string;
            /**
             * 文件系统ID。
             * @example `109c04****`
             */
            FileSystemId: string;
            /**
             * 加密类型。
             * 包括：
             * - 0：不加密
             * - 1：NAS托管密钥
             * - 2：用户管理密钥
             * @example `1`
             */
            EncryptType: number;
            /**
             * LDAP配置信息集合。
             * 仅CPFS文件系统返回该参数。
             */
            Ldap: {
                /**
                 * 绑定LDAP的指定条目。
                 * @example `cn=alibaba,dc=com`
                 */
                BindDN: string;
                /**
                 * LDAP搜索起始点。
                 * @example `dc=example`
                 */
                SearchBase: string;
                /**
                 * LDAP服务地址。
                 * @example `ldap://ldap.example.example`
                 */
                URI: string;
            };
            /**
             * 文件系统到期时间。
             * @example `2020-01-05T16:00:00Z`
             */
            ExpiredTime: string;
            /**
             * 文件系统所在的可用区。
             * @example `cn-hangzhou-b`
             */
            ZoneId: string;
            Packages: {
                /**
                 * 存储包信息集合。
                 */
                Package: {
                    /**
                     * 存储包起始时间。
                     * @example `2019-12-05T01:40:56Z`
                     */
                    StartTime: string;
                    /**
                     * 存储包到期时间。
                     * @example `2020-01-05T16:00:00Z`
                     */
                    ExpiredTime: string;
                    /**
                     * 存储包容量。
                     * 单位：Byte。
                     * @example `107374182400`
                     */
                    Size: number;
                    /**
                     * 存储包ID。
                     * @example `naspackage-0be9c4b624-37****`
                     */
                    PackageId: string;
                    /**
                     * 存储包类型。
                     * 包括：
                     * - ssd：性能型
                     * - hybrid：容量型
                     * @example `hybrid`
                     */
                    PackageType: string;
                }[];
            };
            /**
             * 接入点数量。
             * @example `1`
             */
            AccessPointCount: string;
            /**
             * 资源组ID。
             * @example `rg-acfmwavnfdf****
            `
             */
            ResourceGroupId: string;
            /**
             * 归档存储用量。
             * 单位：Byte。
             * @example `1611661312`
             */
            MeteredArchiveSize: number;
            Options: {
                EnableOplock: boolean;
            };
        }[];
    };
    /**
     * 文件系统的总个数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `035B3A3A-E514-4B41-B906-5D906CFB****`
     */
    RequestId: string;
    /**
     * 每个分页包含的文件系统个数。
     * @example `1`
     */
    PageSize: number;
    /**
     * 文件系统列表的分页页码。
     * @example `1`
     */
    PageNumber: number;
}
