export interface ListServiceAuthsResponse {
    /**
     * 请求id
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 错误码
     * @example `""`
     */
    errorCode: string;
    /**
     * true 接口调用成功，false 接口调用失败
     * @example `true`
     */
    success: boolean;
    /**
     * 服务授权列表
     */
    serviceAuths: {
        /**
         * 服务授权id
         * @example `123`
         */
        id: number;
        /**
         * 服务授权名称
         * @example `张三`
         */
        ownerName: string;
        /**
         * 服务授权类型
         * @example `Codeup`
         */
        type: string;
        /**
         * 授权用户的 StaffId
         * @example `123456789`
         */
        ownerStaffId: string;
    }[];
}
