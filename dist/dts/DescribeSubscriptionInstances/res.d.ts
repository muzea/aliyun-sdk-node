export interface DescribeSubscriptionInstancesResponse {
    /**
     * 请求ID。
     * @example `FC3BAAF2-74E3-4471-8EB5-96202D6A****`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 当前页可展示的最大记录数。
     * @example `30`
     */
    PageRecordCount: number;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 阿里云主账号下所有符合条件的数据订阅实例数量。
     * @example `1`
     */
    TotalRecordCount: number;
    /**
     * 调用错误时返回的错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    ErrMessage: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    SubscriptionInstances: {
        /**
         * 数据订阅实例列表和各订阅实例的详情。
         */
        SubscriptionInstance: {
            /**
             * 订阅实例的状态，返回值为：
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
             * @example `xxxxxxxx`
             */
            ErrorMessage: string;
            /**
             * 订阅实例的付费类型，返回值：
             * - **PrePaid**：包年包月（预付费）。
             * - **PostPaid**：按量付费（后付费）。
             * @example `PrePaid`
             */
            PayType: string;
            /**
             * 下游链接对应的IP和随机标识信息，其中IP为下游客户端的IP地址，随机标示为DTS生成的随机ID。
             * @example `114.***.***.**:dts********`
             */
            ConsumptionClient: string;
            /**
             * 订阅实例的下游消费时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2021-06-21T09:30:31Z`
             */
            ConsumptionCheckpoint: string;
            /**
             * 订阅实例保存数据范围的末尾时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2021-06-21T10:17:21Z`
             */
            EndTimestamp: string;
            /**
             * 订阅实例创建时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2021-06-21T02:48:20Z`
             */
            InstanceCreateTime: string;
            /**
             * 订阅实例保存数据范围的起始时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2021-06-21T08:25:43Z`
             */
            BeginTimestamp: string;
            /**
             * 订阅Topic。
             * > 当该订阅实例为新版，且调用[CreateConsumerGroup](~~122863~~)接口创建了消费组时，才会返回本参数。
             * @example `cn_hangzhou_rm_bp1162kryivb8****_dtstest_version2`
             */
            SubscribeTopic: string;
            /**
             * 数据订阅实例名称。
             * @example `mysql订阅`
             */
            SubscriptionInstanceName: string;
            /**
             * 数据订阅实例ID。
             * @example `rm-bp1162kryivb8****`
             */
            SubscriptionInstanceID: string;
            /**
             * 订阅任务创建时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2021-06-21T02:48:20Z`
             */
            JobCreateTime: string;
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
            Tags: {
                /**
                 * 标签集合。
                 */
                Tag: {
                    /**
                     * 标签键。
                     * @example `testkey1`
                     */
                    Key: string;
                    /**
                     * 标签键对应的标签值。
                     * @example `testvalue1`
                     */
                    Value: string;
                }[];
            };
            /**
             * 源实例的连接信息。
             */
            SourceEndpoint: {
                /**
                 * 源实例类型。
                 * > 当该订阅实例为新版时，才会返回该参数。
                 * @example `RDS`
                 */
                InstanceType: string;
                /**
                 * 源实例ID。
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
        }[];
    };
}
