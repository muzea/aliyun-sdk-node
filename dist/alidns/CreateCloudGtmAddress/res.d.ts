export interface CreateCloudGtmAddressResponse {
    /**
     * 唯一请求识别码。
     * @example `46973D4C-E3E4-4ABA-9190-9A9DE406C7E`
     */
    RequestId: string;
    /**
     * 创建地址操作是否成功：
     * - true：操作成功
     * - false：操作失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 创建地址的ID，地址唯一标识码。
     * @example `addr-8951821811436**192`
     */
    AddressId: string;
}
