export interface CreateWorkitemV2Response {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `EAE03103-5497-58D1-9169-E524DDE8604C`
     */
    requestId: string;
    /**
     * - 当success为false，返回业务错误码；
     *
     * - 当success为true，返回空值。
     * @example `InvalidTagGroup.IdNotFound`
     */
    errorCode: string;
    /**
     * - 当success为false，返回业务错误信息；
     * - 当success为true，返回空值。
     * @example `SYSTEM_UNKNOWN_ERROR`
     */
    errorMessage: string;
    /**
     * true或者false
     * @example `true`
     */
    success: string;
    /**
     * 工作项id，唯一标识
     * @example `11234455454355`
     */
    workitemIdentifier: string;
}
