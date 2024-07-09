export interface GetServiceStatusResponse {
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求id
     * @example `B7F4B621-E41E-4C84-B97F-42B5380A32BB`
     */
    RequestId: string;
    /**
     * 服务状态
     * @example `{ 			"AccountStatus":"", 			"RegionStatus":"READY", 			"RegionId":"cn-shanghai", 			"IsDependencyReady":true, 			"IsDlfServiceOpen":true 		}`
     */
    Data: {
        /**
         * DLF服务是否开通
         * @example `true`
         */
        IsDlfServiceOpen: boolean;
        /**
         * 是否完成RAM授权
         * @example `true`
         */
        HasRamPermissions: boolean;
        /**
         * OSS服务是否开通
         * @example `true`
         */
        IsOssOpen: boolean;
    };
}
