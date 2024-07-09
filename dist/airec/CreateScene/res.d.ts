export interface CreateSceneResponse {
    /**
     * 返回结果详情。
     */
    result: {
        /**
         * 场景ID。
         * @example `test`
         */
        sceneId: string;
        /**
         * 最后修改时间。
         * @example `2020-04-23T06:08:48.000Z`
         */
        gmtModified: string;
        /**
         * 场景状态：
         * - **DRAFT**：唤醒，重新发布
         * - **PUBLISHING** ：发布
         * - **RUNNING**：运行中
         * - **FAILED**：发布失败
         * - **FROZEN** ：冻结
         * @example `DRAFT`
         */
        status: string;
        /**
         * 创建时间。
         * @example `2020-04-23T06:08:48.000Z`
         */
        gmtCreate: string;
    };
    /**
     * 错误码。
     * @example `InternalServerError`
     */
    code: string;
    /**
     * 请求ID。
     * @example `8F81A922-6C81-46D6-B78C-CC35E16B1691`
     */
    requestId: string;
    /**
     * 错误详情。
     * @example `An internal server error occurred`
     */
    message: string;
}
