export interface ListAssetSelectionTargetResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `50A75355-F58F-5D65-8377-98C88DED9C51`
     */
    RequestId: string;
    /**
     * 查询结果的分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，显示的当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，显示的每页数据的最大条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 总条数。
         * @example `639`
         */
        TotalCount: number;
    };
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 资产ID。按机器选择时，取值为机器的uuid，按分组选择时，取值为分组ID，按VPC选择时，取值为VPC ID。
         * @example `30****`
         */
        TargetId: string;
        /**
         * 资产名称。
         * @example `test****`
         */
        TargetName: string;
    }[];
}
