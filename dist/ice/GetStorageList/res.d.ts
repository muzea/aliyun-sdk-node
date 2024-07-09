export interface GetStorageListResponse {
    /**
     * Id of the request
     * @example `******73-8B78-5D86-A50C-49B96C******`
     */
    RequestId: string;
    /**
     * 存储配置列表
     */
    StorageInfoList: {
        /**
         * 应用Id
         * @example `app-****`
         */
        AppId: string;
        /**
         * OSS存储
         * @example `your-bucket`
         */
        StorageLocation: string;
        /**
         * OSS路径
         * @example `your-path/`
         */
        Path: string;
        /**
         * 存储类型
         * @example `vod_oss_bucket`
         */
        StorageType: string;
        /**
         * OSS存储状态
         * @example `Normal`
         */
        Status: string;
        /**
         * 是否为默认存储
         * @example `true`
         */
        DefaultStorage: boolean;
        /**
         * 是否为剪辑默认存储
         * @example `false`
         */
        EditingTempFileStorage: boolean;
        /**
         * 创建时间
         * @example `2024-06-06T01:55:07Z`
         */
        CreationTime: string;
        /**
         * 最后修改时间
         * @example `2024-06-06T03:07:07Z`
         */
        ModifiedTime: string;
    }[];
}
