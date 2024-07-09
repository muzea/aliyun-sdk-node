export interface ListSubCrowdsResponse {
    /**
     * Id of the request
     * @example `C5AEB79E-FAA4-5DCE-8CD7-1CAF549ECC3E`
     */
    RequestId: string;
    /**
     * 列表内元素总数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 子人群列表。
     */
    SubCrowds: {
        /**
         * 子人群ID。
         * @example `3`
         */
        SubCrowdId: string;
        /**
         * 人群来源。
         * ● ManualInput-手工输入
         * ● UploadFile-文件上传
         * @example `ManualInput`
         */
        Source: string;
        /**
         * 人群分组中的用户。
         * @example `user1,user2`
         */
        Users: string;
        /**
         * 人群分组所含的用户量。
         * @example `2`
         */
        Quantity: number;
        /**
         * 创建时间。
         * @example `2021-12-15T23:24:33.132+08:00`
         */
        GmtCreateTime: string;
    }[];
}
