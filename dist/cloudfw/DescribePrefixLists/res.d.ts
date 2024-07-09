export interface DescribePrefixListsResponse {
    /**
     * 返回结果的请求ID。
     * @example `67FD76C2-C493-5815-8107-643FD7AB77C7`
     */
    RequestId: string;
    /**
     * 前缀列表信息组成的数组。
     */
    PrefixList: {
        /**
         * 前缀列表ID。
         * @example `pl-uf64nco3ujjqchx6aaji`
         */
        PrefixListId: string;
        /**
         * 前缀列表的名称。
         * @example `participant-name`
         */
        PrefixListName: string;
        /**
         * 描述。
         * @example `TCP_14900-14911`
         */
        Description: string;
        /**
         * 创建时间。
         * @example `2023-10-16T08:31:06Z`
         */
        CreationTime: string;
        /**
         * 关联资源的数量。
         * @example `2`
         */
        AssociationCount: number;
        /**
         * 前缀列表支持的最大条目容量。
         * @example `20`
         */
        MaxEntries: number;
        /**
         * 前缀列表的地址族。可能值：
         * - IPv4。
         * - IPv6。
         * @example `IPv4`
         */
        AddressFamily: string;
    }[];
}
