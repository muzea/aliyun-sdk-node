export interface DeleteCloudGtmAddressPoolResponse {
    /**
     * 唯一请求识别码。
     * @example `536E9CAD-DB30-4647-AC87-AA5CC38C5382`
     */
    RequestId: string;
    /**
     * 删除地址池操作是否成功：
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
