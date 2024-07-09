export interface UpdateCloudGtmAddressRemarkResponse {
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
}
