export interface DescribePrefixListsResponse {
    /**
     * 本次调用返回的查询凭证（Token）。当该返回值为空时，表示无更多返回的数据信息。
     * @example `AAAAAdDWBF2****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `38793DB8-A4B2-4AEC-BFD3-111234E9188D`
     */
    RequestId: string;
    PrefixLists: {
        /**
         * 前缀列表信息组成的数组。
         */
        PrefixList: {
            /**
             * 前缀列表的创建时间。
             * @example `2021-02-20T07:11Z`
             */
            CreationTime: string;
            /**
             * 关联资源的数量。
             * @example `1`
             */
            AssociationCount: number;
            /**
             * 前缀列表支持的最大条目容量。
             * @example `20`
             */
            MaxEntries: number;
            /**
             * 前缀列表的描述信息。
             * @example `This is description.`
             */
            Description: string;
            /**
             * 前缀列表的地址族。可能值：
             * - IPv4。
             * - IPv6。
             * @example `IPv4`
             */
            AddressFamily: string;
            /**
             * 前缀列表的名称。
             * @example `PrefixListNameSample`
             */
            PrefixListName: string;
            /**
             * 前缀列表ID。
             * @example `pl-x1j1k5ykzqlixdcy****`
             */
            PrefixListId: string;
        }[];
    };
}
