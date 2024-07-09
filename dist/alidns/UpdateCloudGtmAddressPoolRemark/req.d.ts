export interface UpdateCloudGtmAddressPoolRemarkRequest {
    /**
     * 返回结果显示的语言。取值：
     * - zh-CN：中文
     * - en-US：英文
     * @example `en-US`
     */
    "AcceptLanguage"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。
     * @example `1ae05db4-10e7-11ef-b126-00163e24**22`
     */
    "ClientToken"?: string;
    /**
     * 地址池的ID，地址池的唯一识别码。
     * @example `pool-89528023225442**16`
     */
    "AddressPoolId"?: string;
    /**
     * 传入的参数作为更新后的备注，传空值则删除备注。
     * @example `test`
     */
    "Remark"?: string;
}
