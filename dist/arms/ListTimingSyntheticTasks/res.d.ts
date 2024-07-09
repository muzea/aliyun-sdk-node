export interface ListTimingSyntheticTasksResponse {
    /**
     * 请求ID。
     * @example `730E90FE-996A-5638-99F3-4F0F9038CC6C`
     */
    RequestId: string;
    /**
     * 状态码。200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 返回结构体。
     */
    Data: {
        /**
         * 任务信息列表。
         */
        Items: {
            /**
             * 云拨测任务ID。
             * @example `5308a2691f59422c8c3b7aeccec9cd3b`
             */
            TaskId: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 任务名称。
             * @example `拨测任务`
             */
            Name: string;
            /**
             * 任务类型：
             * 1：ICMP 2：TCP 3：DNS 4：HTTP 5：网站测速 6：文件下载。
             * @example `1`
             */
            TaskType: number;
            /**
             * 拨测地址。
             * @example `https://www.example.com`
             */
            Url: string;
            /**
             * 监测点类型，PC端1，移动端2。
             * @example `1`
             */
            MonitorCategory: number;
            /**
             * 拨测频率，可选范围：1m,5m,10m,15m,20m,30m,1h,2h,3h,4h,6h,8h,12h,24h。
             * @example `1m`
             */
            Frequency: string;
            /**
             * 拨测点个数。
             * @example `10`
             */
            MonitorNum: string;
            /**
             * CREATING：任务创建中， RUNNING：任务运行中， PARTIAL_RUNNING：任务部分运行中， STOP：任务停止， LIMIT_STOP：任务由于限额停止， EXCEPTION：任务异常， DELETE：任务删除， DELETE_EXCEPTION： 删除异常。
             * @example `RUNNING`
             */
            Status: string;
            /**
             * 创建时间。
             * @example `1671454758000`
             */
            GmtCreate: string;
            /**
             * 修改时间。
             * @example `1673085633000`
             */
            GmtModified: string;
            /**
             * 资源组 ID。
             * @example `rg-aekzgwtq5vxxxxx`
             */
            ResourceGroupId: string;
            /**
             * 通用设置。
             */
            CommonSetting: {
                /**
                 * 自定义host
                 */
                CustomHost: {
                    /**
                     * 自定义host。
                     */
                    Hosts: {
                        /**
                         * 域名。
                         * @example `www.aliyun.com`
                         */
                        Domain: string;
                        /**
                         * IP类型：
                         * - 0：自动
                         * - 1：IPv4
                         * - 2：IPpv6
                         * @example `0`
                         */
                        IpType: number;
                        /**
                         * IP地址。
                         */
                        Ips: string[];
                    }[];
                    /**
                     * 选择方式：
                     * - 0：随机
                     * - 1：轮询
                     * @example `0`
                     */
                    SelectType: number;
                };
                /**
                 * IP类型：
                 * - 0：自动
                 * - 1：IPv4
                 * - 2：IPpv6
                 * @example `0`
                 */
                IpType: number;
                /**
                 * 是否均匀分配监测样本 ：
                 * - 0：否
                 * - 1：是
                 * @example `0`
                 */
                MonitorSamples: number;
                /**
                 * 是否开启链路追踪。
                 * @example `false`
                 */
                IsOpenTrace: boolean;
                /**
                 * 链路追踪客户端类型：
                 * - 0：ARMS Agent
                 * - 1：OpenTelemetry
                 * - 2：Jaeger
                 * @example `1`
                 */
                TraceClientType: number;
                /**
                 * 链路数据上报region。
                 * @example `cn-hangzhou`
                 */
                XtraceRegion: string;
                /**
                 * 用户VPC信息，如果拨测的是阿里云内网地址，需要配置VPC信息。
                 */
                CustomVPCSetting: {
                    /**
                     * 地域ID。
                     * @example `cn-zhangjiakou`
                     */
                    RegionId: string;
                    /**
                     * VPC ID.
                     * @example `vpc-2zehbd4dfzahxxxxxxx`
                     */
                    VpcId: string;
                    /**
                     * 交换机ID。
                     * @example `vsw-bp1bcmj81kxxxxxxx`
                     */
                    VSwitchId: string;
                    /**
                     * 安全组ID，此安全组是拨测客户端所在的安全组，安全组限定了拨测客户端在VPC中的出入站规则。需要设置您的VPC所在安全组的入站规则为允许拨测客户端所在的安全组访问。否则，拨测客户端无法顺畅地访问您的VPC内资源。
                     * @example `sg-xxxxxxxxxxxxxx`
                     */
                    SecureGroupId: string;
                };
                /**
                 * 保留字段。
                 */
                CustomPrometheusSetting: {
                    /**
                     * 保留字段。
                     */
                    PrometheusLabels: any;
                    /**
                     * 保留字段。
                     * @example `保留字段。
                    `
                     */
                    PrometheusClusterId: string;
                    /**
                     * 保留字段。
                     * @example `保留字段。`
                     */
                    PrometheusClusterRegion: string;
                };
            };
            /**
             * 标签。
             */
            Tags: {
                /**
                 * 标签键。
                 * @example `key`
                 */
                Key: string;
                /**
                 * 标签的值。
                 * @example `value`
                 */
                Value: string;
            }[];
        }[];
        /**
         * 返回结果的总任务数量。
         * @example `100`
         */
        Total: number;
        /**
         * 当前页数。
         * @example `1`
         */
        Page: number;
        /**
         * 每页数量。
         * @example `10`
         */
        PageSize: number;
    };
}
