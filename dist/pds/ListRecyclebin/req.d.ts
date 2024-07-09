export interface ListRecyclebinRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 空间ID
         * @example `1`
         */
        drive_id: string;
        /**
         * 设定结果从marker之后按字母排序的第一个开始返回。如果不设定，则从头开始返回数据。
         * 默认值：无
         * @example `NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg`
         */
        marker: string;
        /**
         * 限定此次返回资源的数量，取值范围\[1,200\]，缺省50。
         * 返回结果可以小于指定的数量，但不能多于指定的数量。
         * @example `50`
         */
        limit: number;
        /**
         * 筛选返回字段：
         * 1\. 当填 * 时，返回文件所有字段；
         * 2\. 当填空值或不填时，返回的信息不包含文件创建者、文件修改者、用户自定义标签等字段
         * 默认为空值，只返回部分字段。
         * @example `*`
         */
        fields: string;
    };
}
