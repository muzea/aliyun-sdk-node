export interface ListAcrImageTagsResponse {
    /**
     * 请求ID。
     * @example `FEF343B9-1A15-5789-BE88-7B36190F5BF6`
     */
    RequestId: string;
    /**
     * 下一个查询开始token。
     * @example `ey14..`
     */
    NextToken: string;
    /**
     * 分页查询时每页行数。其中最大值为100行，默认值为20行。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 总数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 镜像列表。
     */
    Images: {
        /**
         * 镜像版本。
         * @example `5.7.2`
         */
        Tag: string;
        /**
         * 镜像大小，单位：字节（B）。
         * @example `188394616`
         */
        ImageSize: string;
        /**
         * 创建时间。
         * @example `2021-05-20T00:00:00Z`
         */
        CreateTime: string;
        /**
         * 修改时间。
         * @example `2021-05-20T00:00:00Z`
         */
        ModifiedTime: string;
    }[];
}
