export interface DescribeDrdsInstancesResponse {
    /**
     * 请求ID。
     * @example `8734773E-7B21-4A22-9106-CBD245F8****`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页大小。
     * @example `20`
     */
    PageSize: number;
    /**
     * 实例总数。
     * @example `1`
     */
    Total: number;
    Instances: {
        /**
         * 实例列表。
         */
        Instance: {
            /**
             * 虚拟专用网络ID。
             * @example `vpc-bp**********`
             */
            VpcId: string;
            /**
             * 实例状态。
             * @example `RUN`
             */
            Status: string;
            /**
             * 实例类型。
             * - **PUBLIC**：共享实例
             * - **PRIVATE**：独享实例
             * @example `PRIVATE`
             */
            Type: string;
            /**
             * 商品代码。
             * @example `drdsPost`
             */
            CommodityCode: string;
            /**
             * 实例机器类型，仅支持ecs。
             * @example `ecs`
             */
            MachineType: string;
            /**
             * 创建时间戳。
             * @example `1568620311000`
             */
            CreateTime: number;
            /**
             * 实例版本可用操作。
             * @example `Upgradable`
             */
            VersionAction: string;
            /**
             * 实例规格系列。
             * @example `drds.sn2.4c16g`
             */
            InstanceSeries: string;
            /**
             * 网络类型。
             * - **CLASSIC**：经典网络
             * - **VPC**：专有网络
             * @example `CLASSIC`
             */
            NetworkType: string;
            /**
             * 实例标签。
             * - **NORMAL**：普通实例
             * - **HA**：高可用实例
             * - **VPC**：VPC实例
             * @example `NORMAL`
             */
            Label: string;
            /**
             * 产品版本号。
             * @example `V1`
             */
            ProductVersion: string;
            /**
             * 实例规格。
             * @example `drds.sn2.4c16g.8C32G`
             */
            InstanceSpec: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou-e`
             */
            RegionId: string;
            /**
             * VPC集群中的实例ID。
             * @example `drdssen12****`
             */
            VpcCloudInstanceId: string;
            /**
             * 实例描述。
             * @example `drds_test`
             */
            Description: string;
            /**
             * 实例版本。
             * @example `0`
             */
            Version: number;
            /**
             * 资源组ID。
             * @example `rg-aek2ljh3ye4****`
             */
            ResourceGroupId: string;
            /**
             * 可用区。
             * @example `vsw-bpxxxxxxxxxxxxx96`
             */
            ZoneId: string;
            /**
             * 实例ID。
             * @example `drdssen12****`
             */
            DrdsInstanceId: string;
            /**
             * 过期时间戳。
             * @example `4724323200000`
             */
            ExpireDate: number;
            /**
             * 主实例ID。
             * @example `drdssen12****`
             */
            MasterInstanceId: string;
            /**
             * 购买的实例ID。
             * @example `drdssen12****`
             */
            OrderInstanceId: string;
            /**
             * 实例角色。
             * - **MASTER**：主实例
             * - **SLAVE**：分析型只读实例
             * - **SLAVE_FLOW**：并发型只读实例
             * @example `MASTER`
             */
            InstRole: string;
            Vips: {
                /**
                 * VIP列表。
                 */
                Vip: {
                    /**
                     * 虚拟专用网络ID。
                     * @example `vpc-bpxxxxxxxxxxxy`
                     */
                    VpcId: string;
                    /**
                     * VIP类型。
                     * - **intranet**：内网
                     * - **internet**：外网
                     * @example `intranet`
                     */
                    Type: string;
                    /**
                     * 虚拟交换机ID。
                     * @example `vsw-bpxxxxxxxxxxxxx96`
                     */
                    VswitchId: string;
                    /**
                     * VIP开放端口。
                     * @example `3306`
                     */
                    Port: string;
                    /**
                     * IP地址。
                     * @example `10.23.***.***`
                     */
                    IP: string;
                    /**
                     * VIP绑定的域名。
                     * @example `drdssen1243as.drds.aliyuncs.com`
                     */
                    dns: string;
                }[];
            };
            ReadOnlyDBInstanceIds: {
                ReadOnlyDBInstanceId: string[];
            };
            /**
             * 实例系列，取值如下：
             * - **starter**：入门版
             * - **enterprise**：企业版
             * - **standard**：标准版
             * @example `enterprise`
             */
            series: string;
        }[];
    };
}
