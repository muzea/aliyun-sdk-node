export interface DescribeAntChainCertificateApplicationsV2Response {
    /**
     * 请求返回码
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 请求ID
     * @example `D68D66B6-1964-4073-8714-B49F5EF1AEFC`
     */
    RequestId: string;
    /**
     * 结果状态
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果消息
     * @example `OK`
     */
    ResultMessage: string;
    /**
     * 返回码
     * @example `OK`
     */
    Code: string;
    /**
     * 请求消息
     * @example `OK`
     */
    Message: string;
    /**
     * 结果码
     * @example `OK`
     */
    ResultCode: string;
    /**
     * 请求结果
     */
    Result: {
        /**
         *
         * 证书申请信息
         */
        CertificateApplications: {
            /**
             * 状态
             * @example `1`
             */
            Status: string;
            /**
             * 更新时间
             * @example `1609848404000`
             */
            Updatetime: number;
            /**
             * 创建时间
             * @example `1609848404000`
             */
            Createtime: number;
            /**
             *
             * 阿里云Bid账号
             * @example `26842`
             */
            Bid: string;
            /**
             * 区块链ID
             * @example `8bd720bde18c4b37b0f4a1c7834db163`
             */
            AntChainId: string;
            /**
             *
             * 账户名
             * @example `uid-103477475017****`
             */
            Username: string;
        }[];
        /**
         * 分页信息
         */
        Pagination: {
            /**
             * 每页数量
             * @example `10`
             */
            PageSize: number;
            /**
             * 页面编号，从1开始
             * @example `1`
             */
            PageNumber: number;
            /**
             * 总数
             * @example `100`
             */
            TotalCount: number;
        };
    };
}
