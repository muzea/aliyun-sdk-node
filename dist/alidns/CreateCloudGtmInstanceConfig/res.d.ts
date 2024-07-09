export interface CreateCloudGtmInstanceConfigResponse {
    /**
     * 唯一请求识别码。
     * @example `536E9CAD-DB30-4647-AC87-AA5CC38C5382`
     */
    RequestId: string;
    /**
     * 本次操作是否成功：
     * - true：操作成功
     * - false：操作失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 域名实例配置id，相同接入域名、相同的GTM实例可以同时配置A和AAAA记录，此情况下相同的GTM实例会出现2个域名实例配置，ConfigId可以唯一标识域名实例配置。
     * @example `config-000**1`
     */
    ConfigId: boolean;
}
