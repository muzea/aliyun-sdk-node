export interface UpdateDirectoryResponse {
    /**
     * 请求ID。
     * @example `B182C041-8C64-5F2F-A07B-FC67FAF89CF9`
     */
    RequestId: string;
    /**
     * 目录信息。
     */
    Directory: {
        /**
         * 目录ID。
         * @example `d-00fc2p61****`
         */
        DirectoryId: string;
        /**
         * 目录创建时间。
         * @example `2021-06-30T08:35:26Z`
         */
        CreateTime: string;
        /**
         * 目录修改时间。
         * @example `2021-10-25T09:13:24Z`
         */
        UpdateTime: string;
        /**
         * 目录所在的地域ID。
         * @example `cn-shanghai`
         */
        Region: string;
        /**
         * 目录名称。
         * @example `new-example`
         */
        DirectoryName: string;
    };
}
