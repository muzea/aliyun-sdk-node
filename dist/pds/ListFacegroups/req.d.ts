export interface ListFacegroupsRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 空间id
         * @example `1`
         */
        drive_id: string;
        /**
         * 查询过滤使用， 长度最大128字符，采用的是精确匹配过滤
         * @example `张三`
         */
        remarks: string;
        /**
         * limit值，n的取值范围：1~100, 默认100。
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
         * 是否返回搜到的文件总数
         * @example `false`
         */
        return_total_count: boolean;
    };
}
