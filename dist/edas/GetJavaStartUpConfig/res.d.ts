export interface GetJavaStartUpConfigResponse {
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `4823-bhjf-23u4-eiufh`
     */
    RequestId: string;
    /**
     * Java启动参数配置。
     */
    JavaStartUpConfig: {
        /**
         * 生效的启动参数配置。
         * @example `-Xms512m`
         */
        StartUpArgs: string;
        /**
         * 显示的启动参数配置。
         * @example `-Xms512m`
         */
        OriginalConfigs: string;
    };
}
