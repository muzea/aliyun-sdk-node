export interface ListBucketAntiDDosInfoResponse {
    /**
     * 保存Bucket防护信息列表的容器。
     */
    AntiDDOSListConfiguration: {
        /**
         * 返回字母排序在指定marker之后的高防实例。
         * @example `abc`
         */
        Marker: string;
        /**
         * 是否已返回所有高防实例。
         * true：本次请求未返回所有高防实例。
         * false：本次请求已返回所有高防实例。
         * @example `true`
         */
        IsTruncated: boolean;
        /**
         * 保存高防实例信息的列表。
         */
        AntiDDOSConfiguration: any[];
    };
}
