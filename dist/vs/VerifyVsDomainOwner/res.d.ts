export interface VerifyVsDomainOwnerResponse {
    /**
     * 校验内容。
     * >
     * 调用成功不返回该参数，调用失败返回校验内容。
     * @example `verify_dffeb6610035dcb77b413a59c32c****
    `
     */
    Content: string;
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
}
