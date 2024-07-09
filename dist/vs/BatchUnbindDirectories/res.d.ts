export interface BatchUnbindDirectoriesResponse {
    /**
     * 请求ID。
     * @example `64DB7F34-11A8-45DC-A421-40ACF446282C`
     */
    RequestId: string;
    /**
     * 结果列表。
     */
    Results: {
        /**
         * 绑定的错误信息。
         * > 仅在出错时存在。
         * @example `An error occurred while processing your request.`
         */
        Error: string;
        /**
         * 目录ID。
         * @example `399*****488-cn-qingdao`
         */
        DirectoryId: string;
        /**
         * 目录ID。
         * @example `348*****380-cn-qingdao`
         */
        DeviceId: string;
    }[];
}
