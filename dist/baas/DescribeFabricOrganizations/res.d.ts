export interface DescribeFabricOrganizationsResponse {
    /**
     * 请求ID
     * @example `1890FA4F-067A-4CE9-AC9B-2BD2E58FB5D3`
     */
    RequestId: string;
    /**
     * 错误码
     * @example `200`
     */
    ErrorCode: number;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 组织列表
     */
    Result: {
        /**
         * 域名
         * @example `domain`
         */
        Domain: string;
        /**
         * 节点数
         * @example `3`
         */
        PeerCount: number;
        /**
         * 状态
         * @example `Running`
         */
        State: string;
        /**
         * 创建时间
         * @example `1533025590`
         */
        CreateTime: string;
        /**
         * 联盟数量
         * @example `2`
         */
        ConsortiumCount: number;
        /**
         * 规格名
         * @example `basic、`
         */
        SpecName: string;
        /**
         * 创建者
         * @example `name`
         */
        OwnerName: string;
        /**
         * 创建者用户ID
         * @example `1232`
         */
        OwnerUid: number;
        /**
         * 创建者业务ID
         * @example `bid`
         */
        OwnerBid: string;
        /**
         * 域名前缀
         * @example `name`
         */
        CodeName: string;
        /**
         * 组织描述
         * @example `desc`
         */
        OrganizationDescription: string;
        /**
         * 地域
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 组织ID
         * @example `peers-aaaaaa2-1eqnj5o5w9dt3`
         */
        OrganizationId: string;
        /**
         * 请求ID
         * @example `1890FA4F-067A-4CE9-AC9B-2BD2E58FB5D3`
         */
        RequestId: string;
        /**
         * 可用区
         * @example `zone`
         */
        ZoneId: string;
        /**
         * 用户数量
         * @example `10`
         */
        UserCount: number;
        /**
         * 组织名
         * @example `name`
         */
        OrganizationName: string;
        MajorVersion: string;
        /**
         * 标签列表
         */
        Tags: {
            /**
             * 标签键
             * @example `BlockChainOwner`
             */
            Key: string;
            /**
             * 标签值
             * @example `DepartmentA`
             */
            Value: string;
        }[];
    }[];
}
