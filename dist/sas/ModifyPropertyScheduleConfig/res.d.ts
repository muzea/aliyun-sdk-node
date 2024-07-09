export interface ModifyPropertyScheduleConfigResponse {
    /**
     * 资产指纹自动采集频率是否修改成功。取值：
     * -  **true**：修改成功
     * - **false**：修改失败
     * @example `true`
     */
    ModifyResult: boolean;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `C0D1DF51-D879-55A8-B6C7-7D3B913EF34D`
     */
    RequestId: string;
}
