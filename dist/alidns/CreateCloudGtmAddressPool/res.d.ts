export interface CreateCloudGtmAddressPoolResponse {
    /**
     * 唯一请求识别码。
     * @example `46973D4C-E3E4-4ABA-9190-9A9DE406C7E`
     */
    RequestId: string;
    /**
     * 创建地址池操作是否成功：
     * - true：操作成功
     * - false：操作失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 创建地址池的ID，地址池的唯一识别码。
     * @example `pool-89528023225442**16`
     */
    AddressPoolId: string;
}
