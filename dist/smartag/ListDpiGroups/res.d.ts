export interface ListDpiGroupsResponse {
    /**
     * 当前接口查询出来的应用组总个数。
     * @example `22`
     */
    TotalCount: number;
    /**
     * 下一页查询开始的Token。
     * @example `FFPSpX59Ebw****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `EC184A86-3C93-49D6-BB34-6C193E14D37F`
     */
    RequestId: string;
    /**
     * 应用组信息列表。
     */
    DpiGroup: {
        /**
         * 支持该应用组的最低特征库版本。
         * @example `20201117_1_0-0.0.1`
         */
        MinSignatureDbVersion: string;
        /**
         * 应用组名称。
         * @example `P2P`
         */
        DpiGroupName: string;
        /**
         * 应用组ID。
         * @example `1`
         */
        DpiGroupId: string;
        /**
         * 支持该应用组的最低引擎版本。
         * @example `0-0.0.1`
         */
        MinEngineVersion: string;
    }[];
}
