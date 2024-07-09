export interface DescribeEventsResponse {
    /**
     * 查询结果总数
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID
     * @example `F975CCFF-CA3D-41C2-8004-362D232*****`
     */
    RequestId: string;
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 查询页面大小
     * @example `10`
     */
    PageSize: number;
    /**
     * 查询页面数量
     * @example `1`
     */
    PageNumber: number;
    Events: {
        /**
         * 事件列表
         */
        Event: {
            /**
             * 主用户名
             * @example `""`
             */
            PrimaryUserName: string;
            /**
             * 对象类型
             * @example `vpc`
             */
            ObjectType: string;
            /**
             * 事件名称
             * @example `envName`
             */
            EnventName: string;
            /**
             * 事件时间戳
             * @example `1564064041112`
             */
            EventTimestamp: number;
            /**
             * 次用户名
             * @example `""`
             */
            SecondUserName: string;
            /**
             * 消息代码
             * @example `webx.wam.change.vpc.create.success`
             */
            MsgCode: string;
            /**
             * 对象名称
             * @example `we*****-default-vpc`
             */
            ObjectName: string;
            /**
             * 事件消息
             * @example `Change wc-5d39b8bc6786bd4b149***** finish successfully, taking 108 seconds<`
             */
            EventMessage: string;
            /**
             * 事件ID
             * @example `we-5d39b8ba6786bd4b149*****`
             */
            EventId: string;
            ObjectAttrs: {
                /**
                 * 对象属性列表
                 */
                ObjectAttr: {
                    /**
                     * 属性名称
                     * @example `""`
                     */
                    AttributeName: string;
                    /**
                     * 属性值
                     * @example `""`
                     */
                    AttributeValue: string;
                }[];
            };
            /**
             * 应用ID
             * @example `wa-5d1d9d8c85c7f86e2ef*****`
             */
            AppId: string;
            /**
             * 事件等级
             * @example `INFO`
             */
            EventLevel: string;
            /**
             * 对象ID
             * @example `vpc-wz9e6y22o3o91nuy*****`
             */
            ObjectId: string;
            MsgParams: {
                MsgParam: string[];
            };
            /**
             * 主要用户ID
             * @example `1036052989950239`
             */
            PrimaryUserId: string;
            /**
             * 环境ID
             * @example `we-5d1dac8e08350d1dd94*****`
             */
            EnvId: string;
            /**
             * 事件跟踪ID
             * @example `wc-5d1dac8f08350d1dd94*****`
             */
            TraceId: string;
            /**
             * 次用户ID
             * @example `""`
             */
            SecondUserId: string;
        }[];
    };
    /**
     * 响应代码，若成功请求为OK
     * @example `OK`
     */
    Code: string;
}
