export interface CreateCloudGtmMonitorTemplateResponse {
    /**
     * 唯一请求识别码。
     * @example `B57C121B-A45F-44D8-A9B2-13E5A5044195`
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
     * 健康探测模板ID，唯一标识健康探测模板。
     * @example `mtp-89518052425100**80`
     */
    TemplateId: string;
}
