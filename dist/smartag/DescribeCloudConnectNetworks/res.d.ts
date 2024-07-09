export interface DescribeCloudConnectNetworksResponse {
    CloudConnectNetworks: {
        /**
         * 云连接网实例信息列表。
         */
        CloudConnectNetwork: {
            /**
             * 云连接网实例的创建时间戳。
             * @example `1523618639000`
             */
            CreateTime: number;
            /**
             * 已加载该云连接网实例的云企业网实例的账号ID。
             * @example `168800000000****`
             */
            AssociatedCenOwnerId: string;
            /**
             * 云连接网实例绑定的智能接入网关实例数量。
             * @example `1`
             */
            AssociatedCloudBoxCount: string;
            Tags: {
                /**
                 * 标签信息列表。
                 */
                Tag: {
                    /**
                     * 标签键。
                     * @example `test`
                     */
                    Key: string;
                    /**
                     * 标签值。
                     * @example `test`
                     */
                    Value: string;
                }[];
            };
            /**
             * 是否允许已绑定同一个云连接网实例的智能接入网关实例互通。
             * - **enable**：允许。
             * - **disable**：不允许。
             * @example `enable`
             */
            InterworkingStatus: string;
            /**
             * 云连接网实例ID。
             * @example `ccn-l9340rlu5enst******`
             */
            CcnId: string;
            /**
             * 云连接网实例已绑定的智能接入网关实例中状态为**可用**的智能接入网关实例的数量。
             * @example `1`
             */
            AvailableCloudBoxCount: string;
            /**
             * 私网网段。
             * @example `10.10.10.0/24`
             */
            CidrBlock: string;
            /**
             * 云连接网实例的描述信息。
             * @example `ccndesc`
             */
            Description: string;
            /**
             * SNAT网段。
             * @example `10.10.10.0/25`
             */
            SnatCidrBlock: string;
            /**
             * 云连接网实例绑定的云企业网实例ID。
             * @example `cen-0jtu0bcbika5b5****`
             */
            AssociatedCenId: string;
            /**
             * 云连接网实例的名称。
             * @example `ccnname`
             */
            Name: string;
            /**
             * 云连接网实例所属的资源组ID。
             * @example `rg-acfm2iu4fnc****`
             */
            ResourceGroupId: string;
        }[];
    };
    /**
     * 总条目数。
     * @example `3`
     */
    TotalCount: number;
    /**
     * 分页查询时每页包含的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `3F2A0B80-D6D1-4764-8D77-38067DBBA345`
     */
    RequestId: string;
    /**
     * 查询页码。
     * @example `1`
     */
    PageNumber: number;
}
