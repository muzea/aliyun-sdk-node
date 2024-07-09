export interface ResetUserPasswordResponse {
    /**
     * 新密码。
     * > 该参数仅在系统自动生成密码时显示。
     * @example `W2koInFIm0Wy2wVZ$oB)MzD$nY!G****`
     */
    NewPassword: string;
    /**
     * 请求ID。
     * @example `F44F02EC-70D1-5E51-8E8E-FA9AC4EF952A`
     */
    RequestId: string;
}
