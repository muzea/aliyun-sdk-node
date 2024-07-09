export interface DescribeChannelParticipantsRequest {
    /**
     * 应用ID，仅支持传单个ID。
     * @example `aec****`
     */
    "AppId": string;
    /**
     * 加入的频道，仅支持传单个ID。
     * @example `testId`
     */
    "ChannelId": string;
    /**
     * 当前页码。默认值为1。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页显示用户数量，默认每页显示10条用户数据。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 排序方式，取值：
     * - **asc**：递增。
     * - **desc**（默认值）：递减。
     * @example `asc`
     */
    "Order"?: string;
}
