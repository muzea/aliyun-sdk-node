export interface CopyObjectResponse {
    /**
     * 保存CopyObject结果的容器。
     */
    CopyObjectResult: {
        /**
         * 目标Object的ETag值。
         * @example `5B3C1A2E053D763E1B002CC607C5****`
         */
        ETag: string;
        /**
         * 目标Object最后更新时间。
         * @example `Fri, 24 Feb 2012 07:18:48 GMT`
         */
        LastModified: string;
    };
}
