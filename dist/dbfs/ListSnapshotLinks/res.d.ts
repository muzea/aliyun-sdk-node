export interface ListSnapshotLinksResponse {
    /**
     * 查询结果总条数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 分页查询时设置的每页条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 快照链信息组成的集合。
     */
    SnapshotLinks: {
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
         * 快照链中所有快照的大小，单位为Byte。
         * @example `
        50331648`
         */
        TotalSize: number;
        /**
         * 数据库文件系统容量，单位为GiB。
         * @example `20`
         */
        SourceSize: number;
        /**
         * 数据库文件系统ID。
         * @example `dbfs-q7qsgyqptjk******`
         */
        FsId: string;
        /**
         * 挂载到的ECS实例集合。
         */
        EcsList: {
            /**
             * 已挂载的ECS实例ID。
             * @example `i-bp1f4eo2biro*******`
             */
            EcsId: string;
        }[];
        /**
         * 快照总个数。
         * @example `1`
         */
        SnapshotCount: number;
        /**
         * DBFS实例名称。
         * @example `test`
         */
        FsName: string;
        /**
         * 快照链ID
         * @example `sl-b3zlgraysgcs9jy*******`
         */
        LinkId: string;
    }[];
}
