export interface DescribeUsersInGroupResponse {
    /**
     * 下一个查询开始的Token。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 符合查询条件的云电脑池授权用户总数。
     * @example `1`
     */
    UsersCount: number;
    /**
     * 符合查询条件且目前已连接云电脑的云电脑池授权用户总数。
     * @example `0`
     */
    OnlineUsersCount: number;
    /**
     * 授权用户信息列表。
     */
    EndUsers: {
        /**
         * 授权用户ID。
         * @example `alice`
         */
        EndUserId: string;
        /**
         * 授权用户的邮箱地址。
         * @example `alice@example.com`
         */
        EndUserEmail: string;
        /**
         * 云电脑名称。
         * @example `testName`
         */
        DesktopName: string;
        /**
         * 连接状态。
         * @example `1`
         */
        ConnectionStatus: string;
        /**
         * 云电脑ID。
         * @example `ecd-gx2x1dhsmucyy****`
         */
        DesktopId: string;
        /**
         * 用户账号体系类型。
         * @example `SIMPLE`
         */
        EndUserType: string;
        /**
         * 授权用户的手机号。
         * @example `1381111****`
         */
        EndUserPhone: string;
        /**
         * 授权用户的用户名。
         * @example `alice`
         */
        EndUserName: string;
        /**
         * 附加信息。
         */
        ExternalInfo: {
            /**
             * 外部名称。
             * @example `nameDemo`
             */
            ExternalName: string;
            /**
             * 工号。
             * @example `123`
             */
            JobNumber: string;
        };
        /**
         * 用户座位信息列表。
         */
        UserSetPropertiesModels: {
            /**
             * 用户ID。
             * @example `123`
             */
            UserId: number;
            /**
             * 用户名称。
             * @example `nameDemo`
             */
            UserName: string;
            /**
             * 属性ID。
             * @example `123`
             */
            PropertyId: number;
            /**
             * 属性名称。
             * @example `key`
             */
            PropertyKey: string;
            /**
             * 属性类型。
             * @example `1`
             */
            PropertyType: number;
            /**
             * 属性值数组。
             */
            PropertyValues: {
                /**
                 * 属性值ID。
                 * @example `123`
                 */
                PropertyValueId: number;
                /**
                 * 属性值。
                 * @example `value`
                 */
                PropertyValue: string;
            }[];
        }[];
        /**
         * 用户对应的虚拟云电脑ID。
         * @example `ud-i896ze8hazpvl****`
         */
        UserDesktopId: string;
        /**
         * 用户备注。
         * @example `Note`
         */
        EndUserRemark: string;
        /**
         * 企业AD账号的显示名称。
         * @example `alice`
         */
        DisplayName: string;
    }[];
}
