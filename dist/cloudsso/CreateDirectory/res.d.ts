export interface CreateDirectoryResponse {
    /**
     * 请求ID。
     * @example `ADADC31D-90EE-5459-99B0-D83DF07769A3`
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
         * 目录创建时间（UTC时间）。
         * @example `2021-10-10T04:04:04Z`
         */
        CreateTime: string;
        /**
         * 目录修改时间（UTC时间）。
         * @example `2021-10-10T04:04:04Z`
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
