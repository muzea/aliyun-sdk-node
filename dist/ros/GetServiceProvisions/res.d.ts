export interface GetServiceProvisionsResponse {
    /**
     * 请求ID。
     * @example `A9938C04-26AD-5EFA-B394-EA7866842DFF`
     */
    RequestId: string;
    /**
     * 云服务详情。
     */
    ServiceProvisions: {
        /**
         * 云服务名称。
         * @example `EHPC`
         */
        ServiceName: string;
        /**
         * 云服务开通状态。取值：
         * - Enabled：已开通。
         * - Disabled：未开通。
         * - Unknown：开通状态未知。
         * @example `Enabled`
         */
        Status: string;
        /**
         * 云服务未开通或开通状态未知的原因。
         * > 当Status取值为Disabled或Unknown时，返回该参数。
         * @example `No permission.`
         */
        StatusReason: string;
        /**
         * 是否在模板中定义了自动开通服务。取值：
         * - true：自动开通。
         * - false：手动开通。
         * @example `false`
         */
        AutoEnableService: boolean;
        /**
         * 云服务开通链接。
         * > 当Status取值为Disabled时，返回该参数。
         * @example `https://common-buy.aliyun.com/?commodityCode=nas`
         */
        EnableURL: string;
        /**
         * 云服务角色信息。若为空表示没有服务角色。
         */
        RoleProvision: {
            /**
             * 角色授权链接。
             * > 当Created取值为false时，返回该参数。
             * @example `https://ehpc.console.aliyun.com/`
             */
            AuthorizationURL: string;
            /**
             * 云服务角色列表。
             */
            Roles: {
                /**
                 * 角色名称。
                 * @example `AliyunServiceRoleForEHPC`
                 */
                RoleName: string;
                /**
                 * 角色是否已创建。取值：
                 * - true：已创建。
                 * - false：未创建。
                 * @example `true`
                 */
                Created: boolean;
                /**
                 * 角色用途。
                 * 默认值：Default，表示该角色为服务默认角色。
                 * @example `Default`
                 */
                Function: string;
                /**
                 * 创建角色用到的API信息。
                 */
                ApiForCreation: {
                    /**
                     * API所属产品ID。
                     * @example `rds`
                     */
                    ApiProductId: string;
                    /**
                     * API名称。
                     * @example `CreateServiceLinkedRole`
                     */
                    ApiName: string;
                    /**
                     * API类型。
                     * 取值：
                     * - Open：开放API。
                     * - Inner：内部API。
                     * @example `Open`
                     */
                    ApiType: string;
                    /**
                     * API参数信息。${变量名}表示动态参数，目前支持：${RegionId} 地域。
                     * @example `{   "ServiceLinkedRole": "AliyunServiceRoleForRdsPgsqlOnEcs",   "RegionId": "${RegionId}" }`
                     */
                    Parameters: any;
                };
            }[];
        };
        /**
         * 待查询服务依赖的服务列表。
         */
        DependentServiceNames: string[];
    }[];
}
