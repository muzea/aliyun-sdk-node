export interface DescribeSourceServersResponse {
    SourceServers: {
        /**
         * 迁移源数组。
         */
        SourceServer: {
            /**
             * 迁移源的注册时间。
             * @example `2019-06-27T02:58:09Z`
             */
            CreationTime: string;
            /**
             * SMC客户端（SMC Agent）心跳频率。单位：秒。
             * @example `30`
             */
            HeartbeatRate: number;
            /**
             * 迁移源状态。
             * @example `InUse`
             */
            State: string;
            DataDisks: {
                /**
                 * 迁移源的数据盘数组。
                 */
                DataDisk: {
                    /**
                     * 数据盘顺序。
                     * @example `1`
                     */
                    Index: number;
                    /**
                     * 数据盘N大小。单位：GiB。
                     * @example `20`
                     */
                    Size: number;
                    Parts: {
                        /**
                         * 数据盘分区信息。
                         */
                        Part: {
                            /**
                             * 数据盘分区是否支持块复制。
                             * @example `false`
                             */
                            CanBlock: boolean;
                            /**
                             * 数据盘分区大小。单位：Byte。
                             * @example `21474836480`
                             */
                            SizeBytes: number;
                            /**
                             * 数据盘分区是否必须选择。
                             * @example `false`
                             */
                            Need: boolean;
                            /**
                             * 数据盘分区设备标识。
                             * @example `1_0`
                             */
                            Device: string;
                            /**
                             * 数据盘分区路径。
                             * @example `/home/data`
                             */
                            Path: string;
                        }[];
                    };
                    /**
                     * 数据盘N路径。
                     * @example `/home/data`
                     */
                    Path: string;
                }[];
            };
            SystemDiskParts: {
                /**
                 * 系统盘分区信息。
                 */
                SystemDiskPart: {
                    /**
                     * 系统盘分区是否支持块复制。
                     * @example `true`
                     */
                    CanBlock: boolean;
                    /**
                     * 系统盘分区大小。单位：Byte。
                     * @example `254803968`
                     */
                    SizeBytes: number;
                    /**
                     * 系统盘分区是否必须选择。
                     * @example `true`
                     */
                    Need: boolean;
                    /**
                     * 系统盘分区设备标识符。
                     * @example `0_0`
                     */
                    Device: string;
                    /**
                     * 系统盘分区路径。
                     * @example `/boot`
                     */
                    Path: string;
                }[];
            };
            /**
             * 内核版本级别。
             * @example `1`
             */
            KernelLevel: number;
            /**
             * 迁移源ID。
             * @example `s-bp1e2fsl57knvuug****`
             */
            SourceId: string;
            /**
             * SMC客户端版本号。
             * @example `1.5.2.3`
             */
            AgentVersion: string;
            /**
             * 迁移源状态详细信息。该参数在迁移源状态为异常时返回。JSON格式键值对，如：
             * ```
             * - error_code：错误码。
             * - error_msg：错误信息。
             * ```
             * @example `{"error_code": "S1", "error_msg": "Rsync not found. Please install rsync."}`
             */
            StatusInfo: string;
            /**
             * 迁移源的系统盘大小。单位：GiB
             * @example `40`
             */
            SystemDiskSize: number;
            /**
             * 迁移源描述。
             * @example `Server Source Imported By GotoAliyun.`
             */
            Description: string;
            /**
             * 迁移源状态错误码。
             * @example `SourceServer.Offline`
             */
            ErrorCode: string;
            /**
             * 最近一次的迁移任务ID。
             * @example `j-bp19vlwm0tyigbmj****`
             */
            JobId: string;
            /**
             * 迁移源的系统平台。
             * @example `OpenSUSE`
             */
            Platform: string;
            /**
             * 复制驱动器。默认值：SMT（迁云工具）
             * @example `SMT`
             */
            ReplicationDriver: string;
            /**
             * 迁移源的名称。
             * @example `SourceServerName`
             */
            Name: string;
            /**
             * 迁移源系统信息。JSON格式键值对，可扩展，键值固定。大小不超过1 KB。如：
             * ```
             * agent_mode：运行模式。
             * agent_type：运行类型。
             * client_type：客户端类型。
             * hostname ：主机名。
             * ipv4：IPv4地址。
             * ipv6： IPv6地址。
             * cores：CPU核数。
             * cpu_usage： CPU使用率。
             * memory：内存。
             * memory_usage：内存使用率。
             * ```
             * @example `{\"agent_mode\":\"daemon\",\"agent_type\":\"aliyun\",\"client_type\":\"\",\"cores\":\"2\",\"cpu_usage\":\"0.00\",\"hostname\":\"ixxxxxxxxxx\",\"ipv4\":\"10.0.0.1\",\"memory\":\"8.00\",\"memory_usage\":\"3.61\"}`
             */
            SystemInfo: string;
            /**
             * 迁移源的系统架构。
             * @example `x86_64`
             */
            Architecture: string;
            /**
             * 资源组ID。
             * @example `rg-acfmw3ty5y7****`
             */
            ResourceGroupId: string;
            Tags: {
                /**
                 * 标签信息。
                 */
                Tag: {
                    /**
                     * 为SMC资源指定的标签键。N的取值范围：1~20。
                     * 一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以aliyun和acs:开头，不能包含http:\//或者https:\//。
                     * @example `TestKey`
                     */
                    Key: string;
                    /**
                     * 为SMC资源指定的标签值。N的取值范围：1~20。
                     * 一旦传入该值，可以为空字符串。最多支持64个字符，不能包含http:\//或者https:\//。
                     * @example `TestValue`
                     */
                    Value: string;
                }[];
            };
        }[];
    };
    /**
     * 迁移源总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `410E6073-66D0-45D3-AB3E-4DC3F5E4****`
     */
    RequestId: string;
    /**
     * 迁移源列表的页码。
     * @example `1`
     */
    PageNumber: number;
}
