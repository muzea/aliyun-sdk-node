export interface UpdateOrganizationMemberRequest {
    /**
     * 云效企业ID
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 云账号ID
     * @example `243721251830762xxx`
     */
    "accountId": string;
    /**
     * 企业成员名
     * @example `名字1`
     */
    "organizationMemberName": string;
}
