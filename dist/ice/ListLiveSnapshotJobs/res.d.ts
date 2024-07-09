export interface ListLiveSnapshotJobsResponse {
    /**
     * 请求ID。
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 任务列表。
     */
    JobList: {
        /**
         * 任务ID。
         * @example `****a046-263c-3560-978a-fb287782****`
         */
        JobId: string;
        /**
         * 任务名称。
         * @example `截图任务1`
         */
        JobName: string;
        /**
         * 模板ID。
         * @example `****a046-263c-3560-978a-fb287666****`
         */
        TemplateId: string;
        /**
         * 模板名称。
         * @example `模板1`
         */
        TemplateName: string;
        /**
         * 任务状态。
         * @example `started`
         */
        Status: string;
        /**
         * 输出信息。
         */
        SnapshotOutput: {
            /**
             * 存储类型，目前只支持oss。
             * @example `oss`
             */
            StorageType: string;
            /**
             * 输出终端，type=oss时返回OSS域名。
             * @example `oss-cn-shanghai.aliyuncs.com`
             */
            Endpoint: string;
            /**
             * 输出终端的Bucket，type=oss时返回OSS Bucket。
             * @example `testbucket`
             */
            Bucket: string;
        };
        /**
         * 截图时间间隔，单位：秒。
         * @example `5`
         */
        TimeInterval: number;
        /**
         * 创建时间。
         * @example `2022-07-20T02:48:58Z`
         */
        CreateTime: string;
    }[];
    /**
     * 页码。
     * @example `1`
     */
    PageNo: number;
    /**
     * 页宽。
     * @example `10`
     */
    PageSize: number;
    /**
     * 排序。
     * @example `desc`
     */
    SortBy: string;
    /**
     * 总数。
     * @example `100`
     */
    TotalCount: number;
}
