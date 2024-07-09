export interface QueryQualificationDetailResponse {
    /**
     * 审核状态。取值：
     * - 0：待完善资料。
     * - 1、2、3、4：审核中。
     * - 5：审核失败。
     * - 6：审核成功。
     * - 7：取消审核。
     * @example `1`
     */
    AuditStatus: number;
    /**
     * 请求ID。
     * @example `9DFCF6F8-243C-****-8035-4B12FEFD7D48`
     */
    RequestId: string;
    Credentials: {
        /**
         * 资质审核资料信息。
         */
        QualificationCredential: {
            /**
             * 资质审核的证件类型。
             * @example `SHSQB`
             */
            CredentialType: string;
            /**
             * 资质审核的证件号码。
             * @example `92610725MA7G2E****`
             */
            CredentialNo: string;
            /**
             * 资质审核的证件照URL。
             * @example `11212121/1212d**​/sqb.jpg`
             */
            CredentialUrl: string;
        }[];
    };
    /**
     * 资质审核业务跟踪号。
     * @example `943a1662898a****0acbdbeca91`
     */
    TrackId: string;
}
