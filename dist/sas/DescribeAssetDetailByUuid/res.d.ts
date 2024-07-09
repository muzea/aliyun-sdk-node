export interface DescribeAssetDetailByUuidResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `39031E31-6BBA-5C99-A870-D807E78918CD`
     */
    RequestId: string;
    /**
     * 资产信息详情。
     */
    AssetDetail: {
        /**
         * CPU详细信息。
         * @example `Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz`
         */
        CpuInfo: string;
        /**
         * 服务器的公网IP地址。
         * @example `192.168.XX.XX`
         */
        InternetIp: string;
        /**
         * 服务器的操作系统版本位数。
         * @example `Linux 64bit`
         */
        OsDetail: string;
        /**
         * 云安全中心记录当前资产信息的时间戳，单位为毫秒。
         * @example `1603863599000`
         */
        CreateTime: number;
        /**
         * 操作系统的内核版本。
         * @example `4.18.0-80.11.2.el8_0.x86_64`
         */
        Kernel: string;
        /**
         * 资产是否已绑定授权。取值：
         * - **true**：已绑定授权
         * - **false**：未绑定授权
         * @example `true`
         */
        Bind: boolean;
        /**
         * 服务器的操作系统名称。
         * @example `-`
         */
        OsName: string;
        /**
         * 服务器的标签。
         * @example `InternetIp`
         */
        Tag: string;
        /**
         * Agent客户端状态。取值：
         * - **pause**：暂停保护
         * - **online**：保护中
         * - **offline**：未受保护
         * @example `online`
         */
        ClientStatus: string;
        /**
         * 内存大小，单位为GB。
         * @example `32`
         */
        Mem: number;
        /**
         * 内存大小，单位为MB。
         * @example `512`
         */
        Memory: number;
        /**
         * 服务器所在的VPC实例ID。
         * @example `vpc-bp1fs3bwonlfq503w****`
         */
        VpcInstanceId: string;
        /**
         * 资产的授权版本。取值：
         * - **1**：免费版（未授权）
         * - **6**：防病毒版
         * - **5**：高级版
         * - **3**：企业版
         * - **7**：旗舰版
         * - **10**：独立购买版
         * @example `7`
         */
        AuthVersion: number;
        /**
         * 服务器名称。
         * @example `i-fasdfasdfadfafa****`
         */
        InstanceName: string;
        /**
         * 服务器所在地域。
         * @example `cn-hangzhou-dg-a01`
         */
        Region: string;
        /**
         * 服务器所属的分组。未设置分组的服务器默认属于**未分组**。
         * @example `default`
         */
        GroupTrace: string;
        /**
         * ECS分配的IP地址。
         * @example `192.168.XX.XX`
         */
        Ip: string;
        /**
         * 主机名称。
         * @example `qewrqwerqs****`
         */
        HostName: string;
        /**
         * 服务器的操作系统类型。
         * @example `linux`
         */
        Os: string;
        /**
         * 资产授权绑定的时间戳，单位为毫秒。
         * @example `1627974044000`
         */
        AuthModifyTime: number;
        /**
         * 服务器ID。
         * @example `i-uf6h7p2fgk6rkk0g****`
         */
        InstanceId: string;
        /**
         * 服务器的私网IP地址。
         * @example `192.168.XX.XX`
         */
        IntranetIp: string;
        /**
         * 资产类型。取值：
         * - **0**：云服务器ECS
         * - **1**：负载均衡SLB
         * - **2**：NAT网关
         * - **3**：RDS数据库
         * - **4**：MongoDb数据库
         * - **5**：REDIS数据库
         * - **6**：容器镜像IMAGE
         * - **7**：容器CONTAINER
         * @example `0`
         */
        AssetType: string;
        /**
         * 资产的地域ID。
         * @example `cn-hanghzou`
         */
        RegionId: string;
        /**
         * 服务器的操作系统信息。
         * @example `CentOS Linux 8.0.1905`
         */
        SysInfo: string;
        /**
         * 服务器UUID。
         * @example `9e6cad93-a379-46fd-a701-9bbf02f4****`
         */
        Uuid: string;
        /**
         * CPU内核数。
         * @example `2`
         */
        Cpu: number;
        /**
         * 服务器所在地域名称。
         * @example `China (Hohhot)`
         */
        RegionName: string;
        /**
         * 资产是否为阿里云资产。取值：
         * - **0**：阿里云资产
         * - **1**：非阿里云资产
         * @example `0`
         */
        Flag: number;
        /**
         * Agent客户端的版本。
         * @example `2.0.0`
         */
        ClientVersion: string;
        /**
         * 服务器的IP地址列表。
         */
        IpList: string[];
        /**
         * MAC地址。
         */
        MacList: string[];
        /**
         * 磁盘信息集合。
         */
        DiskInfoList: string[];
    };
}
