export interface GetNisNetworkMetricsRequest {
    /**
     * 地域ID。
     * @example `cn-shenzhen`
     */
    "RegionNo": string;
    /**
     * 按流量转发所使用的阿里云网络资源类型进行分析，取值：
     * - AccessInternetIpV4：所有阿里云公网类型IPV4
     * - AccessInternetIpV4Limited：所有受地域限速的阿里云公网类型IPV4
     * - ElasticIP: 弹性公网EIP（IPV4）
     * - PublicIpEcs:  绑定在ECS的固定公网IP（IPV4）
     * - PublicIpClb:  绑定在CLB的固定公网IP（IPV4）
     * - NAT：通过SNAT的访问公网流量
     * - TR：流经云企业网转发路由器的流量
     * - TRAttachment：流经云企业网连接实例的流量，包括地域内连接和跨地域连接，地域内连接具备出入方向，跨地域连接仅具备出方向
     * - VBR：流经边界路由器的流量
     * - GA：流经全球加速的流量
     * - ECR：流经ECR的流量
     * - VPC：流经VPC的流量
     * - InternetProbing：公网质量探测数据
     * - IntranetProbing：内网质量探测数据
     * - NisInspectionHistoryReportScore：巡检历史评分
     * @example `AccessInternetIPV4`
     */
    "ResourceType": string;
    /**
     * 指标名。取值：
     * -   bps：每秒比特数。
     * -   pps：每秒包数。
     * -   rtt：tcp协议建立连接时的往返延迟。
     * -   RetransmitRate：重传率。
     * -   RatelimitDropPps：限速丢包速率。
     * -   ActiveSessionCount：并发会话数。
     * -   NewSessionPerSecond：每秒新建会话数。
     * @example `bps`
     */
    "MetricName": string;
    /**
     * 具体业务的Metric查询参数集合。各场景参数说明详见xxx部分。
     */
    "Dimensions": {
        /**
         * 过滤条件的名字。
         * @example `instanceId`
         */
        Name: string;
        /**
         * 过滤条件的值。
         * @example `eip-sample*`
         */
        Value: string;
    }[];
    /**
     * 起始时间戳，单位**ms**。未指定时默认查最近1小时。
     * @example `1638239092000`
     */
    "BeginTime"?: number;
    /**
     * 结束时间戳，单位**ms**。未指定时默认查最近1小时。只指定了BeginTime时查BeginTime之后的一小时。
     * @example `1684373700099`
     */
    "EndTime"?: number;
    /**
     * 排序方式，默认TimestampAscending，取值：
     * - TimestampAscending：按时间正向排序。
     * - TimestampDescending：按时间逆向排序。
     * @example `TimestampAscending`
     */
    "ScanBy"?: string;
    /**
     * 是否使用多账号访问模式，保留参数，暂不支持。
     * @example `false`
     */
    "UseCrossAccount"?: boolean;
    /**
     * 显式传递子账号ID。
     */
    "AccountIds"?: string[];
}
