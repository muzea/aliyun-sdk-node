export interface ModifyHotParamRuleResponse {
    /**
     * 错误信息。
     * @example `null`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `3FEEAD12-CE22-4EDE-A729-CE94EC070610`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 热点参数索引。
         * @example `1`
         */
        ParamIdx: number;
        /**
         * 命名空间。
         * @example `default`
         */
        Namespace: string;
        /**
         * 热点参数例外项。
         */
        ParamFlowItemList: {
            /**
             * 例外项参数值。
             * @example `apple`
             */
            ItemValue: string;
            /**
             * 例外项类型。
             * @example `String`
             */
            ItemType: string;
            /**
             * 例外项阈值。
             * @example `20`
             */
            Threshold: number;
        }[];
        /**
         * 统计周期时间，单位秒。
         * @example `1`
         */
        StatDurationSec: number;
        /**
         * 缓冲请求数。
         * @example `2`
         */
        BurstCount: number;
        /**
         * 热点规则ID
         * @example `123`
         */
        RuleId: number;
        /**
         * 资源名。
         * @example `handleService`
         */
        Resource: string;
        /**
         * 应用名，若为EDAS应用，则AppName为EDAS中的App ID，可在EDAS控制台“应用管理>基本信息”中查看对应的ID。
         * @example `ahas-demo`
         */
        AppName: string;
        /**
         * 流控效果为排队等待时对应的超时时间，单位毫秒。
         * @example `3000`
         */
        MaxQueueingTimeMs: number;
        /**
         * 流控效果，0表示快速失败，2表示排队等待。
         * @example `0`
         */
        ControlBehavior: number;
        /**
         * 统计维度，0表示并发数，1表示通过请求数。
         * @example `1`
         */
        MetricType: number;
        /**
         * 单机阈值。
         * @example `20`
         */
        Threshold: number;
        /**
         * 规则是否开启。
         * @example `false`
         */
        Enable: boolean;
    };
    /**
     * 返回码。
     * @example `200`
     */
    Code: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
}
