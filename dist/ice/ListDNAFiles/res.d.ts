export interface ListDNAFilesResponse {
    /**
     * 请求ID。
     * @example `2AE89FA5-E620-56C7-9B80-75D09757385A`
     */
    RequestId: string;
    /**
     * 下一页Token。
     * @example `ae0fd49c0840e14daf0d66a75b83****`
     */
    NextPageToken: string;
    /**
     * 文件列表。
     */
    FileList: {
        /**
         * DNA文件用户主键。
         * @example `ae0fd49c0840e14daf0d66a75b83****`
         */
        PrimaryKey: string;
        /**
         * 输入文件OSS信息。
         */
        InputFile: {
            /**
             * 输入文件的OSS Object。
             * @example `example-****.mp4`
             */
            Object: string;
            /**
             * 输入文件的OSS Location。
             * @example `oss-cn-beijing`
             */
            Location: string;
            /**
             * 输入文件的OSS Bucket。
             * @example `example-bucket`
             */
            Bucket: string;
        };
    }[];
}
