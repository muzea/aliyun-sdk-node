export interface GetDirectoryResponse {
    /**
     * 请求ID。
     * @example `AA6A9E4B-8A61-59E1-AA87-F61CA18258A3`
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
         * @example `2021-10-25T07:18:46Z`
         */
        UpdateTime: string;
        /**
         * 目录所在的地域ID。
         * @example `cn-shanghai`
         */
        Region: string;
        /**
         * 目录名称。
         * @example `example`
         */
        DirectoryName: string;
    };
}
