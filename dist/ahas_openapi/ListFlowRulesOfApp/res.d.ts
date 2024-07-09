export interface ListFlowRulesOfAppResponse {
    /**
     * 错误信息
     * @example `null`
     */
    Message: string;
    /**
     * 请求ID
     * @example `3FEEAD12-CE22-4EDE-A729-CE94EC070610`
     */
    RequestId: string;
    /**
     * 返回数据
     */
    Data: {
        /**
         * 当前页数
         * @example `1`
         */
        PageIndex: number;
        /**
         * 规则列表
         */
        Datas: {
            /**
             * 关联接口名/入口资源名
             * @example `handleServiceB`
             */
            RefResource: string;
            /**
             * 退化单机阈值，当退化策略为退化到单机（ClusterFallbackStrategy=0）时返回。
             * @example `0`
             */
            ClusterFallbackThreshold: number;
            /**
             * 命名空间
             * @example `default`
             */
            Namespace: string;
            /**
             * 来源应用
             * @example `default`
             */
            LimitOrigin: string;
            /**
             * 集群模式下统计窗口时长
             * @example `0`
             */
            StatDurationMs: number;
            /**
             * 阈值模式，0表示单机均摊阈值，1表示集群阈值
             * @example `0`
             */
            ClusterThresholdType: number;
            /**
             * 规则ID
             * @example `123`
             */
            RuleId: number;
            /**
             * 统计维度
             * @example `0`
             */
            RelationStrategy: number;
            /**
             * 应用名，若为EDAS应用，则AppName为EDAS中的App ID，可在EDAS控制台“应用管理>基本信息”中查看对应的ID。
             * @example `ahas-demo`
             */
            AppName: string;
            /**
             * 接口资源名
             * @example `handleServiceA`
             */
            Resource: string;
            /**
             * 集群接口预估最大QPS
             * @example `0`
             */
            ClusterEstimatedMaxQps: number;
            /**
             * 流控效果。0表示快速失败，1表示预热启动，2表示排队等待。
             * @example `0`
             */
            ControlBehavior: number;
            /**
             * 超时时间
             * @example `2000`
             */
            MaxQueueingTimeMs: number;
            /**
             * 集群流控通信失败退化策略，0表示退化到单机，1表示直接通过
             * @example `0`
             */
            ClusterFallbackStrategy: number;
            /**
             * 预热时间
             * @example `30`
             */
            WarmUpPeriodSec: number;
            /**
             * 是否为集群模式
             * @example `false`
             */
            ClusterMode: boolean;
            /**
             * 流控阈值类型。
             * @example `2`
             */
            ThresholdMode: number;
            /**
             * 阈值
             * @example `30`
             */
            Threshold: number;
            /**
             * 规则是否开启
             * @example `true`
             */
            Enable: boolean;
        }[];
        /**
         * 总页数
         * @example `3`
         */
        TotalPage: number;
        /**
         * 每页数据条数
         * @example `10`
         */
        PageSize: number;
        /**
         * 数据总条数
         * @example `23`
         */
        TotalCount: number;
    };
    /**
     * 返回码
     * @example `200`
     */
    Code: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
}
