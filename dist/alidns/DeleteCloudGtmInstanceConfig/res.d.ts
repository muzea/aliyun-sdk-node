export interface DeleteCloudGtmInstanceConfigResponse {
    /**
     * 唯一请求识别码。
     * @example `6856BCF6-11D6-4D7E-AC53-FD579933522B`
     */
    RequestId: string;
    /**
     * 删除域名实例配置操作是否成功：
     * - true：操作成功
     * - false：操作失败
     * @example `true`
     */
    Success: boolean;
}
