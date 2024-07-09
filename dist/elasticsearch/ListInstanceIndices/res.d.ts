export interface ListInstanceIndicesResponse {
    /**
     * 请求ID。
     * @example `F99407AB-2FA9-489E-A259-40CF6DCC****`
     */
    RequestId: string;
    /**
     * 返回头信息。
     */
    Headers: {
        /**
         * 云端托管中的索引总大小。单位：Byte。
         * @example `18093942932`
         */
        X-Managed-StorageSize: number;
        /**
         * 云端托管中的索引总个数。
         * @example `15`
         */
        X-Managed-Count: number;
        /**
         * 该实例的OpenStore冷阶段索引总大小。单位：Byte。
         * @example `9093942932`
         */
        X-OSS-StorageSize: number;
        /**
         * OpenStore冷阶段索引总条数。
         * @example `5`
         */
        X-OSS-Count: number;
    };
    /**
     * 索引列表详情。
     */
    Result: {
        /**
         * 该参数已废弃，无需关注。
         * @example `false`
         */
        isManaged: string;
        /**
         * 查询索引列表的时间。
         * @example `2021-01-11T05:49:41.114Z`
         */
        createTime: string;
        /**
         * 当前索引所占用的总存储空间。单位：Byte。
         * @example `49298589`
         */
        size: number;
        /**
         * 索引托管状态，支持以下三种状态：
         * - following：托管中。
         * - closing：取消托管中。
         * - closed：未托管。
         * @example `closing`
         */
        managedStatus: string;
        /**
         * 索引名称。
         * @example `.kibana_task_manager_1`
         */
        name: string;
        /**
         * 索引的运行状态，支持以下三种状态：
         * - green：健康。
         * - yellow：报警。
         * - red：异常。
         * @example `green`
         */
        health: string;
        /**
         * 当前存储生命周期。取值含义：
         * - warm：温阶段。
         * - cold：冷阶段。
         * - hot：热阶段。
         * - delete：删除阶段。
         * > 为空时，表示当前索引不被生命周期所管理。
         * @example `warm`
         */
        phase: string;
        /**
         * 当前索引的全量生命周期状态。
         * @example `{    "indices": {         ".ds-console-2021.08.18-000002": {             "index": ".ds-console-2021.08.18-000002",             "managed": true,             "policy": "console",             "lifecycle_date_millis": 1629277498775,             "age": "2.64h",             "phase": "hot",             "phase_time_millis": 1629277450334,             "action": "complete",             "action_time_millis": 1629278605586,             "step": "complete",             "step_time_millis": 1629278605586,             "phase_execution": {                 "policy": "console",                 "phase_definition": {                     "min_age": "0s",                     "actions": {                         "rollover": {                             "max_size": "1gb",                             "max_age": "1d",                             "max_docs": 10000                         },                         "set_priority": {                             "priority": 1000                         }                     }                 },                 "version": 1,                 "modified_date_in_millis": 1629277370953             }         }     } }`
         */
        ilmExplain: string;
    }[];
}
