export interface GetRegionStatusResponse {
    /**
     * 是否成功
     * @example `true`
     */
    Success: string;
    /**
     * 请求id
     * @example `CC58A776-0662-5C6D-B467-FFD4CF7F4C40`
     */
    RequestId: string;
    /**
     * 返回结果
     * @example `{'RegionId': 'cn-shanghai', 'RegionStatus': 'SERVICE_INVALID', 'AccountStatus': '', 'IsDlfServiceOpen': False}`
     */
    Data: {
        /**
         * DLF服务是否开通
         * @example `True`
         */
        IsDlfServiceOpen: boolean;
        /**
         * 地域状态，SERVICE_INVALID:服务不可用；UNINITIALIZED:未初始化；READY: 正常状态。
         * @example `READY`
         */
        RegionStatus: string;
        /**
         * 账号状态enabled（启用）或disabled（禁用）
         * @example `enabled`
         */
        AccountStatus: string;
        /**
         * 依赖是否准备就绪
         * @example `true`
         */
        IsDependencyReady: boolean;
        /**
         * 区域id
         * @example `cn_hangzhou`
         */
        RegionId: string;
    };
}
