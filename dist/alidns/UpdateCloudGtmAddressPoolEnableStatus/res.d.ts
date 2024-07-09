export interface UpdateCloudGtmAddressPoolEnableStatusResponse {
    /**
     * 唯一请求识别码。
     * @example `89184F33-48A1-4401-9C0F-40E45DB091AB`
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
     * @example `pool-89528023225442**16`
     */
    AddressPoolId: string;
}
