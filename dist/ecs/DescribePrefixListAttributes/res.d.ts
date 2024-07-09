export interface DescribePrefixListAttributesResponse {
    /**
     * 前缀列表的创建时间。
     * @example `2021-02-20T07:11Z`
     */
    CreationTime: string;
    /**
     * 前缀列表支持的最大条目容量。
     * @example `10`
     */
    MaxEntries: number;
    /**
     * 请求ID。
     * @example `38793DB8-A4B2-4AEC-BFD3-111234E9188D`
     */
    RequestId: string;
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
    Entries: {
        /**
         * 前缀列表中的条目信息组成的数组。
         */
        Entry: {
            /**
             * 前缀列表条目的描述信息。
             * @example `Description Sample 01`
             */
            Description: string;
            /**
             * 前缀列表条目的CIDR地址块信息。
             * @example `192.168.1.0/24`
             */
            Cidr: string;
        }[];
    };
}
