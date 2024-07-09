export interface ListLogsRequest {
    /**
     * 实例ID。
     * @example `airec-cn-o400whm78004`
     */
    "instanceId": string;
    /**
     * 查询条件:
     * key1:value1;key2:value;
     * 例如：requestId:xxxx;requestUri:xxx;
     * @example `key1:value1;key2:value`
     */
    "queryParams"?: string;
    /**
     * 开始时间（秒级时间戳）
     * @example `1586673466`
     */
    "startTime": number;
    /**
     * 结束时间 （秒级时间戳）
     * @example `1678155766`
     */
    "endTime": number;
    /**
     * 页数，默认1
     * @example `1`
     */
    "page"?: number;
    /**
     * 指定每页展示条数，默认为10，限制:[1-50]
     * @example `20`
     */
    "size"?: number;
}
