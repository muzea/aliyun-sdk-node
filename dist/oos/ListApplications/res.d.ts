export interface ListApplicationsResponse {
    /**
     * 翻页标记的Token。
     * @example `-`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `12067D53-56A9-561B-ADD6-61429D207117`
     */
    RequestId: string;
    /**
     * 分页大小。
     * @example `10`
     */
    MaxResults: number;
    /**
     * 应用信息。
     */
    Applications: {
        /**
         * 应用描述信息。
         * @example `Application`
         */
        Description: string;
        /**
         * 更新时间。
         * @example `2021-09-07T09:09:59Z`
         */
        UpdateDate: string;
        /**
         *   资源组ID。
         * @example `rg-acfmxsn4m******`
         */
        ResourceGroupId: string;
        /**
         * 标签。
         * @example `{"k1": "v1","k2": "v2"}`
         */
        Tags: any;
        /**
         * 应用名称。
         * @example `MyApplication`
         */
        Name: string;
        /**
         * 创建时间。
         * @example `2021-09-07T09:09:59Z`
         */
        CreateDate: string;
        /**
         * 应用类型。
         * @example `DingTalk`
         */
        ApplicationType: string;
    }[];
}
