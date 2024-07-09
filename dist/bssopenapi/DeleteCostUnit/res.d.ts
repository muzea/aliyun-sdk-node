export interface DeleteCostUnitResponse {
    /**
     * 状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Successful！`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `F5B803CF-94D8-43AF-ADB3-D819AAD30E27`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 是否完成。
         * @example `true`
         */
        IsSuccess: boolean;
        /**
         * 新财务单元的ID。
         * @example `123412343`
         */
        UnitId: number;
        /**
         * 财务单元的属主用户ID。
         * @example `12431`
         */
        OwnerUid: number;
    };
}
