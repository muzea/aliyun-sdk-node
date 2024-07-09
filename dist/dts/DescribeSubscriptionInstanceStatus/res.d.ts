export interface DescribeSubscriptionInstanceStatusResponse {
    /**
     * 订阅实例的状态，返回值：
     * - **NotStarted**：未启动。
     * - **Prechecking**：预检查中。
     * - **PrecheckFailed**：预检查失败。
     * - **Starting**：启动中。
     * - **Normal**：正常。
     * - **Abnormal**：异常。
     * @example `Normal`
     */
    Status: string;
    /**
     * 数据订阅异常的错误提示。
     * @example `******`
     */
    ErrorMessage: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 调用错误时返回的错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    ErrMessage: string;
    /**
     * 订阅实例的付费类型，返回值：
     * - **PrePaid**：包年包月（预付费）。
     * - **PostPaid**：按量付费（后付费）。
     * @example `PrePaid`
     */
    PayType: string;
    /**
     * 下游消费客户端信息，由IP地址和DTS随机生成的随机数组成。
     * @example `114.***.***.**:dts********`
     */
    ConsumptionClient: string;
    /**
     * 订阅实例的下游消费时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2021-03-23T07:30:31Z`
     */
    ConsumptionCheckpoint: string;
    /**
     * 订阅实例中保存的数据范围的截止时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2021-03-26T14:03:21Z`
     */
    EndTimestamp: string;
    /**
     * 订阅实例中保存的数据范围的起始时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2021-03-15T08:25:34Z`
     */
    BeginTimestamp: string;
    /**
     * 请求ID。
     * @example `E0845D0A-6D36-4EEB-BE26-CF191E1A****`
     */
    RequestId: string;
    /**
     * 订阅Topic。
     * > 当该订阅实例为新版，且调用[CreateConsumerGroup](~~122863~~)接口创建了消费组时，才会返回本参数。
     * @example `cn_hangzhou_rm_bp1162kryivb8****_dtstest_version2`
     */
    SubscribeTopic: string;
    /**
     * 数据订阅实例名称。
     * @example `api测试`
     */
    SubscriptionInstanceName: string;
    /**
     * 数据订阅实例ID。
     * @example `rm-bp1162kryivb8****`
     */
    SubscriptionInstanceID: string;
    /**
     * 订阅任务ID。
     * @example `y0zz3t13h7d****`
     */
    TaskId: string;
    /**
     * 源实例的连接信息。
     */
    SourceEndpoint: {
        /**
         * 源库的实例类型。
         * > 当该订阅实例为新版时，才会返回该参数。
         * @example `RDS`
         */
        InstanceType: string;
        /**
         * 源库的实例ID。
         * @example `rm-bp1162kryivb8****`
         */
        InstanceID: string;
    };
    /**
     * 订阅数据的类型。
     */
    SubscriptionDataType: {
        /**
         * 订阅数据是否包含DML语句，返回值：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        DML: boolean;
        /**
         * 订阅数据是否包含DDL语句，返回值：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        DDL: boolean;
    };
    /**
     * 订阅实例的连接地址。
     */
    SubscriptionHost: {
        /**
         * 订阅实例的专有网络VPC（Virtual Private Cloud）连接信息，格式为`地址：端口号`。
         * @example `dts-cn-****-vpc.aliyuncs.com:18003`
         */
        VPCHost: string;
        /**
         * 订阅实例的公网连接信息，格式为`地址：端口号`。
         * @example `dts-cn-****.aliyuncs.com:18001`
         */
        PublicHost: string;
        /**
         * 订阅实例的私网连接信息，格式为`地址：端口号`。
         * @example `dts-cn-****-internal.aliyuncs.com:18002`
         */
        PrivateHost: string;
    };
    SubscriptionObject: {
        /**
         * 订阅对象。
         */
        SynchronousObject: {
            /**
             * 订阅对象所属数据库的名称。
             * @example `dtstestdata`
             */
            DatabaseName: string;
            /**
             * 是否订阅整库，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `false`
             */
            WholeDatabase: string;
            TableList: {
                Table: string[];
            };
        }[];
    };
}
