export interface DescribeDeviceServiceResponse {
    /**
     * 请求ID。
     * @example `3A535110-3EE3-5EC5-B1ED-10B7067A1FC8`
     */
    RequestId: string;
    /**
     * 设备列表。
     */
    ResourceDetailInfos: {
        /**
         * ENS边缘节点ID。
         * @example `cn-jiaozuo-2`
         */
        RegionID: string;
        /**
         * 云设备ID。
         * @example `h-uf6009zoaexs5pefypbo`
         */
        ID: string;
        /**
         * IP地址。
         * @example `120.27.219.219`
         */
        IP: string;
        /**
         * ENS边缘节点的服务器NC名。
         * @example `ens-nc2`
         */
        Server: string;
        /**
         * 设备状态。
         * @example `Running`
         */
        Status: string;
        /**
         * 设备类型。
         * @example `ens.ac6.large`
         */
        Type: string;
        /**
         * 设备MAC地址。
         * @example `AA:BB:77:88:99:03`
         */
        Mac: string;
        /**
         * 运营商信息。
         * @example `cmcc`
         */
        ISP: string;
        /**
         * 设备名称。
         * @example `5JhF100NEgdBcpNren32`
         */
        DeviceName: string;
        /**
         * 镜像ID。
         * @example `m-2ze40oyhjorpyw61k7be`
         */
        ImageID: string;
    }[];
    /**
     * 应用状态信息。
     */
    AppStatus: {
        /**
         * 应用状态。枚举类型，取值范围：
         * 中间态3个
         * -   CREATING
         * -   UPDATING
         * -   DELETING
         * 终态4个
         *
         * - CREATE_FAILED
         * -   UPDATE_FAILED
         * -   DELETE_FAILED
         * -   RUNNING
         * @example `CREATING`
         */
        Phase: string;
        /**
         * 应用状态描述信息。
         * @example `创建中`
         */
        StatusDescrip: string;
        /**
         * 最新的状态更新时间。
         * @example `2021-01-26T05:04Z`
         */
        UpdateTime: string;
    };
    /**
     * 应用基本属性。
     */
    AppMetaData: {
        /**
         * 应用ID。
         * @example `97a32f2a-aa2c-436a-b19c-05b20d258618`
         */
        AppId: string;
        /**
         * 应用名称。
         * @example `iotx-api-admin`
         */
        AppName: string;
        /**
         * 应用的稳定版版本号。
         * @example `v1`
         */
        AppStableVersion: string;
        /**
         * 应用类型。枚举类型，取值范围：
         * - Common：普通
         * - Scheduler：调度单元
         * @example `Common`
         */
        AppType: string;
        /**
         * 应用集群名。
         * @example `poc`
         */
        ClusterName: string;
        /**
         * 应用创建时间。
         * @example `2022-03-03T03:42:11`
         */
        CreateTime: string;
        /**
         * 应用描述信息。
         * @example `测试应用`
         */
        Description: string;
    };
    /**
     * 资源实例信息列表。
     */
    ResourceInfos: {
        /**
         * 应用版本号。
         * @example `v1`
         */
        AppVersion: string;
        /**
         * 地域代码。
         * @example `410800`
         */
        AreaCode: string;
        /**
         * 地域名称。
         * @example `华中,河南省,焦作市`
         */
        AreaName: string;
        /**
         * 创建时间。
         * @example `2019-10-02T08:26Z`
         */
        CreateTime: string;
        /**
         * 设备信息列表。
         */
        DeviceInfos: {
            /**
             * 设备名称。
             * @example `test-api`
             */
            Name: string;
            /**
             * 网络信息列表。
             */
            Network: {
                /**
                 * 容器端口。
                 * @example `10000-10010`
                 */
                ContainerPorts: string;
                /**
                 * 公网IP地址。
                 * @example `39.105.62.120`
                 */
                ExternalIp: string;
                /**
                 * 机器端口范围。
                 * @example `80-8080`
                 */
                HostPorts: string;
                /**
                 * 网关协议。枚举类型，取值：
                 * - TCP
                 * - UDP
                 * @example `TCP`
                 */
                Protocol: string;
            }[];
            /**
             * 状态。
             * @example `Running`
             */
            Status: string;
        }[];
        /**
         * 实例ID。
         * @example `i-5s9boobrmh5000kv4jmi0oeai`
         */
        InstanceId: string;
        /**
         * 实例状态。
         * @example `Running`
         */
        InstanceStatus: string;
        /**
         * 内网IP列表。
         */
        InternalIps: {
            /**
             * IP地址。
             * @example `10.0.2.3`
             */
            Ip: string;
        }[];
        /**
         * 公网ip。
         */
        PublicIps: {
            /**
             * IP地址。
             * @example `122.13.173.137`
             */
            Ip: string;
        }[];
        /**
         * 区域编码。
         * @example `cn-jiaozuo-2`
         */
        RegionCode: string;
        /**
         * ENS边缘节点ID。
         * @example `cn-jiaozuo-2
        `
         */
        RegionId: string;
        /**
         * 地域名称。
         * @example `中国焦作-2`
         */
        RegionName: string;
    }[];
}
