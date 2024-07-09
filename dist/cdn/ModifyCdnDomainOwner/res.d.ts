export interface ModifyCdnDomainOwnerResponse {
    /**
     * 请求ID。
     * @example `C98E518B-024E-538E-8276-66310CB8667D`
     */
    RequestId: string;
    /**
     * 域名迁移说明。
     * @example `The domain does not allow to transfer to a different account.`
     */
    Content: any;
}
