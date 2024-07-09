export interface DescribeTagKeyListResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Specified parameter PageSize is not valid.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `B04B8CF3-4489-432D-83BA-6F128E5F2293`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    TagKeys: {
        TagKey: string[];
    };
}
