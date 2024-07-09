export interface ChangeAssetRefreshTaskConfigResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `BE120DAB-F4E7-4C53-ADC3-A97578ABF384`
     */
    RequestId: string;
    /**
     * 修改是否成功。取值：
     *  - **true**：修改成功
     *  - **false**：修改失败
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求结果返回信息。
     * @example `successful`
     */
    Message: string;
}
