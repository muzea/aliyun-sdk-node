export interface DescribeAntChainCertificateApplicationsResponse {
    /**
     * 请求ID
     * @example `B232A84E-7944-4EB0-83D0-9D409E12E0A8`
     */
    RequestId: string;
    /**
     * 请求结果
     */
    Result: {
        /**
         * 证书申请信息
         */
        CertificateApplications: {
            /**
             * 证书状态：
             * - 1：正常
             * - 2：被重置
             * @example `1`
             */
            Status: string;
            /**
             * 更新时间
             * @example `1563949275000`
             */
            Updatetime: number;
            /**
             * 创建时间
             * @example `1563949275000`
             */
            Createtime: number;
            /**
             * Bid
             * @example `26842`
             */
            Bid: string;
            /**
             * 区块链ID
             * @example `1q8B5R9p`
             */
            AntChainId: string;
            /**
             * 账户名
             * @example `uid-128712635330****`
             */
            Username: string;
        }[];
        /**
         * 分页信息
         */
        Pagination: {
            /**
             * 每页数量
             * @example `20`
             */
            PageSize: number;
            /**
             * 页面数
             * @example `1`
             */
            PageNumber: number;
            /**
             * 每页总量
             * @example `1`
             */
            TotalCount: number;
        };
    };
}
