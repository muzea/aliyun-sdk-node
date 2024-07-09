export interface DescribePortConnsCountResponse {
    /**
     * 不活跃的连接数量。
     * @example `121`
     */
    InActConns: number;
    /**
     * 活跃的连接数量。
     * @example `159`
     */
    ActConns: number;
    /**
     * 本次请求的ID。
     * @example `48859E14-A9FB-4100-99FF-AAB75CA46776`
     */
    RequestId: string;
    /**
     * 新建连接数量。
     * @example `0`
     */
    Cps: number;
    /**
     * 并发连接数量。
     * @example `46340`
     */
    Conns: number;
}
