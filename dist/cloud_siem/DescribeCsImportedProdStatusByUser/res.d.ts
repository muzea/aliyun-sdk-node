export interface DescribeCsImportedProdStatusByUserResponse {
    /**
     * 是否已经开通对应产品。取值：
     * - true：已开通。
     * - false：未开通。
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求消息ID。
     * @example `6276D891-*****-55B2-87B9-74D413F7****`
     */
    RequestId: string;
}
