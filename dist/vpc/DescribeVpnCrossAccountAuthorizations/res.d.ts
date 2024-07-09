export interface DescribeVpnCrossAccountAuthorizationsResponse {
    /**
     * 请求ID。
     * @example `DB04E39A-6F0C-36AC-BCA0-B6D371B90062`
     */
    RequestId: string;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时每页的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * IPsec连接跨账号授权信息列表。
     */
    CrossAccountAuthorizations: {
        /**
         * IPsec连接ID。
         * @example `vco-p0w2jpkhi2eeop6q6****`
         */
        VpnConnectionId: string;
        /**
         * IPsec连接授权的阿里云账号（主账号）ID。
         * @example `1210123456123456`
         */
        BindUid: number;
        /**
         * IPsec连接授权的资源类型。
         * 仅取值：**CEN**，表示IPsec连接向跨账号的云企业网实例授权，IPsec连接可被绑定至跨账号云企业网实例下的转发路由器实例。
         * @example `CEN`
         */
        BindProduct: string;
        /**
         * IPsec连接授权的云企业网实例ID。
         * @example `cen-vv8h0t3klfpaae****`
         */
        BindInstance: string;
        /**
         * IPsec连接所属的阿里云账号（主账号）ID。
         * @example `1250123456123456`
         */
        AliUid: number;
        /**
         * IPsec连接创建跨账号授权的时间戳。
         * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至创建跨账号授权时的总时长。
         * @example `1658201810000`
         */
        CreationTime: number;
    }[];
}
