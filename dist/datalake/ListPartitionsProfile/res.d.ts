export interface ListPartitionsProfileResponse {
    /**
     * 错误码
     * @example `-`
     */
    Code: string;
    /**
     * 错误信息
     * @example `-`
     */
    Message: string;
    /**
     * 请求ID
     * @example `97434FA4-A6B2-1AE4-A174-76964F29C759`
     */
    RequestId: string;
    /**
     * 请求是否成功。取值如下：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 总条数
     * @example `10`
     */
    Total: number;
    /**
     * 分区数据概况列表
     */
    Data: any[];
    /**
     * 元仓更新时间
     * @example `2023-08-30 19:16:10`
     */
    LatestDate: string;
    /**
     * 访问频次更新时间（已废弃）
     * @example `-`
     */
    LatestAccessNumDate: string;
}
