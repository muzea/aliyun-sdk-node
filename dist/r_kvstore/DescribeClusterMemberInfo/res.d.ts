export interface DescribeClusterMemberInfoResponse {
    /**
     * 请求ID。
     * @example `2D9F3768-EDA9-4811-943E-42C8006E****`
     */
    RequestId: string;
    /**
     * 集群实例的数据节点信息列表。
     */
    ClusterChildren: {
        /**
         * 单个数据节点的最大内存容量，单位为MB。
         * > 当**Service**返回值为**redis**（即节点类型为数据节点）时，才会返回本参数。
         * @example `1024`
         */
        Capacity: number;
        /**
         * 用户ID。
         * @example `2****_176498472570****`
         */
        UserId: string;
        /**
         * 数据节点[ESSD云盘](~~122389~~)的存储空间，单位为MB。
         * > 该ESSD云盘仅用作系统运行使用（例如数据持久化），不作为数据存取的介质。
         * @example `4096`
         */
        DiskSizeMB: number;
        /**
         * 节点的带宽，单位为MB/s。
         * > 当**Service**返回值为**redis**（即节点类型为数据节点）时，才会返回本参数。
         * @example `96`
         */
        BandWidth: number;
        /**
         * 节点当前的带宽，单位为MB/s，由节点的默认带宽和增加的带宽组成。
         * <props="china">当Redis实例通过专属集群创建时，才会返回本参数。</props>
         * @example `100`
         */
        CurrentBandWidth: number;
        /**
         * 数据节点的规格。更多信息，请参见<props="china"><ph>[云盘版实例规格](~~164477~~)</ph></props><props="intl"><ph>[持久内存型规格](~~184055~~)</ph></props><props="partner"><ph>[持久内存型规格](~~184055~~)</ph></props>。
         * @example `redis.shard.small.ce`
         */
        ClassCode: string;
        /**
         * 业务类型，返回值固定为**ALIYUN**。
         * @example `ALIYUN`
         */
        BizType: string;
        /**
         * 节点类型，返回值：
         * * **redis**：数据节点。
         * * **redis_cs**：配置服务器节点。
         * @example `redis`
         */
        Service: string;
        /**
         * binlog日志保存天数。
         * @example `7`
         */
        BinlogRetentionDays: number;
        /**
         * 数据节点的最大连接数。
         * @example `20000`
         */
        Connections: number;
        /**
         * 节点所属的资源组名称。
         * @example `GLOBAL_ZHANGJIAKOU_A`
         */
        ResourceGroupName: string;
        /**
         * 节点的大版本。
         * @example `5.0`
         */
        ServiceVersion: string;
        /**
         * 子节点数。
         * @example `0`
         */
        ReplicaSize: number;
        /**
         * 节点名称。
         * @example `r-bp1zxszhcgatnx****-db-0`
         */
        Name: string;
        /**
         * 节点的副本集ID。
         * @example `501791111`
         */
        Id: number;
    }[];
}
