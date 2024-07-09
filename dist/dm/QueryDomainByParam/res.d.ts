export interface QueryDomainByParamResponse {
    /**
     * 分页大小
     * @example `50`
     */
    PageSize: number;
    /**
     * 请求ID
     * @example `8C90CCD3-627C-4F87-AD8C-2F03146071EB`
     */
    RequestId: string;
    /**
     * 当前页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总数量
     * @example `2`
     */
    TotalCount: number;
    data: {
        /**
         * 域名列表
         */
        domain: {
            /**
             * 域名记录
             * @example `6bd86901b9fe4618a046`
             */
            DomainRecord: string;
            /**
             * spf验证标志，成功：0，失败：1。
             * @example `0`
             */
            SpfAuthStatus: string;
            /**
             * mx验证标志，成功：0，失败：1。
             * @example `0`
             */
            MxAuthStatus: string;
            /**
             * 创建时间
             * @example `2019-09-29T13:28Z`
             */
            CreateTime: string;
            /**
             * track验证
             * @example `0`
             */
            CnameAuthStatus: string;
            /**
             * cName验证标志，成功：0； 失败：1
             * @example `0`
             */
            ConfirmStatus: string;
            /**
             * 备案状态。
             * - 1表示备案
             * - 0表示未备案
             * @example `1`
             */
            IcpStatus: string;
            /**
             * 创建时间，UTC格式。
             * @example `1569734892`
             */
            UtcCreateTime: number;
            /**
             * 域状态。
             * - 0：可用，已验证通过
             * - 1：不可用，验证未通过
             * - 2：可使用，未做cname，未备案
             * - 3：可使用，未备案
             * - 4：可使用，未做cname
             * @example `0`
             */
            DomainStatus: string;
            /**
             * 域名
             * @example `vmeixme.com`
             */
            DomainName: string;
            /**
             * 域名ID
             * @example `158923`
             */
            DomainId: string;
        }[];
    };
}
