export interface ListSceneParametersResponse {
    /**
     * 返回详情结果
     */
    result: {
        /**
         * 渠道列表
         */
        traceId: string[];
        /**
         * 场景列表
         */
        sceneId: string[];
    };
    /**
     * 错误码
     * @example `200`
     */
    code: string;
    /**
     * 当前请求的RequestID。
     * @example `A40E64C6-9E21-5E9C-B333-DD920AE5AB4A`
     */
    requestId: string;
    /**
     * 错误详情
     * @example `success`
     */
    message: string;
}
