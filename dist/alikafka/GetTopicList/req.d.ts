export interface GetTopicListRequest {
    /**
     * Topic所属实例的ID。
     * @example `alikafka_pre-cn-0pp1954n****`
     */
    "InstanceId": string;
    /**
     * 当前页码。默认值：1。
     * @example `1`
     */
    "CurrentPage"?: string;
    /**
     * 分页大小。默认值：10。
     * @example `10`
     */
    "PageSize"?: string;
    /**
     * Topic所属实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 获取指定Topic信息的Topic名称。
     * @example `topic_name`
     */
    "Topic"?: string;
}
