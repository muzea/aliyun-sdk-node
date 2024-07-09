export interface GetOrganizationMemberRequest {
    /**
     * 企业标识，也称企业id
     * @example `66c0c9fffeb86b450c199fcd`
     */
    "organizationId": string;
    /**
     * 阿里云用户UID
     * @example `123456677888`
     */
    "accountId": string;
}
