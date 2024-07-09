export interface SubmitQueryResponse {
    /**
     * 返回数据
     * @example `Q-14475CF9B51FCE5E`
     */
    Data: string;
    /**
     * 请求ID
     * @example `279AA630-A8ED-5EA9-80A3-2E213D63548C`
     */
    RequestId: string;
    /**
     * 操作是否成功。true：操作成功；false：操作未成功。
     * @example `true`
     */
    Success: boolean;
}
