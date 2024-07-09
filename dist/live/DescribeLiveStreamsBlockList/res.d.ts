export interface DescribeLiveStreamsBlockListResponse {
    /**
     * 分页的当前页码。
     * @example `2`
     */
    PageNum: number;
    /**
     * 请求ID。
     * @example `9D855EC8-CF71-4615-B164-F7DFCB23B41D`
     */
    RequestId: string;
    /**
     * 总页数。
     * @example `2`
     */
    TotalPage: number;
    /**
     * 每页显示的条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 符合条件的总个数。
     * @example `11`
     */
    TotalNum: number;
    /**
     * 主播流域名。
     * @example `example.com`
     */
    DomainName: string;
    StreamUrls: {
        /**
         * 完整流url地址。
         */
        StreamUrl: string[];
    };
}
