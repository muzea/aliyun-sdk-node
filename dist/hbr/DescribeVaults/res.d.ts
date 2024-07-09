export interface DescribeVaultsResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回码。200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息描述，成功一般返回successful，错误时会返回相应错误信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 分页页码，从1开始，默认值为1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页大小，最小值为1，最大值为99，默认值为10。
     * @example `10`
     */
    PageSize: number;
    /**
     * 返回备份仓库总数量。
     * @example `8`
     */
    TotalCount: number;
    Vaults: {
        /**
         * 备份仓库列表。
         * @example `{'Vault': []}`
         */
        Vault: {
            /**
             * 备份仓库状态。
             *   - **UNKNOWN**：未知
             *   - **INITIALIZING**：初始化中
             *   - **CREATED**：已创建
             *   - **ERROR**：错误
             * @example `CREATED`
             */
            Status: string;
            /**
             * 备份仓库ID。
             * @example `v-*********************`
             */
            VaultId: string;
            /**
             * 备份仓库计费类型。
             * @example `FREE`
             */
            ChargeType: string;
            /**
             * 备份仓库类型。取值仅为**STANDARD**，表示普通仓库。
             * @example `STANDARD`
             */
            VaultType: string;
            /**
             * 是否开启重删功能。
             * @example `true`
             */
            Dedup: boolean;
            /**
             * 异地备份仓库源仓库ID。
             * @example `v-*********************`
             */
            ReplicationSourceVaultId: string;
            /**
             * 索引更新时间。
             * @example `1639645628`
             */
            IndexUpdateTime: number;
            /**
             * 仓库描述。
             * @example `vault description`
             */
            Description: string;
            /**
             * 备份仓库存储类型。取值仅为**STANDARD**，表示标准存储。
             * @example `STANDARD`
             */
            VaultStorageClass: string;
            /**
             * 备份库保留时长，单位：天。
             * @example `2`
             */
            Retention: number;
            /**
             * 备份仓库创建时间。UNIX时间戳，单位秒。
             * @example `1554347313`
             */
            CreatedTime: number;
            /**
             * 索引等级。
             * - OFF：不创建索引
             * - META：元数据索引
             * - ALL：全文索引
             * @example `OFF`
             */
            IndexLevel: string;
            /**
             * 备份仓库名称。
             * @example `vaultname`
             */
            VaultName: string;
            /**
             * 备份库使用量。单位为Byte。
             * @example `10`
             */
            StorageSize: number;
            /**
             * 最后一次异地备份同步时间。UNIX时间戳，单位为秒。
             * @example `1554347313`
             */
            LatestReplicationTime: number;
            /**
             * （仅异地备份仓库有效）仓库错误状态信息，取值范围：
             *   - **UNKNOWN_ERROR**表示未知错误。
             *   - **SOURCE_VAULT_ALREADY_HAS_REPLICATION**表示复制源仓库已经设置了其他镜像仓库。
             * @example `SOURCE_VAULT_ALREADY_HAS_REPLICATION`
             */
            VaultStatusMessage: string;
            /**
             * 是否为异地备份仓库。
             *   - true：异地备份仓库。
             *   - false：本地备份仓库。
             * @example `false`
             */
            Replication: boolean;
            /**
             * 异地备份库的源库所属地域ID（仅对异地备份库有效）
             * @example `cn-shanghai`
             */
            ReplicationSourceRegionId: string;
            /**
             * 备份仓库所属的地域ID。
             * @example `cn-shanghai`
             */
            VaultRegionId: string;
            /**
             * 备份仓库更新时间。UNIX时间戳，单位为秒。
             * @example `1554347313`
             */
            UpdatedTime: number;
            /**
             * 资源组ID。
             * @example `rg-*********************`
             */
            ResourceGroupId: string;
            /**
             * 备份仓库试用的oss bucket名称。
             * @example `hbr-0005i51******t58`
             */
            BucketName: string;
            /**
             * 是否开启备份搜索。
             * @example `true`
             */
            SearchEnabled: boolean;
            /**
             * 索引是否可用（不处于更新状态）。
             * @example `true`
             */
            IndexAvailable: boolean;
            /**
             * 备份数据量。单位为Byte。
             * @example `20`
             */
            BytesDone: number;
            Tags: {
                /**
                 * 备份仓库的标签信息。
                 */
                Tag: {
                    /**
                     * 仓库的标签键。N的取值范围：1~20。
                     *   - 不支持以`aliyun`、`acs:`开头。
                     *   - 不允许包含`http://`和`https://`。
                     *   - 不允许为空字符串。
                     * @example `aaa`
                     */
                    Key: string;
                    /**
                     * 仓库的标签值。N的取值范围：1~20。
                     *   - 不支持以`aliyun`、`acs:`开头。
                     *   - 不允许包含`http://`和`https://`。
                     *   - 不允许为空字符串。
                     * @example `a1`
                     */
                    Value: string;
                }[];
            };
            SourceTypes: {
                /**
                 * 备份仓库备份的数据源类型。
                 */
                SourceType: string[];
            };
            /**
             * 镜像仓库数据同步进度。
             */
            ReplicationProgress: {
                /**
                 * 镜像仓库历史数据同步进度。取值0~100。
                 * @example `100`
                 */
                HistoricalReplicationProgress: number;
                /**
                 * 镜像仓库增量数据最新同步时间。
                 * @example `1579413159`
                 */
                NewReplicationProgress: number;
            };
            /**
             * 备份仓库备份计划统计。
             */
            BackupPlanStatistics: {
                /**
                 * Oracle类型备份计划数量。
                 * @example `1`
                 */
                Oracle: number;
                /**
                 * 本地服务器类型备份计划数量。
                 * @example `1`
                 */
                LocalFile: number;
                /**
                 * NAS类型备份计划数量。
                 * @example `1`
                 */
                Nas: number;
                /**
                 * 通用NAS类型备份计划数量。
                 * @example `1`
                 */
                CommonNas: number;
                /**
                 * Isilon类型备份计划数量。
                 * @example `1`
                 */
                Isilon: number;
                /**
                 * OSS类型备份计划数量。
                 * @example `1`
                 */
                Oss: number;
                /**
                 * SQL Server类型备份计划数量。
                 * @example `1`
                 */
                SqlServer: number;
                /**
                 * 云存储网关类型备份计划数量。
                 * @example `1`
                 */
                Csg: number;
                /**
                 * ECS文件类型备份计划数量。
                 * @example `1`
                 */
                EcsFile: number;
                /**
                 * MySQL类型备份计划数量。
                 * @example `1`
                 */
                MySql: number;
                /**
                 * SAP HANA类型备份计划数量。
                 * @example `1`
                 */
                EcsHana: number;
                /**
                 * 本地虚拟机备份计划数量。
                 * @example `1`
                 */
                LocalVm: number;
                /**
                 * 表格存储类型备份计划数量。
                 * @example `1`
                 */
                Ots: number;
            };
            /**
             * 免费试用属性。
             */
            TrialInfo: {
                /**
                 * 免费试用开始时间。
                 * @example `1579413159`
                 */
                TrialStartTime: number;
                /**
                 * 免费试用仓库释放时间。
                 * @example `1594965600`
                 */
                TrialVaultReleaseTime: number;
                /**
                 * 免费试用过期时间。
                 * @example `1584597600`
                 */
                TrialExpireTime: number;
                /**
                 * 免费试用结束后是否转为按量付费。
                 * @example `true`
                 */
                KeepAfterTrialExpiration: boolean;
            };
            /**
             * 备份仓库加密类型。
             * - NONE：不加密
             * - HBR_PRIVATE：HBR提供密钥加密（默认）
             * - KMS：使用用户的KMS key加密
             * @example `HBR_PRIVATE`
             */
            EncryptType: string;
            /**
             * 是否开启备份锁定。
             * @example `true`
             */
            WormEnabled: boolean;
            /**
             * 仓库内的快照数量。
             * @example `0`
             */
            SnapshotCount: number;
            /**
             * 对备份库进行压缩的加密算法，取值包括：
             * - DISABLED：不压缩加密。
             * - SNAPPY：使用SNAPPY加密算法。
             * - ZSTD： 即Zstandard，一种快速的无损压缩算法。
             * @example `ZSTD`
             */
            CompressionAlgorithm: string;
            /**
             * 备份仓库的数据冗余存储方式。取值包括：
             * - LRS：备份库（本地冗余 LRS）。采用数据冗余存储机制，将每个对象的不同冗余存储在同一个可用区内多个设施的多个设备上，确保硬件失效时的数据持久性和可用性。
             * - ZRS：备份库（同城冗余 ZRS）。采用多可用区（AZ）机制，将用户的数据分散存放在同一地域（Region）的3个可用区。当某个可用区不可用时，仍然能够保障数据的正常访问。
             * @example `LRS`
             */
            RedundancyType: string;
            /**
             * 阿里云KMS服务自定义密钥Key或者Alias，仅当EncryptType=KMS时必填。
             * @example `alias/acs/acm`
             */
            KmsKeyId: string;
            /**
             * 归档库计费容量，单位：字节。
             * @example `1024000`
             */
            ChargedStorageSize: number;
            /**
             * 归档层计费容量，单位：字节。
             * @example `1024000`
             */
            ArchiveStorageSize: number;
            /**
             * 归档层备份数据量。单位：字节。
             * @example `1024000`
             */
            ArchiveBytesDone: number;
            /**
             * 是否是异地备份库的源库
             * - true：是异地备份库的源库。
             * - false：不是异地备份库的源库。
             * @example `false`
             */
            ReplicationSourceVault: boolean;
            /**
             * 异地备份库目标地域。
             * @example `cn-shanghai`
             */
            ReplicationTargetRegionId: string;
        }[];
    };
}
