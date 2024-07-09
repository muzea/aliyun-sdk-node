export interface DescribeTenantsResponse {
    /**
     * 查询到的指定 OceanBase 集群的租户总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 租户的列表信息。
     */
    Tenants: {
        /**
         * 专有网络（VPC） ID。  <br>如无合适的 VPC，请根据页面提示创建一个 VPC，详情参见什么是专有网络。
         * @example `vpc-bp1d2q3mhg9i23ofi****`
         */
        VpcId: string;
        /**
         * 租户的状态。 <br>
         * - PENDING_CREATE: 创建中
         * - RESTORE: 恢复中
         * - ONLINE: 运行中
         * - SPEC_MODIFYING: 规格修改中
         * - ALLOCATING_INTERNET_ADDRESS: 公网地址分配中
         * - PENDING_OFFLINE_INTERNET_ADDRESS: 公网地址关闭中
         * - PRIMARY_ZONE_MODIFYING: 切主可用区中
         * - PARAMETER_MODIFYING: 参数修改中
         * - WHITE_LIST_MODIFYING: 白名单修改中
         * @example `ONLINE`
         */
        Status: string;
        /**
         * 租户的主可用区。
         * @example `cn-hangzhou-i`
         */
        PrimaryZone: string;
        /**
         * 租户的部署类型。<br>
         * - multiple：多机房
         * - single：单机房
         * - dual：双机房
         * @example `multiple`
         */
        DeployType: string;
        /**
         * 租户的数据副本模式。
         * - 对于高可用版本：三地域为 N-N-N，两可用区和单可用区均为 N-N；
         * - 对于基础版为 N。
         * > <br>其中，N 为单可用区内的节点数。
         * @example `1-1-1`
         */
        DeployMode: string;
        /**
         * 租户的创建时间。
         * @example `2021-09-17 15:52:17.0`
         */
        CreateTime: string;
        /**
         * 租户名称。
         * @example `pay_online`
         */
        TenantName: string;
        /**
         * 租户总的内存大小，单位：GB。
         * @example `20`
         */
        Mem: number;
        /**
         * 租户总的 CPU 核数，单位：Core。
         * @example `10`
         */
        Cpu: number;
        /**
         * 租户描述信息。
         * @example `paycore database`
         */
        Description: string;
        /**
         * 租户模式。
         * 当前支持：
         * - Oracle：Oracle 模式；
         * - MySQL: MySQL 模式。
         * @example `Oracle`
         */
        TenantMode: string;
        /**
         * 租户 ID。
         * @example `t33h8y08k****`
         */
        TenantId: string;
        /**
         * 租户每个 Unit 的 CPU 核数，单位：Core。
         * @example `5`
         */
        UnitCpu: number;
        /**
         * 租户每个 Unit 的内存大小，单位：GB。
         * @example `10`
         */
        UnitMem: number;
        /**
         * 租户的 unit 个数。
         * @example `2`
         */
        UnitNum: number;
        /**
         * 租户已使用磁盘量。
         * @example `10`
         */
        UsedDiskSize: number;
        /**
         * 字符集
         * @example `utf8mb4`
         */
        Charset: string;
        /**
         * 字符序
         * @example `utf8mb4_general_ci`
         */
        Collation: string;
        EnableReadOnlyReplica: boolean;
    }[];
}
