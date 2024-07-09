export interface GetInstanceResponse {
    /**
     * 请求ID，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `05AB7FBD-F1D3-5D87-BF78-BD782249****`
     */
    requestId: string;
    /**
     * 执行结果是否成功。
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果。
     */
    data: {
        /**
         * 实例所属的地域ID。
         * @example `cn-hangzhou`
         */
        regionId: string;
        /**
         * 实例ID。
         * @example `rmq-cn-7e22ody****`
         */
        instanceId: string;
        /**
         * 实例名称。
         * @example `test instance`
         */
        instanceName: string;
        /**
         * 实例状态。
         * 参数取值如下：
         * - RELEASED：已释放
         * - RUNNING：运行中
         * - STOPPED：已停服
         * - CHANGING：变更中
         * - CREATING：创建中
         * @example `RUNNING`
         */
        status: string;
        /**
         * 实例的启动时间。
         * @example `2022-08-01 00:00:00`
         */
        startTime: string;
        /**
         * 实例的到期时间。
         * @example `2022-09-01 00:00:00`
         */
        expireTime: string;
        /**
         * 实例的释放时间。
         * @example `2022-09-07 00:00:00`
         */
        releaseTime: string;
        /**
         * 实例所属的用户ID。
         * @example `111111111111111`
         */
        userId: string;
        /**
         * 商品的售卖渠道BID。
         * @example `26842`
         */
        bid: string;
        /**
         * 消息队列RocketMQ 5.x系列实例的商品代号类似于ons_rmqsub_public_cn。
         * @example `ons_rmqsub_public_cn`
         */
        commodityCode: string;
        /**
         * 实例所属的服务编码。消息队列RocketMQ版的服务编码为rmq。
         * @example `rmq`
         */
        serviceCode: string;
        /**
         * 实例的主系列编码。主系列间的具体差异，请参见[产品选型](~~444722~~)。
         *  参数取值如下：
         * - standard：标准版
         * - ultimate：铂金版
         * - professional：专业版
         * @example `standard`
         */
        seriesCode: string;
        /**
         * 实例的子系列编码。子系列间的具体差异，请参见[产品选型](~~444722~~)。
         * 参数取值如下：
         * - cluster_ha：集群高可用版
         * - single_node：单节点版
         * @example `cluster_ha`
         */
        subSeriesCode: string;
        /**
         * 实例的付费类型。
         * 参数取值如下：
         * - PayAsYouGo：按量付费（后付费）
         * - Subscription：包年包月（预付费）
         * @example `Subscription`
         */
        paymentType: string;
        /**
         * 实例的备注信息。
         * @example `This is remark for instance.`
         */
        remark: string;
        /**
         * 网络信息。
         */
        networkInfo: {
            /**
             * 专有网络信息。
             */
            vpcInfo: {
                /**
                 * 实例所关联的专有网络的ID。
                 * @example `vpc-uf6of9452b2pba82c****`
                 */
                vpcId: string;
                /**
                 * 实例所关联的交换机ID。
                 * @example `vsw-uf6gwtbn6etadpvz7****`
                 */
                vSwitchId: string;
                /**
                 * 交换机列表
                 */
                vSwitches: {
                    /**
                     * 交换机ID
                     */
                    vSwitchId: string;
                    /**
                     * 可用区ID
                     */
                    zoneId: string;
                }[];
                /**
                 * 安全组ID。
                 * @example `sg-hp35r2hc3a3sv8q2sb16`
                 */
                securityGroupIds: string;
            };
            /**
             * 接入点信息。
             */
            endpoints: {
                /**
                 * 表示实例的接入点类型。
                 * @example `TCP_INTERNET`
                 */
                endpointType: string;
                /**
                 * 实例的接入点。
                 * @example `rmq-cn-c4d2tbk****-vpc.cn-hangzhou.rmq.aliyuncs.com:8080`
                 */
                endpointUrl: string;
                /**
                 * 公网访问IP白名单。仅公网接入点支持配置IP白名单，VPC接入点暂不支持。
                 * - 若不配置IP白名单，则默认放通所有IP地址段通过公网访问消息队列RocketMQ版服务端。
                 * - 若配置IP白名单，则仅允许白名单内的IP地址通过公网访问消息队列RocketMQ版服务端。
                 * 该字段不再推荐使用，请使用internetInfo.ipWhitelist字段。
                 * @example `192.168.x.x/24`
                 */
                ipWhitelist: string[];
            }[];
            /**
             * 实例公网信息。
             */
            internetInfo: {
                /**
                 * 是否开通公网访问。
                 * 参数取值如下：
                 * - enable：开启公网访问
                 * - disable：关闭公网访问
                 * 实例默认支持VPC访问方式，若开启公网访问，消息队列RocketMQ版会收取公网下行带宽费用。具体计费信息，请参见[公网访问费用](~~427240~~)。
                 * @example `enable`
                 */
                internetSpec: string;
                /**
                 * 公网计费类型。
                 * 参数取值如下：
                 * - payByBandwidth：固定带宽计费，开启公网访问时，设置为该参数值。
                 * - uninvolved：不涉及，未开启公网访问时，设置为该参数值。
                 * @example `payByBandwidth`
                 */
                flowOutType: string;
                /**
                 * 公网带宽规格。单位：1 Mb/s。
                 * @example `1`
                 */
                flowOutBandwidth: number;
                /**
                 * 公网访问IP白名单列表。
                 * - 若不配置IP白名单，则默认放通所有IP地址段通过公网访问消息队列RocketMQ版服务端。
                 * - 若配置IP白名单，则仅允许白名单内的IP地址通过公网访问消息队列RocketMQ版服务端。
                 */
                ipWhitelist: string[];
            };
        };
        /**
         * 账号信息。
         */
        accountInfo: {
            /**
             * 实例的用户名。使用公网访问时，SDK代码中需要配置实例的用户名和密码，进行身份验证。
             * @example `6W0xz2uPfiwp****`
             */
            username: string;
        };
        /**
         * 容量信息。
         */
        instanceQuotas: {
            /**
             * 实例的配额名称。
             * 参数取值如下：
             * - TOPIC_COUNT：实例的Topic创建额度
             * @example `TOPIC_COUNT`
             */
            quotaName: string;
            /**
             * 已使用量。单位：个。
             * @example `10`
             */
            usedCount: number;
            /**
             * 免费额度。单位：个。
             * @example `20`
             */
            freeCount: number;
            /**
             * 总配额。单位：个。
             * @example `100`
             */
            totalCount: number;
        }[];
        /**
         * 实例的创建时间。
         * @example `2022-08-01 00:00:00 `
         */
        createTime: string;
        /**
         * 实例最后的修改时间。
         * @example `2022-08-02 00:00:00 `
         */
        updateTime: string;
        /**
         * 扩展配置。该字段不再推荐使用，请使用productInfo、internetInfo、aclInfo等字段替代。
         */
        extConfig: {
            /**
             * 实例的鉴权类型。
             * 参数取值如下：
             *
             * - default：智能身份识别
             * @example `default`
             */
            aclType: string;
            /**
             * 消息发送和接收的比例。
             * @example `0.5`
             */
            sendReceiveRatio: number;
            /**
             * 是否开启规格外突发弹性能力。
             * 参数取值如下：
             * - true：开启弹性能力
             * - false：不开启弹性能力
             * 仅当supportAutoScaling参数值为enable，即实例支持开启弹性能力，该参数才有效。
             * @example `true`
             */
            autoScaling: boolean;
            /**
             * 消息保存时长。单位：小时。
             * 取值范围，请参见[使用限制](~~440347~~)>资源配额>消息保存时长的限制值。
             * 消息队列RocketMQ版的消息存储完全实现Serverless弹性，按照实际存储空间收取费用，您可以通过调整消息保存时长来控制消息的存储容量。更多信息，请参见[存储费用](~~427238~~)。
             * @example `72`
             */
            messageRetentionTime: number;
            /**
             * 实例是否支持开启规格外突发弹性能力。
             * 参数取值如下：
             * - true：支持开启弹性能力
             * - false：不支持开启弹性能力
             * 开启弹性突发能力后，消息队列RocketMQ允许该实例在一定范围内超过基础规格限制的TPS，且超过基础规格外的部分，需要收取额外的弹性规格费用。具体计费信息，请参见[计算能力费用](~~427237~~)。
             * > 仅部分规格的实例支持开启弹性突发规格能力，具体支持的实例，请参见[实例规格](~~444715~~)。
             * @example `true`
             */
            supportAutoScaling: boolean;
            /**
             * 是否开通公网访问。
             * 参数取值如下：
             * - enable：开通公网访问
             * - disable：关闭公网访问
             * 实例默认支持VPC访问方式，若开启公网访问，消息队列RocketMQ版会收取公网下行带宽费用。具体计费信息，请参见[公网访问费用](~~427240~~)。
             * @example `enable`
             */
            internetSpec: string;
            /**
             * 公网计费类型。
             * 参数取值如下：
             * - payByTraffic：按流量计费
             * - payByBandwidth：按带宽计费
             * - uninvolved：不涉及
             * @example `payByBandwidth`
             */
            flowOutType: string;
            /**
             * 公网带宽规格。单位：Mb/s。
             * @example `10`
             */
            flowOutBandwidth: number;
            /**
             * 消息收发计算规格。具体消息收发TPS上限，请参见[实例规格](~~444715~~)。
             * @example `rmq.s2.2xlarge`
             */
            msgProcessSpec: string;
        };
        /**
         * 资源组ID。
         * @example `rg-acfm3tmjruyribi`
         */
        resourceGroupId: string;
        /**
         * 实例的扩展配置。
         */
        productInfo: {
            /**
             * 消息收发计算规格。具体消息收发TPS上限，请参见[实例规格](~~444715~~)。
             * @example `rmq.s2.2xlarge`
             */
            msgProcessSpec: string;
            /**
             * 消息发送和接收的比例。
             * @example `0.5`
             */
            sendReceiveRatio: number;
            /**
             * 是否开启规格外突发弹性能力。
             * 参数取值如下：
             * - true：支持开启弹性能力
             * - false：不支持开启弹性能力
             * 仅当supportAutoScaling参数值为enable，即实例支持开启弹性能力，该参数才有效。
             * @example `true`
             */
            autoScaling: boolean;
            /**
             * 消息保存时长。单位：小时。
             * 取值范围，请参见[使用限制](~~440347~~)>资源配额>消息保存时长的限制值。
             * 消息队列RocketMQ版的消息存储完全实现Serverless弹性，按照实际存储空间收取费用，您可以通过调整消息保存时长来控制消息的存储容量。更多信息，请参见[存储费用](~~427238~~)。
             * @example `72`
             */
            messageRetentionTime: number;
            /**
             * 是否支持开启规格外突发弹性能力。
             * 参数取值如下：
             * - true：支持开启弹性能力
             * - false：不支持开启弹性能力
             * 开启弹性突发能力后，消息队列RocketMQ允许该实例在一定范围内超过基础规格限制的TPS，且超过基础规格外的部分，需要收取额外的弹性规格费用。具体计费信息，请参见[计算能力费用](~~427237~~)。
             * > 仅部分规格的实例支持开启弹性突发规格能力，具体支持的实例，请参见[实例规格](~~444715~~)。
             * @example `true`
             */
            supportAutoScaling: boolean;
            /**
             * 是否开启消息轨迹功能。
             * - true：开启消息轨迹功能
             * - false：关闭消息轨迹功能
             * <props="intl">该参数暂不生效，不管参数是否开启，实例都默认支持轨迹功能。</props>
             * <props="china">该参数仅对Serverless类型的实例生效，若开启消息轨迹功能，会产生相关的消息轨迹费用，具体计费信息，请参见[Serverless计费说明](~~2586280~~)。</props>
             * <props="china">对于按量付费和包年包月实例，该参数不生效，即不管参数是否开启，都默认支持消息轨迹功能。</props>
             * @example `true`
             */
            traceOn: boolean;
        };
        /**
         * 访问控制信息。
         */
        aclInfo: {
            /**
             * 实例的鉴权类型列表。
             */
            aclTypes: string[];
            /**
             * 内网免身份识别开关。
             * @example `true`
             */
            defaultVpcAuthFree: boolean;
            /**
             * 实例的鉴权类型。已废弃，推荐使用aclTypes字段
             * @example `default`
             */
            aclType: string;
        };
        /**
         * 实例软件信息。
         */
        software: {
            /**
             * 软件版本。
             * @example `5.0-rmq-20230619-1`
             */
            softwareVersion: string;
            /**
             * 升级时间段。
             * @example `02:00-06:00`
             */
            maintainTime: string;
            /**
             * 升级方式。
             * 参数取值如下
             * - auto：自动升级
             * - manual：手动升级
             * @example `auto`
             */
            upgradeMethod: string;
        };
        /**
         * 主题数量。
         * @example `10`
         */
        topicCount: number;
        /**
         * 消费组数量。
         * @example `10`
         */
        groupCount: number;
        /**
         * 资源标签列表。
         */
        tags: {
            /**
             * 资源标签key值。
             * @example `key`
             */
            key: string;
            /**
             * 资源标签value值。
             * @example `value`
             */
            value: string;
        }[];
    };
    /**
     * 错误码。
     * @example `MissingInstanceId`
     */
    code: string;
    /**
     * 错误信息。
     * @example `Parameter instanceId is mandatory for this action .`
     */
    message: string;
    /**
     * HTTP状态码。
     * @example `400`
     */
    httpStatusCode: number;
    /**
     * 动态错误码。
     * @example `InstanceId`
     */
    dynamicCode: string;
    /**
     * 动态错误信息。
     * @example `instanceId`
     */
    dynamicMessage: string;
}
