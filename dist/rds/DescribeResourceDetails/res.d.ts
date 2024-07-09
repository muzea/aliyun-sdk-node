export interface DescribeResourceDetailsResponse {
    /**
     * Id of the request
     * @example `EA815761-F7AC-5CFE-A1AC-709D6A00B58A`
     */
    RequestId: string;
    /**
     * 地域ID。
     * @example `cn-beijing`
     */
    Region: string;
    /**
     * 实例存储类型
     * @example `cloud_essd`
     */
    InstanceStorageType: string;
    /**
     * 磁盘容量。
     * @example `200`
     */
    DbInstanceStorage: number;
    /**
     * 已用空间，由数据文件占用空间和日志占用空间组成，单位：Byte。-1表示没有数据。
     * @example `4871684096`
     */
    DiskUsed: number;
    /**
     * 备份大小，单位：MB。
     * @example `53002759`
     */
    BackupSize: number;
    /**
     * VPC ID。
     * @example `vpc-wz9rbibex7v0lxbeyo6at`
     */
    VpcId: string;
    /**
     * 交换机ID。
     * > 与RDS实例需属于同一可用区。
     * @example `vsw-2zelwi1jd271p670lzl8h`
     */
    VSwitchId: string;
    /**
     * 该实例的[IP白名单](~~43185~~)。多条记录请以半角逗号（,）隔开，不可重复，最多1000条记录。支持如下两种格式：
     * * IP地址形式，例如：10.10.XX.XX。
     * * CIDR形式，例如：10.10.XX.XX/24（无类域间路由，24表示了地址中前缀的长度，范围为1~32）。
     * 如不填则默认为原实例default分组白名单信息。
     * @example `172.16.1.14,172.16.1.13,172.16.1.44,172.16.1.43,172.16.1.74,172.16.1.73`
     */
    SecurityIPList: string;
    /**
     * 代理实例名称
     * @example `mr-n1m1wjrylfolvrt67s`
     */
    DbProxyInstanceName: string;
    /**
     * 资源组ID。
     * @example `rg-acfmv3h25bj7yhq`
     */
    ResourceGroupId: string;
    /**
     * rds白名单分组规格
     */
    RdsEcsSecurityGroupRel: {
        /**
         * 安全组名称。
         * @example `test_switch`
         */
        SecurityGroupName: string;
    }[];
    /**
     * 备份日志大小，单位为Byte。
     * @example `21183797`
     */
    BackupLogSize: number;
    /**
     * 数据备份的占用空间（不包括归档备份），单位：Byte。
     * @example `8139046912`
     */
    BackupDataSize: number;
}
