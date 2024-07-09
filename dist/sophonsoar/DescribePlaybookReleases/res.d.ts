export interface DescribePlaybookReleasesResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `3DFBE11C-6EB6-5166-92D6-3397796AFE1E`
     */
    RequestId: string;
    /**
     * 剧本的版本信息列表。
     */
    Records: {
        /**
         * 记录 ID
         * @example `80xxx`
         */
        Id: number;
        /**
         * 版本创建时间，格式：13位的时间戳。
         * @example `1655277397000`
         */
        GmtCreate: number;
        /**
         * 版本修改时间，格式：13位的时间戳。
         * @example `1691460804000`
         */
        GmtModified: number;
        /**
         * 发布版本的阿里云账户ID。
         * @example `145xxxx985`
         */
        Creator: string;
        /**
         * 版本的描述信息。
         * @example `This is a new version`
         */
        Description: string;
        /**
         * 发布版本的剧本配置的MD5值。
         * @example `be0a4ef084dd174abe47xxxxx`
         */
        TaskflowMd5: string;
    }[];
    /**
     * 页面显示的信息。
     */
    Page: {
        /**
         * 查询到的信息总数量。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页查询时，每页显示的条目数量。
         * @example `10`
         */
        PageSize: number;
    };
}
