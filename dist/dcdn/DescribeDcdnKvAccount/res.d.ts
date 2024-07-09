export interface DescribeDcdnKvAccountResponse {
    /**
     * 账户状态。
     * - **online**：开启。
     * - **offline**：关闭。
     * @example `online,offline`
     */
    Status: string;
    /**
     * 请求ID。
     * @example `D61E4801-EAFF-4A63-AAE1-FBF6CE1CFD1C`
     */
    RequestId: string;
    /**
     * 账号下已申请namespace数。
     * @example `1`
     */
    NamespaceUsed: number;
    /**
     * 账号下最多可申请的Namespace数。
     * @example `10`
     */
    NamespaceQuota: number;
    /**
     * 账户下所有Namespace可用容量。
     * @example `1 GB`
     */
    CapacityString: string;
    /**
     * 账户下所有Namespace已用容量。
     * @example `100 MB`
     */
    CapacityUsedString: string;
    /**
     * 账号命名空间列表。
     */
    NamespaceList: {
        /**
         * Namespace状态，取值：
         * - **online**：正常。
         * - **delete**：待删除。
         * - **deleting**：删除中。
         * - **deleted**：已删除。
         * @example `online`
         */
        Status: string;
        /**
         * Namespace名称。
         * @example `ns1`
         */
        Namespace: string;
        /**
         * Namespace ID。
         * @example `12423131231****`
         */
        NamespaceId: string;
        /**
         * Namespace描述信息。
         * @example `the first namespace`
         */
        Description: string;
        /**
         * Namespace可用容量。
         * @example `1 GB`
         */
        CapacityString: string;
        /**
         * Namespace已用容量。
         * @example `100 MB`
         */
        CapacityUsedString: string;
    }[];
}
