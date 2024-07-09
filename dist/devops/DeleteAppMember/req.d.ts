export interface DeleteAppMemberRequest {
    /**
     * 企业标识，也称企业id
     * @example `66c0c9fffeb86b450c199fcd`
     */
    "organizationId"?: string;
    /**
     * 应用名
     * @example `testApp`
     */
    "appName"?: string;
    /**
     * 成员类型，目前只支持User
     * @example `User`
     */
    "subjectType"?: string;
    /**
     * 成员id，类型为User时为成员的阿里云UID
     * @example `1332695887xxxxxx`
     */
    "subjectId"?: string;
}
