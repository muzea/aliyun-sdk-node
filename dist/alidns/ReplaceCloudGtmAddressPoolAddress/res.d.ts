export interface ReplaceCloudGtmAddressPoolAddressResponse {
    /**
     * 唯一请求识别码。
     * @example `B57C121B-A45F-44D8-A9B2-13E5A5044195`
     */
    RequestId: string;
    /**
     * 本次操作是否成功：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 地址池Id，地址池的唯一标识码。
     * @example `pool-89618921167339**24`
     */
    AddressPoolId: string;
}
