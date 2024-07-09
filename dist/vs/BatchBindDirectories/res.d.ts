export interface BatchBindDirectoriesResponse {
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 结果列表
     */
    Results: {
        /**
         * 绑定的错误信息。
         * > 仅在出错时存在。
         * @example `An error occurred while processing your request.`
         */
        Error: string;
        /**
         * 目录ID
         * @example `399*****488-cn-qingdao`
         */
        DirectoryId: string;
        /**
         * 设备ID
         * @example `348*****380-cn-qingdao`
         */
        DeviceId: string;
    }[];
}
