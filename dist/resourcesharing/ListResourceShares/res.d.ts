export interface ListResourceSharesResponse {
    /**
     * 当请求的返回结果被截断时，您可以使用`NextToken`再次发起请求，获取从当前截断位置之后的内容。
     * @example `TGlzdFJlc291cm****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `2F23CFB6-A721-4E90-AC1E-0E30FA8B45DA`
     */
    RequestId: string;
    /**
     * 共享单元信息。
     */
    ResourceShares: {
        /**
         * 共享单元更新时间。
         * @example `2020-12-03T08:01:43.638Z`
         */
        UpdateTime: string;
        /**
         * 共享单元名称。
         * @example `test`
         */
        ResourceShareName: string;
        /**
         * 共享单元归属者。
         * @example `151266687691****`
         */
        ResourceShareOwner: string;
        /**
         * 共享单元创建时间。
         * @example `2020-12-03T02:20:31.292Z`
         */
        CreateTime: string;
        /**
         * 共享单元ID。
         * @example `rs-PqysnzIj****`
         */
        ResourceShareId: string;
        /**
         * 共享单元状态。取值：
         * - Active：已启用。
         * - Pending：待确认。
         * - Deleting：删除中。
         * - Deleted：已删除。
         * > Deleted状态的共享单元记录，会在48~96小时内被系统自动删除。
         * @example `Active`
         */
        ResourceShareStatus: string;
        /**
         * 是否允许共享给资源目录外的账号。取值：
         * - false：仅允许资源目录内共享。
         * - true：允许共享给任意账号。
         * @example `false`
         */
        AllowExternalTargets: boolean;
    }[];
}
