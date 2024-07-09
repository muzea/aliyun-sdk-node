export interface ListApplicationMembersRequest {
    /**
     * 应用名
     * @example `testApp`
     */
    "appName"?: string;
    /**
     * 企业标识，也称企业id
     * @example `66c0c9fffeb86b450c199fcd`
     */
    "organizationId"?: string;
}
