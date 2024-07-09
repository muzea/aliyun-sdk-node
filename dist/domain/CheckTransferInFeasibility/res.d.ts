export interface CheckTransferInFeasibilityResponse {
    /**
     * 是否可以转入。取值：
     * - **true**：可以转入。
     * - **false**：不可以转入。
     * @example `false`
     */
    CanTransfer: boolean;
    /**
     * 不可转入时，返回错误描述。
     * @example `This domain name is in transfer prohibited status, so it cannot be transferred. You can contact your original registrar to change its status.`
     */
    Message: string;
    /**
     * 唯一请求识别码。
     * @example `FC0D6B89-2353-4D64-BD80-6606A7DBD7C1`
     */
    RequestId: string;
    /**
     * 域名产品的编号。
     * @example `2a`
     */
    ProductId: string;
    /**
     * 不可转入时，返回错误代码。
     * @example `CheckTransferResult.DomainTransferProhibited`
     */
    Code: string;
}
