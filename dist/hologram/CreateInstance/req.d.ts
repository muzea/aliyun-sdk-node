export interface CreateInstanceRequest {
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * 地域Id. 可前往[API门户](https://api.aliyun.com/product/Hologram)或“使用说明”查看。
         * @example `cn-hangzhou`
         */
        regionId: string;
        /**
         * 可用区Id。参考“使用说明“
         * @example `cn-hangzhou-h`
         */
        zoneId: string;
        /**
         * 虚拟专有网络，其所在regionId必须与实例一致。
         * @example `vpc-t4netc3y5xxxx`
         */
        vpcId: string;
        /**
         * 虚拟专有交换机，其所在zoneId必须与实例一致。
         * @example `vsw-2vccsiymtxxxxxx`
         */
        vSwitchId: string;
        /**
         * 资源组。若为空，则为账号默认资源组。
         * @example `""`
         */
        resourceGroupId: string;
        /**
         * 实例名称(2-64个字符，一个中文/字母算一个字符)。
         * @example `my_holo`
         */
        instanceName: string;
        /**
         * 实例类型。取值：
         * - Standard：通用型。
         * - Follower：只读从实例。
         * - Warehouse：计算组型。
         * - Shared：共享型。
         * @example `Standard`
         */
        instanceType: string;
        /**
         * 实例规格。取值：
         * - 8核32 GB （计算节点数量：1）
         * - 16核64 GB（计算节点数量：1）
         * - 32核128 GB（计算节点数量：2）
         * - 64核256 GB（计算节点数量：4）
         * - 96核384 GB（计算节点数量：6）
         * - 128核512 GB（计算节点数量：8）
         * - 等
         * >
         *  >- 填写核数即可。
         *  >- 购买1024以上规格实例请提交工单申请。
         *  >- Shared实例类型无需指定规格。
         *  >- 8核32GB（计算节点数量：1）的规格仅用于体验使用，不可用于生产。
         * @example `64`
         */
        cpu: number;
        /**
         * 实例标准存储空间。单位：GB。
         * > 按量付费实例（PostPaid）会忽略此参数。
         * @example `500`
         */
        storageSize: number;
        /**
         * 实例低频存储空间。单位：GB。
         * > 按量付费（PostPaid）实例会忽略此参数。
         * @example `500`
         */
        coldStorageSize: number;
        /**
         * 网关数量，取值[2, 50]。
         * > 只有Warehouse类型需要指定该参数。
         * @example `4`
         */
        gatewayCount: number;
        /**
         * 付费类型。取值：
         * - PrePaid：包年包月。
         * - PostPaid: 按量付费。
         * > Shared实例类型会忽略该参数。Shared是一种固定规格类型，收费类型默认为PostPaid。
         * @example `PostPaid`
         */
        chargeType: string;
        /**
         * 是否自动支付，默认为true。取值：
         * - true：自动支付。
         * - false：只生成订单，不支付。
         * > 默认值为true。如果您的支付方式余额不足，可以将参数AutoPay设置为false，此时会生成未支付订单，您可以登录用户中心自行支付。
         * @example `true`
         */
        autoPay: boolean;
        /**
         * 计费周期。取值：
         * - Month：按月计费。
         * - Hour：按小时计费。
         * >
         * > - PrePaid 只支持Month
         * > - PostPaid 只支持Hour
         * > - Shared类型自动设为Hour，无需指定。
         * @example `Month`
         */
        pricingCycle: string;
        /**
         * 购买周期。比如购买2个月。
         * > 若付费类型为PostPaid，则无需指定。
         * @example `2`
         */
        duration: number;
        /**
         * 是否开启按月自动续费，默认值为false。取值：
         * - true：开启。
         * - false：不开启。
         * @example `false`
         */
        autoRenew: boolean;
        /**
         * 主实例Id，Follower类型必填。
         * > 主从实例必须满足以下条件：
         * > - 主实例"运行正常"(Running)状态
         * > - 主从实例regionId一致
         * > - 主从实例zoneId一致
         * > - 主实例已绑定的从实例数少于10个
         * > - 主从实例属于同一个主账号
         * @example `hgpostcn-cn-lbj3aworq112`
         */
        leaderInstanceId: string;
        /**
         * 初始数据库。
         * @example `chatbot`
         */
        initialDatabases: string;
        enableServerlessComputing: boolean;
    };
}
