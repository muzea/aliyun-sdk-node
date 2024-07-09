export interface ListResourceGroupResponse {
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `b197-40ab-9155-****`
     */
    RequestId: string;
    ResourceGroupList: {
        /**
         * 详见ResGroupEntity定义资源组列表。
         */
        ResGroupEntity: {
            /**
             * 更新时间的时间戳。
             * @example `1573281040827`
             */
            UpdateTime: number;
            /**
             * 资源组描述。
             * @example `QqLZDA3pBZ`
             */
            Description: string;
            /**
             * 用户UID。
             * @example `****@aliyun.com`
             */
            AdminUserId: string;
            /**
             * 创建时间的时间戳。
             * @example `1557890594376`
             */
            CreateTime: number;
            /**
             * 资源组名称。
             * @example `TIa2LGixyD`
             */
            Name: string;
            /**
             * 资源组ID。
             * @example `8592`
             */
            Id: number;
            /**
             * 所属地域ID。
             * @example `cn-qingdao`
             */
            RegionId: string;
            ecsList: {
                /**
                 * 实例列表。
                 */
                EcsEntity: {
                    /**
                     * VPC唯一标识。
                     * @example `vpc-bp13evu4aayj2t1er****`
                     */
                    VpcId: string;
                    /**
                     * 安全组ID。
                     * @example `sg-m5eajgzn6b8sg9mv****`
                     */
                    SgId: string;
                    /**
                     * 实例状态，取值如下：
                     * - Pending：创建中。
                     * - Running：运行中。
                     * - Starting：启动中。
                     * - Stopping：停止中。
                     * - Stopped：已停止。
                     * @example `Running`
                     */
                    Status: string;
                    /**
                     * 私网IP。
                     * @example `192.168.xx.xxx`
                     */
                    PrivateIp: string;
                    /**
                     * 是否过期：
                     * - true：已过期。
                     * - false：未过期。
                     * @example `true`
                     */
                    Expired: boolean;
                    /**
                     * 用户账号。
                     * @example `****_common_****@aliyun.com`
                     */
                    UserId: string;
                    /**
                     * 主机名。
                     * @example `iZm5e853hvvrodnvqus****`
                     */
                    HostName: string;
                    /**
                     * 实例ID。
                     * @example `i-m5e853hvvrodnvqu****`
                     */
                    InstanceId: string;
                    /**
                     * 内存总量，单位为MB。
                     * @example `1`
                     */
                    Mem: number;
                    /**
                     * 地域ID。
                     * @example `ch-hangzhou`
                     */
                    RegionId: string;
                    /**
                     * CPU总核数。
                     * @example `2`
                     */
                    Cpu: number;
                    /**
                     * 内网IP。
                     * @example `192.168.xx.xxx`
                     */
                    InnerIp: string;
                    /**
                     * EDAS资源组ID。
                     * @example `64189****`
                     */
                    GroupId: string;
                    /**
                     * 弹性IP。
                     * @example `192.168.xxx.xx`
                     */
                    Eip: string;
                    /**
                     * 描述。
                     * @example `test`
                     */
                    Description: string;
                    /**
                     * 实例名称。
                     * @example `betabjmixcoud_01`
                     */
                    InstanceName: string;
                    /**
                     * 所在地域ID。
                     * @example `cn-qingdao-h`
                     */
                    ZoneId: string;
                    /**
                     * 序列号。
                     * @example `98b480b8-458b-4ff3-84b9-cf7097c5****`
                     */
                    SerialNum: string;
                    /**
                     * 公网IP。
                     * @example `192.168.xx.xxx`
                     */
                    PublicIp: string;
                    /**
                     * ECU实体。
                     */
                    EcuEntity: {
                        /**
                         * VPC网络ID。
                         * @example `vpc-2ze1ram356umxs598****`
                         */
                        VpcId: string;
                        /**
                         * 更新时间的时间戳。
                         * @example `1573281040827`
                         */
                        UpdateTime: number;
                        /**
                         * ECU的内网IP。
                         * @example `192.168.xxx.xx`
                         */
                        IpAddr: string;
                        /**
                         * 可用CPU。
                         * @example `1`
                         */
                        AvailableCpu: number;
                        /**
                         * 创建时间的时间戳。
                         * @example `1557890594376`
                         */
                        CreateTime: number;
                        /**
                         * 关联用户ID。
                         * @example `edas_****_test@aliyun-****.com`
                         */
                        UserId: string;
                        /**
                         * 实例ID。
                         * @example `i-2zej4i2jdf*********`
                         */
                        InstanceId: string;
                        /**
                         * 内存总量，单位为MB。
                         * @example `200`
                         */
                        Mem: number;
                        /**
                         * 地域ID。
                         * @example `cn-beijing `
                         */
                        RegionId: string;
                        /**
                         * 这台ECU的唯一标示ID，可以通过在ECS上执行`dmidecode`获取。
                         * @example `0de2ebdb-9490-4fc4-be41***************`
                         */
                        EcuId: string;
                        /**
                         * CPU总核数。
                         * @example `2`
                         */
                        Cpu: number;
                        /**
                         * 是否安装了Docker：
                         * - true：安装了Docker。
                         * - false：未安装Docker。
                         * @example `true`
                         */
                        DockerEnv: boolean;
                        /**
                         * 是否在线：
                         * - true：在线。
                         * - false：不在线。
                         * @example `true`
                         */
                        Online: boolean;
                        /**
                         * 可用内存。
                         * @example `200`
                         */
                        AvailableMem: number;
                        /**
                         * 所在地域ID。
                         * @example `cn-beijing-b`
                         */
                        ZoneId: string;
                        /**
                         * ECU名称。
                         * @example `test`
                         */
                        Name: string;
                        /**
                         * 上一次心跳检测的时间戳。
                         * @example `1573281040819`
                         */
                        HeartbeatTime: number;
                    };
                    /**
                     * VPC实例。
                     */
                    VpcEntity: {
                        /**
                         * 实例状态。
                         * @example `Running`
                         */
                        Status: string;
                        /**
                         * VPC名称。
                         * @example `test`
                         */
                        VpcName: string;
                        /**
                         * VPC唯一标识。
                         * @example `vpc-bp13evu42t1er****`
                         */
                        VpcId: string;
                        /**
                         * 描述。
                         * @example `""`
                         */
                        Description: string;
                        /**
                         * 是否过期：
                         * - true：已过期。
                         * - false：未过期。
                         * @example `true`
                         */
                        Expired: boolean;
                        /**
                         * 交换机的IPv4网段。
                         * @example `192.168.xx.xxx`
                         */
                        Cidrblock: string;
                        /**
                         * 用户ID。
                         * @example `****_common_****@aliyun.com`
                         */
                        UserId: string;
                        /**
                         * 实例数量。
                         * @example `1`
                         */
                        EcsNum: number;
                        /**
                         * 所在地域。
                         * @example `cn-qingdao`
                         */
                        RegionId: string;
                    };
                }[];
            };
            SlbList: {
                /**
                 * SLB列表。
                 */
                SlbEntity: {
                    /**
                     * SLB唯一标识。
                     * @example `lb-2zebf1fpbpkc7dnro****`
                     */
                    SlbId: string;
                    /**
                     * VPC ID。
                     * @example `vpc-m5e666n89m2bx8jar****`
                     */
                    VpcId: string;
                    /**
                     * 交换机ID。
                     * @example `vsw-mktkxkhah14****`
                     */
                    VswitchId: string;
                    /**
                     * 是否过期：
                     * - true：已过期。
                     * - false：未过期。
                     * @example `true`
                     */
                    Expired: boolean;
                    /**
                     * 用户UID。
                     * @example `****@aliyun.com`
                     */
                    UserId: string;
                    /**
                     * 地址类型：
                     * - Internet：公网地址。
                     * - Intranet：私网地址。
                     * @example `Intranet`
                     */
                    AddressType: string;
                    /**
                     * 网络类型：
                     * - 经典网络。
                     * - VPC。
                     * @example `vpc`
                     */
                    NetworkType: string;
                    /**
                     * 地域ID。
                     * @example `cn-beijing`
                     */
                    RegionId: string;
                    /**
                     * 分组ID。
                     * @example `64189****`
                     */
                    GroupId: number;
                    /**
                     * IP地址。
                     * @example `192.168.xxx.xx`
                     */
                    Address: string;
                    /**
                     * SLB名称。
                     * @example `a9315af59b4cd11e9a18c00163e1****`
                     */
                    SlbName: string;
                    /**
                     * SLB状态。
                     * @example `active`
                     */
                    SlbStatus: string;
                }[];
            };
        }[];
    };
}
