export interface ModifyTopicRemarkRequest {
    /**
     *
     * 实例ID。
     * @example `alikafka_post-cn-0pp1l9z****`
     */
    "InstanceId": string;
    /**
     * Topic的名称。
     * @example `alikafka_post-cn-0pp1l9z8****`
     */
    "Topic": string;
    /**
     *
     * 实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 备注。
     * @example `testremark`
     */
    "Remark"?: string;
}
