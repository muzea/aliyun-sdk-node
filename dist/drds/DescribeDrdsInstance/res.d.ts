export interface DescribeDrdsInstanceResponse {
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `B4F76641-BA45-4320-BE7C-9C62CFDAC9B2`
     */
    RequestId: string;
    /**
     * 实例详情列表。
     */
    Data: {
        /**
         * 实例类型，独享实例PRIVATE，共享实例PUBLIC。
         * @example `PRIVATE`
         */
        Type: string;
        /**
         * 实例状态。
         * @example `RUN`
         */
        Status: string;
        /**
         * 实例创建的时间戳。
         * @example `1568620311000`
         */
        CreateTime: number;
        /**
         * 实例版本可用操作。
         * @example `Upgradeable`
         */
        VersionAction: string;
        /**
         * 存储实例类型。
         * @example `RDS`
         */
        StorageType: string;
        /**
         * 网络类型，经典网络CLASSIC，VPC网络为VPC。
         * @example `CLASSIC`
         */
        NetworkType: string;
        /**
         * 实例标签：
         * - **普通实例**： **NORMAL**
         * - **高可用实例**： **HA**
         * - **VPC实例**：**VPC**
         * @example `NORMAL`
         */
        Label: string;
        /**
         * 实例支持的MySQL版本。
         * @example `5`
         */
        MysqlVersion: number;
        /**
         * 实例规格。
         * @example `drds.sn2.4c16g.8C32G`
         */
        InstanceSpec: string;
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
         * 实例版本，目前为空。
         * @example `0`
         */
        Version: number;
        /**
         * 实例过期的时间戳。
         * @example `4724323200000`
         */
        ExpireDate: number;
        /**
         * 主实例ID。
         * > 当实例类型为只读实例时，才会返回该参数。
         * @example `drdssen1243as`
         */
        MasterInstanceId: string;
        /**
         * 商品代码。
         * @example `drdsPost`
         */
        CommodityCode: string;
        /**
         * 实例机器类型，固定为**ecs**。
         * @example `ecs`
         */
        MachineType: string;
        /**
         * 实例规格系列。
         * @example `drds.sn2.4c16g`
         */
        InstanceSeries: string;
        /**
         * 产品版本。
         * @example `5.3.*`
         */
        ProductVersion: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 资源组ID，可以为空。
         * @example `NULL`
         */
        ResourceGroupId: string;
        /**
         * 实例ID。
         * @example `drdssen1243as`
         */
        DrdsInstanceId: string;
        /**
         * 可用区ID。
         * @example `cn-hangzhou-e`
         */
        ZoneId: string;
        /**
         * 实例角色，取值如下：
         * - **主实例**： MASTER
         * - **分析型只读实例**：SLAVE
         * - **并发型只读实例**：SLAVE_FLOW
         * @example `MASTER`
         */
        InstRole: string;
        /**
         * 购买的实例ID。
         * @example `drdssen12****`
         */
        OrderInstanceId: string;
        Vips: {
            /**
             * VIP列表。
             */
            Vip: {
                /**
                 * VIP 类型，内网 intranet，外网 internet
                 * @example `intranet`
                 */
                Type: string;
                /**
                 * VPC的ID。
                 * @example `vpc-bp**********`
                 */
                VpcId: string;
                /**
                 * 虚拟交换机的ID。
                 * @example `vsw-bp***********`
                 */
                VswitchId: string;
                /**
                 * VIP绑定的域名。
                 * @example `drdssen1243as.drds.aliyuncs.com`
                 */
                Dns: string;
                /**
                 * VIP开放端口。
                 * @example `3306`
                 */
                Port: string;
                /**
                 * VIP过期剩余天数。
                 * @example `0`
                 */
                ExpireDays: number;
            }[];
        };
        ReadOnlyDBInstanceIds: {
            /**
             * 只读实例ID列表。
             */
            ReadOnlyDBInstanceId: string[];
        };
    };
}
