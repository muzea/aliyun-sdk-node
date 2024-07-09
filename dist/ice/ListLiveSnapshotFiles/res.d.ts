export interface ListLiveSnapshotFilesResponse {
    /**
     * 请求ID。
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 文件列表。
     */
    FileList: {
        /**
         * OSS域名。
         * @example `oss-cn-shanghai.aliyuncs.com`
         */
        OssEndpoint: string;
        /**
         * OSS bucket。
         * @example `testbucket`
         */
        OssBucket: string;
        /**
         * OSS存储对象位置。
         * @example `snapshot/****a046-263c-3560-978a-fb287782****​/1660638613798.jpg`
         */
        OssObject: string;
        /**
         * 创建时间。
         * @example `2022-02-02T22:22:22Z`
         */
        CreateTime: string;
        /**
         * 创建时间戳，用于删除接口传参。
         * @example `1619503516000`
         */
        CreateTimestamp: number;
        /**
         * 是否覆盖截图。
         * @example `true`
         */
        IsOverlay: boolean;
    }[];
    /**
     * 下一页的开始时间，没有返回则表示结束翻页。
     * @example `2022-02-02T22:22:22Z`
     */
    NextStartTime: string;
}
