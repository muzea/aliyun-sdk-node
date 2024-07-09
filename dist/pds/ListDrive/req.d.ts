export interface ListDriveRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 限定此次返回资源的数量，范围为 [1,100]，默认返回100
         * @example `100`
         */
        limit: number;
        /**
         * 设定结果从marker之后按字母排序的第一个开始返回。如果不设定，则从头开始返回数据。
         * 默认值：无
         * @example `NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg`
         */
        marker: string;
        /**
         * 归属者，不设置时返回所有 drive
         * @example `c9b7a5aa04d14ae3867fdc886fa01da4`
         */
        owner: string;
        /**
         * 归属者类型，可选值如下：
         * user：用户
         * group：团队
         * 默认返回所有归属者类型的 drive
         * @example `user`
         */
        owner_type: string;
    };
}
