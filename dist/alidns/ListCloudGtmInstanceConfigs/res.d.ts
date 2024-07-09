export interface ListCloudGtmInstanceConfigsResponse {
    /**
     * 唯一请求识别码
     * @example `536E9CAD-DB30-4647-AC87-AA5CC38C5382`
     */
    RequestId: string;
    /**
     * 当前页数，起始值为**1**，默认为**1**。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时设置的每页行数，最大值100，默认为20。
     * @example `20`
     */
    PageSize: number;
    /**
     * 总页数。
     * @example `1`
     */
    TotalPages: number;
    /**
     * 域名实例配置的总条目数。
     * @example `10`
     */
    TotalItems: number;
    InstanceConfigs: {
        /**
         * 实例配置列表。
         */
        InstanceConfig: {
            /**
             * 全局流量管理3.0实例id。
             * @example `gtm-cn-wwo3a3hbz**`
             */
            InstanceId: string;
            /**
             * 域名实例配置id，相同接入域名、相同的GTM实例可以同时配置A和AAAA记录，此情况下相同的GTM实例会出现2个域名实例配置，ConfigId可以唯一标识域名实例配置。
             * @example `Config-000**11
            `
             */
            ConfigId: string;
            /**
             * 实例配置创建时间。
             * @example `2024-03-15T01:46Z`
             */
            CreateTime: string;
            /**
             * 实例创建时间（时间戳）。
             * @example `1527690629357`
             */
            CreateTimestamp: number;
            /**
             * 实例配置最后一次修改时间。
             * @example `2024-03-15T01:46Z
            `
             */
            UpdateTime: string;
            /**
             * 实例配置最后一次修改时间（时间戳）。
             * @example `1527690629357`
             */
            UpdateTimestamp: number;
            /**
             * 全局流量管理3.0实例版本：
             * - standard：标准版
             * - ultimate：旗舰版
             * @example `ultimate`
             */
            VersionCode: string;
            /**
             * 商品编码：
             * - dns_gtm_public_cn：中国站商品编码；
             * - dns_gtm_public_intl：国际站商品编码
             * @example `dns_gtm_public_cn`
             */
            CommodityCode: string;
            /**
             * 接入域名分配模式：
             * - custom：自定义接入域名，用户自定义主机记录，并关联GTM实例所在账号下的Zone，生成接入域名
             * - sys_assign：系统默认分配接入域名，本功能已经不支持，请勿选择此模式
             * @example `custom`
             */
            ScheduleZoneMode: string;
            /**
             * zone名称，即GTM接入域名的父Zone。一般为GTM实例所在账号下，在云解析DNS控制台的托管域名，支持主域和子域。
             * @example `example.com`
             */
            ScheduleZoneName: string;
            /**
             * GTM接入域名的主机记录。
             * @example `www`
             */
            ScheduleHostname: string;
            /**
             * GTM接入域名，ScheduleHostname+ScheduleZoneName。
             * @example `www.example.com
            `
             */
            ScheduleDomainName: string;
            /**
             * 调度域名的解析记录类型：
             * - A：IPv4地址
             * - AAAA：IPv6地址
             * - CNAME：域名
             * @example `A`
             */
            ScheduleRrType: string;
            /**
             * 全局TTL（单位：秒），接入域名解析到地址池中地址的TTL值，影响解析记录在运营商LocalDNS中的缓存时间，支持自定义TTL值。
             * @example `60`
             */
            Ttl: number;
            /**
             * 地址池之间的负载均衡策略：
             * - round_robin：轮询，对于任何来源的解析请求，返回所有地址池。并且每次对于所有地址池进行轮转排序；
             * - sequence：顺序，对于任何来源的解析请求，返回顺序号较小的地址池（顺序号标识地址池返回的优先级，越小优先级越高）。若顺序号较小的地址池不可用时，返回下一个序号较小的地址池；
             * - weight：权重，支持对每个地址池设置不同的权重值，实现解析查询按照权重比例返回地址池；
             * - source_nearest：来源就近，即智能解析功能，GTM可以根据不同的解析请求来源返回不同的地址池，实现用户就近访问的效果；
             * @example `round_robin`
             */
            AddressPoolLbStrategy: string;
            /**
             * 地址池间负载均衡策略为顺序模式时，前序资源异常恢复服务模式：
             * - preemptive：抢占模式，前序资源恢复，优先使用顺序号较小的地址池；
             * - non_preemptive：非抢占模式，前序资源恢复，仍然使用当前地址池；
             * @example `preemptive`
             */
            SequenceLbStrategyMode: string;
            /**
             * 域名实例服务可用状态：
             * - available：可用，域名“启用”且健康状态为“正常”，接入域名的服务可用状态为“可用”；
             * - unavailable：不可用，域名“禁用”或健康状态为“异常”，接入域名的服务可用状态为“不可用”；
             * @example `available`
             */
            AvailableStatus: string;
            /**
             * 域名实例的启用状态：
             * - enable：启用状态，GTM实例智能调度策略生效；
             * - disable：禁用状态，GTM实例智能调度策略不可用；
             * @example `enable`
             */
            EnableStatus: string;
            /**
             * 域名实例健康状态：
             * - ok：正常，接入域名引用的所有地址池全部可用。
             * - ok_alert：警告，接入域名引用的所有地址池部分不可用。警告状态下，可用的地址池正常解析，不可用的地址池停止解析
             * - exceptional：异常，接入域名引用的所有地址池全部不可用。此时，使用实例所引用的顺序号较小的非空地址池中的地址进行兜底解析，尽可能帮助客户端获得解析结果。
             * @example `ok`
             */
            HealthStatus: string;
            /**
             * 域名实例配置的备注。
             * @example `test`
             */
            Remark: string;
            AddressPools: {
                /**
                 * 地址池列表。
                 */
                AddressPool: {
                    /**
                     * 地址池创建时间。
                     * @example `2024-03-15T01:46Z`
                     */
                    CreateTime: string;
                    /**
                     * 地址池创建时间（时间戳）。
                     * @example `1527690629357`
                     */
                    CreateTimestamp: number;
                    /**
                     * 地址池最后一次修改时间。
                     * @example `2024-03-15T01:46Z`
                     */
                    UpdateTime: string;
                    /**
                     * 地址池最后一次修改时间（时间戳）。
                     * @example `1527690629357`
                     */
                    UpdateTimestamp: number;
                    /**
                     * 地址池Id，地址池的唯一标识码。
                     * @example `pool-89528023225442**16
                    `
                     */
                    AddressPoolId: string;
                    /**
                     * 权重值（1-100之间的整数，包括1和100），支持对每个地址池设置不同的权重值，实现解析查询按照权重比例返回地址池。
                     * @example `1`
                     */
                    WeightValue: number;
                    /**
                     * 顺序号，对于任何来源的解析请求，返回顺序号较小的地址池（顺序号标识地址池返回的优先级，越小优先级越高）。
                     * @example `1`
                     */
                    SerialNumber: number;
                    RequestSource: {
                        /**
                         * 解析请求来源列表。
                         */
                        RequestSource: string[];
                    };
                    /**
                     * 地址池名称。
                     * @example `AddressPool-1
                    `
                     */
                    AddressPoolName: string;
                    /**
                     * 地址池类型：
                     * - IPv4
                     * - IPv6
                     * - domain
                     * @example `IPv4`
                     */
                    AddressPoolType: string;
                    /**
                     * 地址池中地址间负载均衡策略：
                     * - round_robin：轮询，对于任何来源的解析请求，返回所有地址。并且每次对于所有地址进行轮转排序。
                     * - sequence：顺序，对于任何来源的解析请求，返回顺序号较小的地址（顺序号标识地址返回的优先级，越小优先级越高）。若顺序号较小的地址不可用时，返回下一个序号较小的地址。
                     * - weight：权重，支持对每个地址设置不同的权重值，实现解析查询按照权重比例返回地址。
                     * - source_nearest：来源就近，即智能解析功能，GTM可以根据不同的解析请求来源返回不同的地址，实现用户就近访问的效果。
                     * @example `round_robin`
                     */
                    AddressLbStrategy: string;
                    /**
                     * 地址间负载均衡策略为顺序模式时，前序资源异常恢复服务模式：
                     * - preemptive：抢占模式，前序资源恢复，优先使用顺序号较小的地址；
                     * - non_preemptive：非抢占模式，前序资源恢复，仍然使用当前地址；
                     * @example `preemptive`
                     */
                    SequenceLbStrategyMode: string;
                    /**
                     * 地址池启用状态：
                     * - enable：启用状态
                     * - disable：禁用状态
                     * @example `enable`
                     */
                    EnableStatus: string;
                    /**
                     * 地址池健康状态：
                     * - ok：正常，地址池引用的所有地址全部可用。
                     * - ok_alert：警告，地址池引用的地址部分不可用，但是地址池状态判定为正常。警告状态下，可用的地址池正常解析，不可用的地址池停止解析
                     * - exceptional：异常，地址池引用的地址部分或全部不可用，地址池状态判定为异常。
                     * @example `ok`
                     */
                    HealthJudgement: string;
                    /**
                     * 地址池健康状态：
                     * - ok：正常，地址池引用的所有地址全部可用。
                     * - ok_alert：警告，地址池引用的地址部分不可用，但是地址池状态判定为正常。警告状态下，可用的地址池正常解析，不可用的地址池停止解析
                     * - exceptional：异常，地址池引用的地址部分或全部不可用，地址池状态判定为异常。
                     * @example `ok`
                     */
                    HealthStatus: string;
                    /**
                     * 地址池可用性状态：
                     * - available：可用
                     * - unavailable：不可用
                     * @example `available`
                     */
                    AvailableStatus: string;
                    /**
                     * 是否是顺序（非抢占）模式调度对象，针对于融合云纳管场景：
                     * - true：是
                     * - false：不是
                     * @example `false`
                     */
                    SeqNonPreemptiveSchedule: boolean;
                }[];
            };
        }[];
    };
}
