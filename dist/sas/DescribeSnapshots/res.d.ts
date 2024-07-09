export interface DescribeSnapshotsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `A4EB8B1C-1DEC-5E18-BCD0-D1BBB393****`
     */
    RequestId: string;
    /**
     * 页面显示的信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 查询下一页使用的token。
         * @example `CAESGgoSChAKDGNvbXBsZXRlVGltZRABCgQiAggAGAAiQAoJAGYXFWIAAAAACjMDLgAAADFTNzMyZDMwMzAzMDM1Mzc3Njc4MzA2ODY5NmI2YTY1Nzg2NTcxNjE2NDc4****`
         */
        NextToken: string;
        /**
         * 分页查询时，每页显示的备份快照信息的数量。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的备份快照信息的总数量。
         * @example `149`
         */
        TotalCount: number;
        /**
         * 当前页面显示的备份快照信息的数量。
         * @example `20`
         */
        Count: number;
    };
    /**
     * 快照列表。
     */
    Snapshots: {
        /**
         * 备份快照任务的状态。取值范围：
         * - **COMPLETE**：成功
         * - **PARTIAL_COMPLETE**：部分成功
         * - **FAILED**：失败
         * @example `COMPLETE`
         */
        Status: string;
        /**
         * 快照HASH值。
         * @example `9ee47cf12351e4ddecce8c12f4957d3946cd96fbe24cd4ab264c7200839d****`
         */
        SnapshotHash: string;
        /**
         * 快照实际项目数。
         * > 目前仅文件备份可用。
         * @example `123`
         */
        ActualItems: number;
        /**
         * 保存备份库快照的仓库ID。
         * @example `v-000ccok3zmw7fbzz****`
         */
        VaultId: string;
        /**
         * 去重后快照实际数据量。单位为字节。
         * @example `686188****`
         */
        ActualBytes: number;
        /**
         * 数据源类型。取值范围：
         * - **ECS_FILE**：ECS文件的备份快照。
         * - **OSS**：阿里云OSS的备份快照。
         * - **NAS**：阿里云NAS的备份快照。
         * - **OTS_TABLE**：阿里云表格存储的备份快照。
         * @example `ECS_FILE`
         */
        SourceType: string;
        /**
         * 仅当**SourceType**取值为**ECS_FILE**时，该参数有效。表示备份客户端ID。
         * @example `c-000dbefaw9f7gnbw****`
         */
        ClientId: string;
        /**
         * 备份项目数。
         * > 目前仅文件备份可用。
         * @example `6`
         */
        ItemsDone: number;
        /**
         * 数据源总量。单位为字节。
         * @example `3484541815****`
         */
        BytesTotal: number;
        /**
         * 备份快照保留天数。
         * @example `7`
         */
        Retention: number;
        /**
         * 备份快照的创建时间。UNIX时间，单位为秒。
         * @example `1646793988`
         */
        CreatedTime: number;
        /**
         * 父备份的快照HASH值。
         * @example `a0181606689c9562f092b3190bddb8a62bb5a24784424ba2102bc7fe92ae****`
         */
        ParentSnapshotHash: string;
        /**
         * ECS实例ID。
         * @example `i-2ze78zfakirgh1yl****`
         */
        InstanceId: string;
        /**
         * 备份计划ID。
         * @example `plan-000ee8gh2ljelsnb****`
         */
        PlanId: string;
        /**
         * 备份服务地域ID。
         * @example `us-east-1`
         */
        RegionId: string;
        /**
         * 服务器UUID。
         * @example `d332af48-1269-4a55-a6db-8543a80f****`
         */
        Uuid: string;
        /**
         * 记录备份失败信息的文件，包含备份部分完成的信息。
         * @example `s-0008ndhgrflh55i5****.csv`
         */
        ErrorFile: string;
        /**
         * 快照ID。
         * @example `s-0003ahfuqpjdztsg****`
         */
        SnapshotId: string;
        /**
         * 备份任务ID。
         * @example `job-000a2q5vg6awgo01****`
         */
        JobId: string;
        /**
         * 仅当**SourceType**取值为**ECS_FILE**时，该参数有效。表示备份的文件路径。
         * @example `["/home"]
        `
         */
        Path: string;
        /**
         * 数据源项目总数。
         * > 目前仅文件备份可用。
         * @example `7`
         */
        ItemsTotal: number;
        /**
         * 增量备份的数据量。单位为字节。
         * @example `800`
         */
        BytesDone: number;
        /**
         * 仅当**SourceType**取值为**NAS**时，该参数有效。表示备份的文件路径。
         */
        Paths: string[];
        /**
         * 防勒索客户端版本号。
         * @example `2.10.0`
         */
        ClientVersion: string;
    }[];
}
