export interface ModifyPartitionNumRequest {
    /**
     * 实例ID。
     * @example `alikafka_post-cn-0pp1l9z****`
     */
    "InstanceId": string;
    /**
     * Topic名称。
     * @example `TopicPartitionNum`
     */
    "Topic": string;
    /**
     * 实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 增加分区数。
     * - 必须大于0。
     * - 建议分区数是6的倍数，减少数据倾斜风险。
     * - 分区总数限制1～360。
     * @example `6`
     */
    "AddPartitionNum": number;
}
