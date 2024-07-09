export interface ListAclsResponse {
    /**
     * 请求ID。
     * @example `64ADAB1E-0B7F-4FD8-A404-3BECC0E9CCFF`
     */
    RequestId: string;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70t****`
     */
    NextToken: string;
    /**
     * 分页查询时每页显示的条目数。
     * @example `10`
     */
    MaxResults: number;
    /**
     * 访问控制策略组列表。
     */
    Acls: {
        /**
         * 访问控制策略组ID。
         * @example `nacl-hp34s2h0xx1ht4nwo****`
         */
        AclId: string;
        /**
         * 访问控制策略组名称。
         * @example `test-acl`
         */
        AclName: string;
        /**
         * 访问控制策略组的IP版本。
         * - **IPv4**。
         * - **IPv6**。
         * @example `IPv4`
         */
        AddressIPVersion: string;
        /**
         * 访问控制策略组的状态。
         * - **init**：初始化。
         * - **active**：可用。
         * - **configuring**：配置中。
         * - **updating**：更新中。
         * - **deleting**：删除中。
         * @example `active`
         */
        AclStatus: string;
        /**
         * 资源组ID。
         * @example `rg-aek2lgw4evw****`
         */
        ResourceGroupId: string;
        /**
         * 访问控制策略组的标签。
         */
        Tags: {
            /**
             * 访问控制策略组的标签键。
             * @example `tag-key`
             */
            Key: string;
            /**
             * 访问控制策略组的标签值。
             * @example `tag-value`
             */
            Value: string;
        }[];
    }[];
}
