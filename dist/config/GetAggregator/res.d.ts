export interface GetAggregatorResponse {
    /**
     * 请求ID。
     * @example `733DD93C-2277-4905-AE0C-0BA95C04B8BC`
     */
    RequestId: string;
    /**
     * 账号组信息。
     */
    Aggregator: {
        /**
         * 创建账号组的时间戳。
         * 单位：毫秒。
         * @example `1623034091000`
         */
        AggregatorCreateTimestamp: string;
        /**
         * 账号组内的成员信息。
         */
        AggregatorAccounts: {
            /**
             * 成员的资源监控状态。取值：
             * - REGISTRABLE：未注册。
             * - BUILDING：构建中。
             * - REGISTERED：已注册。
             * - REBUILDING：重新构建中。
             * @example `REGISTERED`
             */
            RecorderStatus: string;
            /**
             * 成员ID。
             * @example `171322098523****`
             */
            AccountId: number;
            /**
             * 成员归属。仅支持ResourceDirectory（资源目录）。
             * @example `ResourceDirectory`
             */
            AccountType: string;
            /**
             * 成员名称。
             * @example `Alice`
             */
            AccountName: string;
        }[];
        /**
         * 账号组内成员的数量。
         * @example `2`
         */
        AggregatorAccountCount: number;
        /**
         * 账号组描述。
         * @example `测试组`
         */
        Description: string;
        /**
         * 账号组名称。
         * @example `Test_Group`
         */
        AggregatorName: string;
        /**
         * 账号组状态。取值：
         * - 0：创建中。
         * - 1：创建完成。
         * @example `1`
         */
        AggregatorStatus: number;
        /**
         * 账号组类型。取值：
         * - RD：全局账号组。
         * - FOLDER：资源夹账号组。
         * - CUSTOM：自定义账号组。
         * @example `CUSTOM`
         */
        AggregatorType: string;
        /**
         * 创建账号组的管理账号ID。
         * @example `100931896542****`
         */
        AccountId: number;
        /**
         * 账号组ID。
         * @example `ca-88ea626622af0055****`
         */
        AggregatorId: string;
        /**
         * 资源夹账号组绑定的资源夹ID。
         * @example `fd-brHdgv****`
         */
        FolderId: string;
    };
}
