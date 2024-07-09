export interface ListAutoSnapshotPolicyUnappliedDbfsResponse {
    /**
     * 分页查询时设置的页码。默认值：1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时设置的每页条数。默认值10。
     * @example `10`
     */
    PageSize: number;
    /**
     * 查询结果总条数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 未设置自动快照策略的DBFS列表。
     */
    DbfsList: {
        /**
         * DBFS实例ID。
         * @example `dbfs-ejdvesb0qvuywvg*******`
         */
        FsId: string;
        /**
         * DBFS实例名称。
         * @example `test`
         */
        FsName: string;
        /**
         * 数据库文件系统的状态。
         * 取值范围：
         * - unattached  待挂载
         * - attached 已挂载
         * - creating 创建中
         * - attaching 挂载中
         * - detaching 卸载中
         * - deleting 删除中
         * - deleted 已删除
         * - resizing 扩容中
         * - snapshotting 快照中
         * - upgrading 升级中
         * @example `attached`
         */
        Status: string;
        /**
         * 容量（GB）。
         * @example `20`
         */
        SizeG: number;
        /**
         * 所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 快照总个数。
         * @example `1`
         */
        SnapshotCount: number;
        /**
         * 快照链中所有快照的大小，单位为Byte。
         * @example `50331648`
         */
        TotalSize: number;
    }[];
}
