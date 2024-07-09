export interface DescribeChannelParticipantsRequest {
    /**
     * 应用ID，可通过控制台创建和查询，仅支持传单个ID。
     * @example `aec****`
     */
    "AppId": string;
    /**
     * 加入的频道，仅支持传单个ID。
     * @example `testId`
     */
    "ChannelId": string;
    /**
     * 排序方式，取值：
     * - **asc**：递增。
     * - **desc**（默认值）：递减。
     * @example `asc`
     */
    "Order"?: string;
    /**
     * 第几页，默认查询第1页。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页显示用户数量，默认每页显示10条用户数据。
     * @example `10`
     */
    "PageSize"?: number;
}
