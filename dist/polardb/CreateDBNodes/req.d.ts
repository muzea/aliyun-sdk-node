export interface CreateDBNodesRequest {
    /**
     * 资源组ID。
     * @example `rg-************`
     */
    "ResourceGroupId"?: string;
    /**
     * 集群ID。
     * @example `pc-*************`
     */
    "DBClusterId": string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，保证在不同请求间唯一，大小写敏感、不超过64个ASCII字符。
     * @example `6000170000591aed949d0f54a343f1a4233c1e7d1c5c******`
     */
    "ClientToken"?: string;
    /**
     * 指定新增节点需要加入的集群连接地址的地址ID。若需要同时加入多个连接地址，多个连接地址ID间用英文逗号（,）分隔。
     * > * 您可以通过调用[DescribeDBClusterEndpoints](~~98205~~)接口查看集群连接地址的详情，包括连接地址ID。
     * >* 支持填入默认集群连接地址和自定义集群连接地址的地址ID。
     * >* 若该参数留空，默认将新增节点加入所有开启了**新节点自动加入**功能（即`AutoAddNewNodes`取值为`Enable`）的集群连接地址。
     * @example `pe-****************,pe-****************`
     */
    "EndpointBindList"?: string;
    /**
     * 开始执行定时（即在目标时间段内执行）新增节点任务的最早时间。格式为`YYYY-MM-DDThh:mm:ssZ`（UTC）。
     * > * 开始时间的取值范围为未来24小时内的任意时间点。例如当前时间为`2021-01-14T09:00:00Z`，此处允许填入的开始时间范围为`2021-01-14T09:00:00Z`~`2021-01-15T09:00:00Z`。
     * >* 若该参数留空，默认立即执行新增节点任务。
     * @example `2021-01-14T09:00:00Z`
     */
    "PlannedStartTime"?: string;
    /**
     * 开始执行目标定时任务的最晚时间。格式为`YYYY-MM-DDThh:mm:ssZ`（UTC）。
     * > * 最晚时间需晚于开始时间的30分钟或以上。
     * >* 若设置了`PlannedStartTime`但未指定该参数，执行目标任务的最晚时间默认为`开始时间+30分钟`。例如当设置`PlannedStartTime`为`2021-01-14T09:00:00Z`且该参数留空时，目标任务最晚将于`2021-01-14T09:30:00Z`开始执行。
     * @example `2021-01-14T09:30:00Z`
     */
    "PlannedEndTime"?: string;
    /**
     * 新增节点的信息。
     */
    "DBNode": {
        /**
         * 新增节点的规格，需要与原有节点保持一致，详情请参见如下文档：
         * * PolarDB MySQL版：[计算节点规格](~~102542~~)。
         * * PolarDB PostgreSQL版（兼容Oracle）：[计算节点规格](~~207921~~)。
         * * PolarDB PostgreSQL版：[计算节点规格](~~209380~~)。
         * >* DBNode.N.ZoneId和DBNode.N.TargetClass，至少填一个。 N为从1开始的整数，最大值=16-当前节点数。
         * >* 当前仅PolarDB MySQL版集群支持一次增加多个只读节点，最多可增加至15个只读节点。
         * >* 当集群为PolarDB PostgreSQL版（兼容Oracle）或PolarDB PostgreSQL版时，该参数必填；当集群为PolarDB MySQL版时，该参数非必填。
         * @example `polar.mysql.x4.medium`
         */
        TargetClass: string;
        /**
         * 新增节点的可用区，需要与原有节点保持一致。您可以通过[DescribeRegions](~~98041~~)接口查询可用区ID。
         * >* DBNode.N.ZoneId和DBNode.N.TargetClass，至少填一个。N为从1开始的整数，最大值=16-当前节点数。
         * >* 当前仅PolarDB MySQL版集群支持一次增加多个只读节点，最多可增加至15个只读节点。
         * >* 当集群为PolarDB PostgreSQL版（兼容Oracle）或PolarDB PostgreSQL版时，该参数必填；当集群为PolarDB MySQL版时，该参数非必填。
         * @example `cn-qingdao-c`
         */
        ZoneId: string;
    }[];
    /**
     * 节点类型。取值范围：
     * - RO
     * - STANDBY
     * - DLNode
     * @example `RO`
     */
    "DBNodeType"?: string;
    /**
     * 是否开启列存索引。取值范围：
     * - **ON**：开启
     * - **OFF**：关闭（默认值）
     * > PolarDB PostgreSQL版（兼容Oracle）和PolarDB PostgreSQL版不支持该参数。
     * @example `ON`
     */
    "ImciSwitch"?: string;
}
