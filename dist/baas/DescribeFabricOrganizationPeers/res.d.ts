export interface DescribeFabricOrganizationPeersResponse {
    /**
     * 请求ID
     * @example `1890FA4F-067A-4CE9-AC9B-2BD2E58FB5D3`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码
     * @example `200`
     */
    ErrorCode: number;
    Result: {
        /**
         * 更新时间
         * @example `1533025590`
         */
        UpdateTime: string;
        /**
         * 域名
         * @example `domain`
         */
        Domain: string;
        /**
         * 公网IP
         * @example `10.0.0.2`
         */
        InternetIp: string;
        /**
         * 创建时间
         * @example `1533025590`
         */
        CreateTime: string;
        /**
         * 是否是AnchorPeer
         * @example `false`
         */
        IsAnchor: boolean;
        /**
         * 实例类型
         * @example `basic`
         */
        InstanceType: string;
        /**
         * 端口
         * @example `1234`
         */
        Port: number;
        /**
         * 组织的节点名
         * @example `name`
         */
        OrganizationPeerName: string;
        /**
         * 内网IP
         * @example `10.0.0.2`
         */
        IntranetIp: string;
    }[];
}
