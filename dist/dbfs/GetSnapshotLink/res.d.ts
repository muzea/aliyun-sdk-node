export interface GetSnapshotLinkResponse {
    /**
     * 自动快照策略详情。
     */
    Data: {
        /**
         * 数据库文件系统的状态。
         * 取值范围：
         * unattached  待挂载
         * attached 已挂载
         * creating 创建中
         * attaching 挂载中
         * detaching 卸载中
         * deleting 删除中
         * deleted 已删除
         * resizing 扩容中
         * snapshotting 快照中
         * upgrading 升级中
         * @example `attached`
         */
        Status: string;
        /**
         * 快照链中所有快照的大小，单位为Byte。
         * @example `50331648`
         */
        TotalSize: number;
        /**
         * 数据库文件系统容量，单位为GiB。
         * @example `20`
         */
        SourceSize: number;
        /**
         * 数据库文件系统ID。
         * @example `dbfs-194j6u20sp2gisx*******`
         */
        FsId: string;
        /**
         * 挂载到的ECS实例集合。
         */
        EcsList: {
            /**
             * 已挂载的ECS实例ID。
             * @example `i-bp19mogqud1w1*******`
             */
            EcsId: string;
        }[];
        /**
         * 快照总个数。
         * @example `1`
         */
        SnapshotCount: number;
        /**
         * 数据库文件系统名称。
         * @example `test`
         */
        FsName: string;
        /**
         * 快照链ID。
         * @example `sl-b3zlgraysgcs9jy*******`
         */
        LinkId: string;
        /**
         * 数据库文件系统类型。取值范围：
         * - standard：标准版
         * - enterprise：企业版（公测中）
         * @example `standard`
         */
        Category: string;
    };
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
}
