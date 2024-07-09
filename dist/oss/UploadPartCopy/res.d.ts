export interface UploadPartCopyResponse {
    /**
     * 保存UploadPartCopy结果的容器。
     */
    CopyPartResult: {
        /**
         * 最近一次修改时间。
         * @example `2014-07-17T06:27:54.000Z`
         */
        LastModified: string;
        /**
         * 被拷贝Object的ETag值。
         * @example `"5B3C1A2E053D763E1B002CC607C5****"`
         */
        ETag: string;
    };
}
