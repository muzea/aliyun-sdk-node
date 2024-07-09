export interface DescribeAttestorsResponse {
    /**
     * 本次请求的ID。
     * @example `7BC55C8F-226E-5AF5-9A2C-2EC43864****`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，显示的当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，显示每页数据的最大条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 数据的总条数。
         * @example `122`
         */
        TotalCount: number;
        /**
         * 当前页显示的数据条数。
         * @example `20`
         */
        Count: number;
    };
    /**
     * 证明者。
     */
    Attestors: {
        /**
         * KMS秘钥版本ID。
         * @example `8d7c9c91-57ce-4cf4-a959-1e700e13****`
         */
        KeyVersionId: string;
        /**
         * KMS秘钥ID。
         * @example `2e81355b-f8e7-4090-8082-a8f8124a****`
         */
        KeyId: string;
        /**
         * 备注。
         * @example `attestor`
         */
        Remark: string;
        /**
         * 证明者名称。
         * @example `attestor-123`
         */
        Name: string;
        /**
         * KMS秘钥所在区域ID。
         * @example `cn-hangzhou`
         */
        KeyRegionId: string;
    }[];
}
