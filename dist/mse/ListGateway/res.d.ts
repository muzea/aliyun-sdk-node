export interface ListGatewayResponse {
    /**
     * 请求ID。
     * @example `34300B3-52EC-5049-8C96-914098CF****`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * @example `You are not authorized to perform this operation. Action: mse:ListGateway, Resource: acs:mse:cn-hangzhou:102123:*`
     */
    Message: string;
    /**
     * 返回值。
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * Meta返回信息。
     */
    Data: {
        /**
         * 总条数。
         * @example `9`
         */
        TotalSize: number;
        /**
         * 页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页条数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 返回数据。
         */
        Result: {
            /**
             * 网关ID。
             * @example `153`
             */
            Id: number;
            /**
             * 网关名称。
             * @example `tesa-test`
             */
            Name: string;
            /**
             * 网关唯一标识ID。
             * @example `gw-5017305290e14cebb8ce5cb6a4****`
             */
            GatewayUniqueId: string;
            /**
             * 网关类型。
             * @example `Ingress`
             */
            GatewayType: string;
            /**
             * 地域。
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * 用户信息。
             * @example `18278117654342`
             */
            PrimaryUser: string;
            /**
             * 网关状态
             * - 0 创建中
             * - 1 创建失败
             * - 2 运行中
             * - 3 变更中
             * - 4 缩容中
             * - 6 扩容中
             * - 8 删除中
             * - 9 停服待释放
             * - 10 重启中
             * - 11 重建中
             * - 12 升级中
             * - 13 升级失败
             * @example `2`
             */
            Status: number;
            /**
             * 是否开启AHAS。
             * @example `false`
             */
            AhasOn: boolean;
            /**
             * 是否开启ARMS。
             * @example `false`
             */
            ArmsOn: boolean;
            /**
             * 规格。
             * @example `MSE_GTW_1_2_200_c`
             */
            Spec: string;
            /**
             * 备份。
             * @example `2`
             */
            Replica: number;
            /**
             * 创建时间。
             * @example `2021-09-13 19:24:23`
             */
            GmtCreate: string;
            /**
             * 修改时间。
             * @example `2021-09-13 19:24:23`
             */
            GmtModified: string;
            /**
             * 状态描述。
             * @example `重启中`
             */
            StatusDesc: string;
            /**
             * SLB集合。
             */
            Slb: {
                /**
                 * SLB IP。
                 * @example `153.12.XX.XX`
                 */
                SlbIp: string;
                /**
                 * SLB端口。
                 * @example `80`
                 */
                SlbPort: string;
                /**
                 * SLB规格。
                 * @example `slb.s2.small`
                 */
                SlbSpec: string;
                /**
                 * 网络类型
                 * - PUB_NET：公网
                 * - PRIVATE_NET：私网
                 * @example `PUB_NET`
                 */
                Type: string;
                /**
                 * 网关SLB状态。
                 * @example `Ready`
                 */
                GatewaySlbStatus: string;
                /**
                 * 状态描述。
                 * @example `创建中`
                 */
                StatusDesc: string;
                /**
                 * 网关SLB模式。
                 * @example `UserHost`
                 */
                GatewaySlbMode: string;
                /**
                 * SLB ID。
                 * @example `lb-bp1ut8asdfgucjk****`
                 */
                SlbId: string;
            }[];
            /**
             * 互联网SLB。
             */
            InternetSlb: {
                /**
                 * SLB IP。
                 * @example `153.12.XX.XX`
                 */
                SlbIp: string;
                /**
                 * SLB端口。
                 * @example `slb.s2.small`
                 */
                SlbPort: string;
                /**
                 * SLB规格。
                 * @example `slb.s2.small`
                 */
                SlbSpec: string;
                /**
                 * 类型。
                 * @example `PUB_NET`
                 */
                Type: string;
                /**
                 * 网关流量。
                 * @example `20`
                 */
                InternetNetworkFlow: string;
                /**
                 * 网关SLB状态。
                 * @example `Ready`
                 */
                GatewaySlbStatus: string;
                /**
                 * 状态描述。
                 * @example `创建中`
                 */
                StatusDesc: string;
                /**
                 * 网关SLB模式。
                 * @example `UserHost`
                 */
                GatewaySlbMode: string;
                /**
                 * SLB ID。
                 * @example `lb-bp1ut8asdfgucjk****`
                 */
                SlbId: string;
            }[];
            /**
             * 升级。
             * @example `false`
             */
            Upgrade: boolean;
            /**
             * 强制升级。
             * @example `false`
             */
            MustUpgrade: boolean;
            /**
             * 是否支持WASM。
             * @example `true`
             */
            SupportWasm: boolean;
            /**
             * 当前版本。
             * @example `0.1.0-mse-gw`
             */
            CurrentVersion: string;
            /**
             * 应用版本。
             * @example `1.0.1.0`
             */
            AppVersion: string;
            /**
             * 最新版本。
             * @example `0.1.0-mse-gw`
             */
            LatestVersion: string;
            /**
             * 交换机2。
             * @example `vsw-bpbrveck45nf****`
             */
            Vswitch2: string;
            /**
             * 实例ID。
             * @example `mse_ingresspost-cn-0jbvrcex****`
             */
            InstanceId: string;
            /**
             * 付费类型。
             * @example `POSTPAY`
             */
            ChargeType: string;
            /**
             * 到期日期。
             * @example `4792060800000`
             */
            EndDate: string;
            /**
             * 标签。
             * @example `test`
             */
            Tag: string;
            /**
             * 配置信息。
             */
            InitConfig: {
                /**
                 * 是否开启WAF。
                 * @example `true`
                 */
                EnableWaf: boolean;
                /**
                 * 是否支持WAF。
                 * @example `true`
                 */
                SupportWaf: boolean;
            };
            /**
             * 网关版本。
             * @example `1.2.9`
             */
            GatewayVersion: string;
            /**
             * 是否支持回滚。
             * @example `false`
             */
            RollBack: boolean;
            /**
             * 资源标签。
             * @example `{"tagKey":"tagValue"}`
             */
            MseTag: string;
            /**
             * 资源组ID。
             * @example `rg-97hg87vi****`
             */
            ResourceGroupId: string;
            /**
             * 总副本数（包括自动扩容副本数）。
             * @example `4`
             */
            TotalReplica: number;
            /**
             * 是否开启自动扩容。
             * @example `true`
             */
            Elastic: boolean;
            /**
             * 自动扩容副本数。
             * @example `2`
             */
            ElasticReplica: number;
            /**
             * 自动扩容类型，目前支持：
             * - CronHPA：按时间扩容
             * @example `CronHPA`
             */
            ElasticType: string;
            /**
             * 自动扩容策略。
             */
            ElasticPolicy: {
                /**
                 * 是否开启自动扩容。
                 * @example `true`
                 */
                Elastic: boolean;
                /**
                 * 自动扩容最大实例数（水平扩容时使用）。
                 * @example `10`
                 */
                MaxReplica: number;
                /**
                 * 自动扩容类型，目前支持：
                 * * CronHPA：按时间扩容
                 * @example `CronHPA`
                 */
                ElasticType: string;
                /**
                 * 自动扩容时间策略列表。
                 */
                TimePolicyList: {
                    /**
                     * 自动扩容期望副本数。
                     * @example `4`
                     */
                    DesiredReplica: number;
                    /**
                     * 自动扩容起始时间。
                     * @example `07:00`
                     */
                    StartTime: string;
                    /**
                     * 自动扩容结束时间。
                     * @example `09:00`
                     */
                    EndTime: string;
                }[];
            };
            /**
             * 网关弹性实例ID，使用自动扩容时返回。
             * @example `mse_ingresselastic_public_cn-uqm3d0*****`
             */
            ElasticInstanceId: string;
            /**
             * 网关VPC ID。
             * @example `vpc-uf6heojei217tv14*****`
             */
            VpcId: string;
            MseVersion: string;
            MaintenancePeriod: {
                TimeZone: string;
                StartTime: string;
                EndTime: string;
            };
        }[];
    };
}
