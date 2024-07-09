export interface UpdateCloudGtmInstanceNameResponse {
    /**
     * 唯一请求识别码。
     * @example `29D0F8F8-5499-4F6C-9FDC-1EE13BF55925`
     */
    RequestId: string;
    /**
     * 本次修改实例名称操作是否成功：
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
}
