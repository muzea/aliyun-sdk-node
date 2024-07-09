export interface CreateInstanceRequest {
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。
     * @example `c2c5d1274a8d4317a13bc5b0d4******`
     */
    "clientToken"?: string;
    /**
     * body参数。
     */
    "body"?: {
        /**
         * 待创建的实例名称。
         * 不填写则以实例ID作为实例名称
         * @example `rmq-cn-72u3048uxxx`
         */
        instanceName: string;
        /**
         * 实例所属的服务编码。消息队列RocketMQ版的服务编码为rmq。
         * @example `rmq`
         */
        serviceCode: string;
        /**
         * 实例的主系列编码。主系列间的具体差异，请参见[产品选型](~~444722~~)。
         * 参数取值如下：
         * - standard：标准版
         * - ultimate：铂金版
         * - professional：专业版
         * ><notice>实例创建成功后，主系列只支持单向变更，只升不降，变更方向为：标准版 > 专业版 > 铂金版。例如，只支持从标准版变更到专业版，不支持从专业版降为标准版。></notice>
         * @example `standard`
         */
        seriesCode: string;
        /**
         * 实例的子系列编码。子系列间具体差异，请参见[产品选型](~~444722~~)。
         * 参数取值如下：
         * - cluster_ha：集群高可用版
         * - single_node：单节点测试版
         * <props="china">- serverless：Serverless实例</props>
         * 主系列选择ultimate（铂金版）时，子系列只能选择为cluster_ha（集群高可用版）。
         * ><notice>实例创建成功后，子系列不支持变更。></notice>
         * @example `cluster_ha`
         */
        subSeriesCode: string;
        /**
         * 实例的付费类型。云消息队列 RocketMQ 版支持包年包月和按量付费两种类型。
         * 参数取值如下：
         * - PayAsYouGo：按量付费，一种后付费模式，即先使用再付费。
         * - Subscription：包年包月，一种预付费模式，即先付费再使用。
         * 具体信息，请参见[计费方式](~~427234~~)。
         * @example `Subscription`
         */
        paymentType: string;
        /**
         * 购买时长。仅当实例付费类型为Subscription（包年包月）时，该参数生效。
         * 取值范围如下：
         * - 按月购买：1、2、3、4、5、6
         * - 按年购买：1、2、3
         * @example `3`
         */
        period: number;
        /**
         * 购买时长的最小周期单位。
         * 参数取值如下：
         * - Month：按月购买
         * - Year：按年购买
         * @example `Month`
         */
        periodUnit: string;
        /**
         * 是否自动续费。仅当实例付费类型为Subscription（包年包月）时，该参数生效。
         * - true：开启自动续费
         * - false：不开启自动续费
         * @example `true`
         */
        autoRenew: boolean;
        /**
         * 自动续费周期。仅当开启自动续费时该参数有效。单位：月。
         * 取值范围：
         * - 按月续费：1、2、3、6、12
         * @example `3`
         */
        autoRenewPeriod: number;
        /**
         * 实例的备注信息。
         * @example `This is the remark for test.`
         */
        remark: string;
        /**
         * 实例规格信息。
         */
        productInfo: {
            /**
             * 消息收发计算规格。具体消息收发TPS上限，请参见[实例规格](~~444715~~)。
             * @example `rmq.s2.2xlarge`
             */
            msgProcessSpec: string;
            /**
             * 消息发送TPS占整个实例消息收发TPS总量的比例。
             * 例如，实例的消息收发TPS上限为1000次/秒，若消息发送占比为0.8，则消息发送TPS上限为800次/秒，消息接收TPS上限为200次/秒。
             * 取值范围：[0，1]，默认值为0.5。
             * @example `0.5`
             */
            sendReceiveRatio: number;
            /**
             * 是否开启规格外突发弹性能力。
             * 参数取值如下：
             * - true：开启弹性能力
             * - false：不开启弹性能力
             * 开启弹性突发能力后，云消息队列 RocketMQ 版允许该实例在一定范围内超过基础规格限制的TPS，且超过基础规格外的部分，需要收取额外的弹性规格费用。具体计费信息，请参见[计算能力费用](~~427237~~)。
             * > 仅部分规格的实例支持开启弹性突发规格能力，具体支持的实例，请参见[实例规格](~~444715~~)。
             * @example `true`
             */
            autoScaling: boolean;
            /**
             * 消息保存时长。单位：小时。
             * 取值范围，请参见[使用限制](~~440347~~)>资源配额>消息保存时长的限制值。
             * 云消息队列 RocketMQ 版的消息存储完全实现Serverless弹性，按照实际存储空间收取费用，您可以通过调整消息保存时长来控制消息的存储容量。更多信息，请参见[存储费用](~~427238~~)。
             * @example `72`
             */
            messageRetentionTime: number;
            /**
             * 计费模式。
             * 参数取值如下：
             * - provisioned：预留
             * - ondemand：弹性
             * @example `provisioned`
             */
            chargeType: string;
            /**
             * 废弃参数，您无需填写。
             * @example `xxxx`
             */
            intranetSpec: string;
        };
        /**
         * 网络配置信息。
         */
        networkInfo: {
            /**
             * 专有网络配置信息。
             */
            vpcInfo: {
                /**
                 * 待创建实例所关联的专有网络的ID。
                 * > 云消息队列 RocketMQ 版实例创建后，选择的VPC不支持变更。若要修改关联的VPC，您需要先释放已购买的云消息队列 RocketMQ 版实例，再重新购买。
                 * @example `vpc-wz9qt50xhtj9krb******`
                 */
                vpcId: string;
                /**
                 * 实例所关联的交换机ID，当有多个交换机时，请以“|“进行拼接。
                 * > 云消息队列 RocketMQ 版实例创建后，选择的交换机不支持变更。若要修改关联的交换机，您需要先释放已购买的云消息队列 RocketMQ 版实例，再重新购买。
                 * @example `vsw-uf6gwtbn6etadpv*******`
                 */
                vSwitchId: string;
                /**
                 * 安全组ID。
                 * @example `sg-bp17hpmgz96tvnsdy6so`
                 */
                securityGroupIds: string;
                vSwitches: {
                    vSwitchId: string;
                }[];
            };
            /**
             * 公网配置信息。
             */
            internetInfo: {
                /**
                 * 是否开通公网访问。
                 * 参数取值如下：
                 * - enable：开启公网访问
                 * - disable：关闭公网访问
                 * 实例默认支持VPC访问方式，若开启公网访问，云消息队列 RocketMQ 版会收取公网下行带宽费用。具体计费信息，请参见[公网访问费用](~~427240~~)。
                 * @example `disable`
                 */
                internetSpec: string;
                /**
                 * 公网计费类型。
                 * 参数取值如下：
                 * - payByBandwidth：固定带宽计费。开启公网访问时，设置为该参数取值。
                 * - payByTraffic：按流量计费。开启公网访问时，设置为该参数取值。
                 * - uninvolved：不涉及。关闭公网访问时，设置为该参数取值。
                 * @example `uninvolved`
                 */
                flowOutType: string;
                /**
                 * 公网带宽规格。单位：Mb/s。
                 * 只有在公网计费类型为按固定带宽计费的时候才需要填写。
                 * 取值范围：[1 - 1000]。
                 * @example `100`
                 */
                flowOutBandwidth: number;
                /**
                 * 公网访问IP白名单。仅公网接入点支持配置IP白名单，VPC接入点暂不支持。
                 * - 若不配置IP白名单，则默认放通所有IP地址段通过公网访问云消息队列 RocketMQ 版服务端。
                 * - 若配置IP白名单，则仅允许白名单内的IP地址通过公网访问云消息队列 RocketMQ 版服务端。
                 */
                ipWhitelist: string[];
            };
        };
        /**
         * 商品编码。
         * <props="china">- ons_rmqsub_public_cn：包年包月实例</props>
         * <props="china">- ons_rmqpost_public_cn：按量付费实例</props>
         * <props="china">- ons_rmqsrvlesspost_public_cn ：Serverless实例</props>
         * <props="intl">- ons_rmqpost_public_intl：按量付费</props>
         * <props="intl">- ons_rmqsub_public_intl：包年包月</props>
         * @example `ons_ rmqpost_public_cn`
         */
        commodityCode: string;
        /**
         * 资源组ID。
         * @example `rg-aekzy6pist7uuna`
         */
        resourceGroupId: string;
    };
}
