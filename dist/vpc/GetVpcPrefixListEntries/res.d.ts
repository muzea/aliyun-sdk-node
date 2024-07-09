export interface GetVpcPrefixListEntriesResponse {
    /**
     * 请求ID。
     * @example `4EC47282-1B74-4534-BD0E-403F3EE64CAF`
     */
    RequestId: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 查询的列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 条目数。
     * @example `1`
     */
    Count: number;
    /**
     * 查询的前缀列表的信息。
     */
    PrefixListEntry: {
        /**
         * 前缀列表的实例ID。
         * @example `pl-0b7hwu67****`
         */
        PrefixListId: string;
        /**
         * 前缀列表的CIDR地址块。
         * @example `192.168.0.0/16`
         */
        Cidr: string;
        /**
         * 前缀列表的描述信息。
         * @example `description`
         */
        Description: string;
        /**
         * 前缀列表所属的地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
    }[];
}
