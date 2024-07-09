export interface SearchFileRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 空间 id
         * @example `1`
         */
        drive_id: string;
        /**
         * 搜索条件，可以根据文件名或目录名模糊查询，最长 4096 字符
         * @example `name="123"`
         */
        query: string;
        /**
         * 排序字段，默认根据 created_at 排序，可选值如下：
         * - created\_at：根据创建时间排序
         * - updated\_at：根据更新时间排序
         * - size：根据文件大小排序
         * - name：根据文件名排序
         * 排序方向，可选值如下：
         * - ASC代表正序
         * - DESC代表逆序
         * order\_by语法为：字段名+空格+ASC/DESC，如果多个字段排序则需要用逗号隔开，前面的规则优先级高。如：
         * - 按名称正序：name ASC
         * - 按创建时间逆序： created_at DESC
         * - 先按创建时间逆序，如果创建时间相同，则按名称正序：created_at DESC,name ASC
         * @example `name ASC`
         */
        order_by: string;
        /**
         * 限定此次返回资源的数量，取值范围\[1,100\]。
         * 返回结果可以小于指定的数量，但不能多于指定的数量。
         * @example `50`
         */
        limit: number;
        /**
         * 设定结果从marker之后按字母排序的第一个开始返回。如果不设定，则从头开始返回数据。
         * <br>默认值：无
         * @example `NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg`
         */
        marker: string;
        /**
         * 是否返回检索到的文件总数。
         * @example `true`
         */
        return_total_count: boolean;
        /**
         *
         * @example `url,thumbnail`
         */
        fields: string;
    };
}
