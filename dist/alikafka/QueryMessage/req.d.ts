export interface QueryMessageRequest {
    /**
     * 资源的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例 ID。
     * @example `alikafka_pre-cn-mp919o4v****`
     */
    "InstanceId": string;
    /**
     * Topic名称。
     * @example `testkafka`
     */
    "Topic": string;
    /**
     * 查询类型取值有两种
     * - byOffset：通过位点来进行查询。选择位点查询则需要填入分区ID和分区位点参数。
     * - byTimestamp：通过时间来进行查询。选择时间查询则需要填入BeginTime参数。
     * @example `byTimestamp`
     */
    "QueryType": string;
    /**
     * 分区 ID。
     * @example `0`
     */
    "Partition"?: string;
    /**
     * 分区位点。
     * @example `100`
     */
    "Offset"?: string;
    /**
     * 查询范围的起始时间戳。单位：毫秒。
     * @example `1672410180000`
     */
    "BeginTime"?: number;
}
