export interface ListDomainsResponse {
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页查询时每页的行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 加速域名列表。
     */
    Domains: {
        /**
         * 全球加速实例列表。
         */
        Accelerators: {
            /**
             * 全球加速实例ID。
             * @example `ga-bp1odcab8tmno0hdq****`
             */
            AcceleratorId: string;
            /**
             * 全球加速实例名称。
             * @example `Accelerator`
             */
            Name: string;
            /**
             * 托管实例所属的服务方ID。
             * > 仅在**ServiceManaged**参数为**True**时有效。
             * @example `ALB`
             */
            ServiceId: string;
            /**
             * 是否为托管实例。取值：
             * - **true**：是托管实例。
             * - **false**：不是托管实例。
             * @example `true`
             */
            ServiceManaged: boolean;
            /**
             * 用户在此托管实例下可执行的动作策略列表。
             * > 仅在**ServiceManaged**参数为**True**时有效。
             * > - 当实例处于托管状态时，用户对实例的操作会受到限制，某些操作行为会被禁止。
             */
            ServiceManagedInfos: {
                /**
                 * 托管策略动作名称，取值：
                 * - **Create**：创建实例。
                 * - **Update**：更新当前实例。
                 * - **Delete**：删除当前实例。
                 * - **Associate**：引用/被引用当前实例。
                 * - **UserUnmanaged**：用户解托管实例。
                 * - **CreateChild**：在当前实例下创建子资源。
                 * @example `Update`
                 */
                Action: string;
                /**
                 * 子资源类型，取值：
                 * - **Listener**：监听资源。
                 * - **IpSet**：加速地域资源。
                 * - **EndpointGroup**：终端节点组资源。
                 * - **ForwardingRule**：转发策略资源。
                 * - **Endpoint**：终端节点资源。
                 * - **EndpointGroupDestination**：自定义路由监听下的终端节点组协议映射资源。
                 * - **EndpointPolicy**：自定义路由监听下的终端节点通行策略资源。
                 * > 仅在**Action**参数为**CreateChild**时有效。
                 * @example `Listener`
                 */
                ChildType: string;
                /**
                 * 托管策略动作是否被托管，取值：
                 * - **true**：托管策略动作被托管，用户无权在托管实例下执行Action指定的操作。
                 * - **false**：托管策略动作未被托管，用户可在托管实例下执行Action指定的操作。
                 * @example `false`
                 */
                IsManaged: boolean;
            }[];
        }[];
        /**
         * 加速域名。
         * @example `www.example.com`
         */
        Domain: string;
        /**
         * 加速域名的ICP备案状态。
         * - **illegal**：违规。
         * - **inactive**：未备案。
         * - **active**：已备案。
         * - **unknown**：未知。
         * @example `active`
         */
        State: string;
    }[];
}
