export interface UpdateCloudGtmAddressPoolLbStrategyResponse {
    /**
     * 唯一请求识别码。
     * @example `B57C121B-A45F-44D8-A9B2-13E5A5044195`
     */
    RequestId: string;
    /**
     * 本次修改操作是否成功：
     * - true：操作成功
     * - false：操作失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 地址池的ID，地址池的唯一识别码。
     * @example `pool-89528023225442**16
    `
     */
    AddressPoolId: string;
}
