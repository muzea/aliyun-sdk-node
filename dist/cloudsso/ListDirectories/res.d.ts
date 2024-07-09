export interface ListDirectoriesResponse {
    /**
     * 目录列表。
     */
    Directories: {
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
    }[];
    /**
     * 请求ID。
     * @example `9A504392-F06D-5029-AB64-6654CB9F1DC1`
     */
    RequestId: string;
    /**
     * 目录数量。
     * @example `1`
     */
    TotalCounts: number;
}
