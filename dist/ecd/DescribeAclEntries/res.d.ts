export interface DescribeAclEntriesResponse {
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 公网访问控制策略条目列表。
     */
    AclEntries: {
        /**
         * 公网访问控制策略。
         * @example `allow`
         */
        Policy: string;
        /**
         * 公网访问控制策略对应的粒度。
         * @example `desktop`
         */
        SourceType: string;
        /**
         * 公网访问控制对应的实例ID，即办公网络ID或云电脑ID。
         * @example `ecd-fsafeweh***`
         */
        SourceId: string;
    }[];
}
