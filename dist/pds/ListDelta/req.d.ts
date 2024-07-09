export interface ListDeltaRequest {
    "domain_id"?: string;
    /**
     * 请求body
     */
    "body"?: {
        /**
         * 空间id
         * @example `1`
         */
        drive_id: string;
        /**
         * 同步文件夹根节点文件id
         * @example `622fb09598ae66777c7040109a16f49381f6abe1`
         */
        sync_root_id: string;
        /**
         * 游标
         * @example `NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg`
         */
        cursor: string;
        /**
         * 限定此次返回资源的数量，取值范围\[0,100\]，默认值为 100。
         * 返回结果可以小于指定的数量，但不能多于指定的数量。
         * @example `50`
         */
        limit: number;
    };
}
