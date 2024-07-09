export interface DescribeDiskEventsResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 查询结果总条数。
     * @example `20`
     */
    TotalCount: number;
    /**
     * 查询凭证（Token）。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    NextToken: string;
    /**
     * 云盘事件类型列表。
     */
    DiskEvents: {
        /**
         * 事件类型。当前仅支持DataNeedProtect（数据需要保护）。
         * @example `DataNeedProtect`
         */
        Type: string;
        /**
         * 云盘ID。
         * @example `d-bp1bq5g3dxxo1x4o****`
         */
        DiskId: string;
        /**
         * 事件状态。可能值：
         * - Solved：已解决。
         * - UnSolved：未解决。
         * @example `Solved`
         */
        Status: string;
        /**
         * 时间发生的时间点。按照[ISO 8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
         * @example `2022-06-01T08:00:00Z`
         */
        Timestamp: string;
        /**
         * 事件描述。
         * @example `This is description.`
         */
        Description: string;
        /**
         * 事件发生后的推荐操作。可能值：
         * - Resize：扩容云盘。
         * - ModifySpec：变更云盘类型。
         * - NoAction：无需操作。
         * @example `NoAction`
         */
        RecommendAction: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
    }[];
}
