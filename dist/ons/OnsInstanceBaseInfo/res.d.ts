export interface OnsInstanceBaseInfoResponse {
    /**
     * 实例信息对象。
     */
    InstanceBaseInfo: {
        /**
         * 各个协议的接入点。
         */
        Endpoints: {
            /**
             * TCP协议内网接入点。
             * @example `http://MQ_INST_138015630679****_BAAy1Hac.cn-chengdu.mq-internal.aliyuncs.com:8080`
             */
            TcpEndpoint: string;
            /**
             * TCP协议公网接入点。
             * - 仅西南１（成都）、华北1（青岛）或华南1（深圳）地域的实例支持TCP协议公网接入点。
             * - 若您需要使用TCP协议公网接入点，您需要将客户端SDK升级至对应版本：
             *      - TCP协议Java SDK：2.0.0.Final及以上版本。更多信息，请参见[Java SDK版本说明](~~325569~~)。
             *      - TCP协议C\+\+ SDK：3.0.0及以上版本。更多信息，请参见[C++ SDK版本说明](~~325570~~)。
             * - 使用TCP协议公网接入点需要收取公网流量费用。具体计费信息，请参见[公网流量费用](~~325571~~)。
             *
             * @example `http://MQ_INST_138015630679****_BAAy1Hac.mq.cn-chengdu.aliyuncs.com:80`
             */
            TcpInternetEndpoint: string;
            /**
             * HTTP协议公网接入点。
             * @example `http://138015630679****.mqrest.cn-chengdu.aliyuncs.com`
             */
            HttpInternetEndpoint: string;
            /**
             * HTTP协议内网接入点。
             * @example `http://138015630679****.mqrest.cn-chengdu-internal.aliyuncs.com`
             */
            HttpInternalEndpoint: string;
            /**
             * HTTPS协议公网接入点。
             * @example `https://138015630679****.mqrest.cn-chengdu.aliyuncs.com`
             */
            HttpInternetSecureEndpoint: string;
        };
        /**
         * 实例是否有命名空间。取值说明如下：
         * - **true**：拥有独立命名空间，资源命名确保实例内唯一，跨实例之间可重名。
         * - **false**：无独立命名空间，实例内或者跨实例之间，资源命名必须全局唯一。
         * @example `true`
         */
        IndependentNaming: boolean;
        /**
         * 消息收发TPS上限。取值如下：
         * 5000、10000、20000、50000、100000、200000、300000、500000、800000、1000000。
         * 详细的解释以购买页的说明为准。
         * > 该参数仅适用于云消息队列 RocketMQ 版铂金版实例。
         * @example `10000`
         */
        MaxTps: number;
        /**
         * 备注。
         * @example `ons-cn-m7r1r5f****`
         */
        Remark: string;
        /**
         * 实例名称。
         * 长度限制为3～64 个字符，可以是中文、英文、数字、短划线（-）以及下划线（_）。
         * @example `test`
         */
        InstanceName: string;
        /**
         * 铂金版实例过期时间。
         * @example `1603555200000`
         */
        ReleaseTime: number;
        /**
         * 该实例下允许创建的Topic数量上限。取值如下：
         * 25、50、100、300、500。
         * > 该参数仅适用于云消息队列 RocketMQ 版铂金版实例。
         * @example `50`
         */
        TopicCapacity: number;
        /**
         * 实例状态。取值说明如下：
         * - **0**：铂金版实例部署中
         * - **2**：标准版实例已欠费
         * - **5**：标准版实例或铂金版实例服务中
         * - **7**：铂金版实例升级中且服务可用
         * @example `5`
         */
        InstanceStatus: number;
        /**
         * 实例ID。
         * @example `MQ_INST_138015630679****_BAAy1Hac`
         */
        InstanceId: string;
        /**
         * 实例类型。取值说明如下：
         * - **1**：标准版（后付费）实例
         * - **2**：铂金版（包年包月）实例
         * 云消息队列 RocketMQ 版的实例类型和规格信息，请参见[实例规格](~~185261~~)。
         * @example `2`
         */
        InstanceType: number;
        /**
         * 实例的创建时间。
         * 该参数值的格式为毫秒级Unix时间戳。
         * @example `1570701259403`
         */
        CreateTime: string;
        /**
         * 实例的商品售卖ID。
         * @example `ons-cn-m7r1r5f****`
         */
        spInstanceId: string;
        /**
         * 实例的售卖类型。
         * @example `1`
         */
        spInstanceType: number;
    };
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `6CC46974-65E8-4C20-AB07-D20D102E****`
     */
    RequestId: string;
}
