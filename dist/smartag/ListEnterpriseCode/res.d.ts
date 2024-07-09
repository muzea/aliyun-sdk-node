export interface ListEnterpriseCodeResponse {
    /**
     * 总条目数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 分批次查询时，下一次查询的Token。
     * @example `caeba0bbb2be03f84eb48b699f0*****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `1A57EF84-D587-4CF9-B0C8-307488BF52C9`
     */
    RequestId: string;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `2`
     */
    MaxResults: number;
    /**
     * 企业码信息。
     */
    EnterpriseCodes: {
        /**
         * 是否为默认企业码：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        IsDefault: boolean;
        /**
         * 企业码。
         * @example `12P**`
         */
        EnterpriseCode: string;
    }[];
}
