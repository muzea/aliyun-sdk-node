export interface ListTagKeysResponse {
    /**
     * 下一个查询开始的Token。
     * @example `caeba0bbb2be03f84eb48b699f0*****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `C429473A-5C66-4661-B5F8-4F900CD4330A`
     */
    RequestId: string;
    /**
     * 标签键列表。
     */
    Keys: string[];
}
