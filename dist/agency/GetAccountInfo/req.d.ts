export interface GetAccountInfoRequest {
    /**
     * 分销客户账号UID，此参数和UserType参数必须有一个。如果此参数为空，则查询UserType类型的所有分销客户账号。
     * @example `1215848086704806`
     */
    "Uid"?: number;
    /**
     * 分销客户账号类型，取值范围:
     * - 1 End User
     * - 2 企业客户
     * - 3 T2伙伴
     * @example `1`
     */
    "UserType"?: string;
    /**
     * 分页，当前页
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 分页，每页数量，最大20
     * @example `10`
     */
    "PageSize": number;
}
