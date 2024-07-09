export interface GetNisNetworkRankingRequest {
    /**
     * 资源所在地域。
     * @example `cn-beijing`
     */
    "RegionNo": string;
    /**
     * 按流量转发所使用的阿里云网络资源类型进行分析，取值：
     * - AccessInternetIpV4：所有阿里云公网类型IPV4。
     * - AccessInternetIpV4Limited：所有受地域限速的阿里云公网类型IPV4。
     * - ElasticIP: 弹性公网EIP（IPV4）。
     * - PublicIpEcs:  绑定在ECS的固定公网IP（IPV4）。
     * - PublicIpClb:  绑定在CLB的固定公网IP（IPV4）。
     * - GA：全球加速。
     * - NAT：通过SNAT的访问公网流量。
     * - TR：流经云企业网转发路由器的流量。
     * - TRAttachment：流经云企业网连接实例的流量，包括地域内连接和跨地域连接。
     * - VBR：流经边界路由器的流量。
     * - GA：流经全球加速的流量。
     * - InternetProbing: 公网探测质量数据。
     * - IntranetProbing: 内网探测质量数据。
     * @example `AccessInternetIpV4`
     */
    "ResourceType": string;
    /**
     * 基于阿里云资源的网络流量方向，取值：
     * - in：流入资源的流量方向。
     * - out：流出资源的流量方向。
     * ><notice>跨域流量分析因只采集出向流量，所以传入in也以out处理。
     * 地域内性能观测和地域间性能观测因需在Filter内指定源或目的，所以指定Direction无效。></notice>
     * @example `in`
     */
    "Direction": string;
    /**
     * 指定指标排名的维度，各场景取值：
     *  <br>完整流数据排名分析：
     * - Tuple1：表示一元组，提供云端IP粒度完整流数据排名分析。
     * - Tuple2：表示二元组，提供源和目的IP粒度完整流数据排名分析。
     * - Tuple5：表示五元组，提供源和目的IP、端口、协议粒度完整流数据排名分析。
     *  流量统计排名分析：
     * - Protocol: 按协议类型统计流量。
     * - SourcePort: 按源端口统计流量。
     * - DestinationPort: 按目的端口统计流量。
     * - InstanceId：按云上资源ID统计流量。
     * - IpPair：按源和目的IP对统计流量。
     * - Country：按客户端国家来源统计流量。
     * - City：按客户端城市来源统计流量。
     * - ISP：按客户端运营商来源统计流量。
     * - ASN：按客户端运营商ASN来源统计流量。
     * - CityASN：按客户端城市和运营商ASN来源统计流量。
     * - RegionPair：按云企业网跨地域访问统计流量。
     * 网络访问性能排名分析：
     * - CountryIsp：指定Region访问互联网国家和运营商性能排名。
     * - Province：指定Region访问国内省份性能排名。
     * - ProvinceIsp: 指定Region访问国内省份和运营商性能排名。
     * - RegionPair：阿里云跨地域互访性能排名。
     * - ZonePair：指定地域内可用区互访性能排名。
     * @example `Protocol`
     */
    "GroupBy": string;
    /**
     * 指定公网流量进行排名的指标。大小写敏感，取值：
     *
     * - bps：每秒比特数。
     * -   pps：每秒包数。
     * -   ByteCount：累计字节数。
     * -   PacketCount：累计包数。
     * -   rtt：tcp协议建立连接时的往返延迟。
     * -   RetransmitRate：重传率。
     * -   RatelimitDropPps：限速丢包速率。
     * -   ActiveSessionCount：并发会话数。
     * -   NewSessionPerSecond：每秒新建会话数。
     * @example `bps`
     */
    "OrderBy": string;
    /**
     * 支持进一步指定流量的过滤条件，进行聚焦性流量分析。
     */
    "Filter"?: {
        /**
         * 过滤条件的名字。
         * @example `instanceId`
         */
        Name: string;
        /**
         * 过滤条件的值。
         * @example `lb-2zxxxxz1d`
         */
        Value: string;
    }[];
    /**
     * 起始时间戳，单位**ms**。未指定时默认查最近1小时。
     * @example `1684373600099`
     */
    "BeginTime"?: number;
    /**
     * 结束时间戳，单位**ms**。未指定时默认查最近1小时。只指定了BeginTime时查BeginTime之后的1小时。
     * @example `1684379093000`
     */
    "EndTime"?: number;
    /**
     * 排序方式，默认desc，取值：
     * - asc：按正序排序。
     * - desc：按逆序排序。
     * @example `desc`
     */
    "Sort"?: string;
    /**
     * 展示排序靠前的数据。默认值：**10**。表示默认展示排序前 10 的数据。最大值：**100**。
     * @example `10`
     */
    "TopN"?: number;
    /**
     * 是否使用多账号访问模式，保留参数，目前不支持。
     * @example `false`
     */
    "UseCrossAccount"?: boolean;
    /**
     * 显式传递子账号ID。
     */
    "AccountIds"?: string[];
}
