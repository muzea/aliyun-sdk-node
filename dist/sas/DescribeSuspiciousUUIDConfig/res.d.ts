export interface DescribeSuspiciousUUIDConfigResponse {
    /**
     * 查询到该防御类型生效的服务器的总数量。
     * @example `2`
     */
    Count: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `6044DC07-86F1-5DDA-A611-EC578EA4EEE6`
     */
    RequestId: string;
    /**
     * 查询到的该防御类型生效的服务器的UUID列表。
     */
    UUIDList: string[];
}
