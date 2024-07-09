export interface ListMessageReceiversRequest {
    /**
     * iovcc项目工程ID。
     * @example `sfgsghd6`
     */
    "ProjectId": string;
    /**
     * 消息ID。
     * @example `32555`
     */
    "MessageId": string;
    /**
     * 分页查询页码。
     * @example `1`
     */
    "PageIndex"?: number;
    /**
     * 分页查询每页数据集大小。
     * @example `20`
     */
    "PageSize"?: number;
}
