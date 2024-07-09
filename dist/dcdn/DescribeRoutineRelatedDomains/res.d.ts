export interface DescribeRoutineRelatedDomainsResponse {
    /**
     * 包含关联Routine的域名列表。
     * @example `        {"Domains": [
                "xxx.com",
                "yyy.com",
                ...
            ]}`
     */
    Content: any;
    /**
     * 请求ID。
     * @example `FC0E34AC-0239-44A7-AB0E-800DE522C8DA`
     */
    RequestId: string;
}
