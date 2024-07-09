export interface RegisterDeviceGroupRequest {
    /**
     * API版本号，"1.0.0"。
     * @example `1.0.0`
     */
    "ApiVersion": string;
    /**
     * 业务链标识。
     * @example `981184817831****`
     */
    "BizChainId": string;
    /**
     * IoT数据源组名称。
     * 长度为2~30字符，可以包含中文、英文字母、数字、下划线（_）、横线（-）、英文句号（.）和圆括号（()）。
     * @example `某数据源组`
     */
    "DeviceGroupName": string;
    /**
     * IoT数据源组ProductKey。
     * @example `hKpHMh2****`
     */
    "ProductKey": string;
    /**
     * 授权类型。
     * **ID2**：阿里云Link ID²。
     * @example `ID2`
     */
    "AuthorizeType": string;
    /**
     * 备注信息。长度限制为100字符。
     * @example `某数据源组的备注信息。`
     */
    "Remark"?: string;
}
