export interface DescribeDiskReplicaPairProgressResponse {
    /**
     * 同步进度。
     * @example `100`
     */
    Progress: number;
    /**
     * 最近一次恢复点的时间戳。有条件返回，复制对start后，才会返回该字段。
     * @example `1661917424`
     */
    RecoverPoint: number;
    /**
     * 请求ID。
     * @example `AAA478A0-BEE6-1D42-BEB6-A9CFEAD6****
    `
     */
    RequestId: string;
}
