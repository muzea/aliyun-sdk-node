export interface GetDomainsResponse {
    /**
     * 业务码，成功返回0。
     * @example `0`
     */
    Code: number;
    /**
     * 请求ID。
     * @example `425AEBD2-C4BA-44E4-9FC1-026844933422`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    Pager: {
        /**
         * 每页的记录条数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总记录的条数。
         * @example `1`
         */
        Total: number;
        /**
         * 当前页码。
         * @example `1`
         */
        Page: number;
    };
    DataList: {
        /**
         * 返回的域名信息列表。
         */
        UsageData: {
            /**
             * 当前域名的状态，是否启用。
             * @example `true`
             */
            Status: boolean;
            /**
             * 域名。
             * @example `xxx.com.cn`
             */
            Domain: string;
            /**
             * 切片格式，仅在BusinessType=live时返回。
             * @example `flv`
             */
            SliceFormat: string;
            /**
             * 创建时间。
             * @example `2017-05-12 20:56:34`
             */
            CreatedAt: string;
            /**
             * 更新时间。
             * @example `2017-05-12 20:56:34`
             */
            UpdatedAt: string;
            /**
             * 域名资源ID。
             * @example `i4e6g9`
             */
            ResourceId: string;
            /**
             * 业务类型：download、live、vod。
             * @example `vod`
             */
            BusinessType: string;
        }[];
    };
}
