export interface GetCardLockReasonResponse {
    /**
     * 请求id。
     * @example `F32C0BBE-5025-5561-8976-7BD096BA21FB`
     */
    RequestId: string;
    /**
     * 锁定原因。
     * @example `ForceTwoWayStop`
     */
    LockReason: string;
}
