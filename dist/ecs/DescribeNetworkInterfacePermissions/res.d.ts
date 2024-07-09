export interface DescribeNetworkInterfacePermissionsResponse {
    /**
     * 分页查询时的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `0FCD3DEF-63D3-4605-A818-805C8BD7DB87`
     */
    RequestId: string;
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 查询到的条目总数。
     * @example `1`
     */
    TotalCount: number;
    NetworkInterfacePermissions: {
        /**
         * 弹性网卡权限列表组成的信息集合。
         */
        NetworkInterfacePermission: {
            /**
             * 弹性网卡权限。
             * @example `InstanceAttach`
             */
            Permission: string;
            /**
             * 弹性网卡ID。
             * @example `eni-bp14v2sdd3v8htln****`
             */
            NetworkInterfaceId: string;
            /**
             * 阿里云合作伙伴（认证ISV）账号ID或个人用户ID。
             * @example `1234567890`
             */
            AccountId: number;
            /**
             * 弹性网卡权限ID。
             * @example `eni-perm-bp1cs4lwn56lfb****`
             */
            NetworkInterfacePermissionId: string;
            /**
             * 阿里云服务名称。
             * @example `Elastic Compute Service`
             */
            ServiceName: string;
            /**
             * 弹性网卡权限状态。可能值：
             * - Pending：授权中
             * - Granted：已授权
             * - Revoking：撤销授权中
             * - Revoked：已撤销授权
             * @example `Granted`
             */
            PermissionState: string;
        }[];
    };
}
