export interface VerifyDomainOwnerResponse {
    /**
     * 校验内容。
     * >调用成功不返回该参数，调用失败返回校验内容。
     * @example `verify_dffeb6610035dcb77b413a59c32c****`
     */
    Content: string;
    /**
     * 请求ID。
     * @example `34AB41F1-04A5-496F-8C8D-634BDBE6A9FB`
     */
    RequestId: string;
}
