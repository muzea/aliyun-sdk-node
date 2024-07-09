export interface LogVMDeployMachineResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `”“`
     */
    errorMessage: string;
    /**
     * true 接口调用成功，false 接口调用失败
     * @example `true 接口调用成功，false 接口调用失败`
     */
    success: boolean;
    /**
     * 错误码
     * @example `”“`
     */
    errorCode: string;
    /**
     * 部署单
     */
    deployMachineLog: {
        /**
         * 部署日志
         * @example `success`
         */
        deployLog: string;
        /**
         * 部署地域
         * @example `cn-hangzhou`
         */
        aliyunRegion: string;
        /**
         * 部署日志路径
         * @example `/tmp/log`
         */
        deployLogPath: string;
        /**
         * 部署开始时间
         * @example `11111111111`
         */
        deployBeginTime: number;
        /**
         * 部署结束时间
         * @example `1719312026`
         */
        deployEndTime: number;
    };
}
