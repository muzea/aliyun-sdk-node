export interface ListRepoTriggerResponse {
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 是否调用API成功，取值：
     * - `true`：调用API成功
     * - `false`：调用API失败
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 请求ID
     * @example `2CA76D52-A8F0-4D0B-854E-FBD9F6C99049`
     */
    RequestId: string;
    /**
     * 触发器列表
     */
    Triggers: {
        /**
         * 触发器名称
         * @example `test`
         */
        TriggerName: string;
        /**
         * 触发事件类型，取值：
         * - `BUILD_SUCCESS`：触发成功
         * - `BUILD_Fail`：触发失败
         * @example `BUILD_SUCCESS`
         */
        RepoEvent: string;
        /**
         * 触发器ID
         * @example `crw-vriyql9eq7ep****`
         */
        TriggerId: string;
        /**
         * 触发器URL地址
         * @example `https://www.test.com`
         */
        TriggerUrl: string;
        /**
         * 触发类型，取值：
         * - `ALL`：全部触发
         * - `TAG_LISTTAG`：触发
         * - `TAG_REG_EXP`：表达式触发
         * @example `ALL`
         */
        TriggerType: string;
        /**
         * 触发触发器的镜像版本
         * @example `*`
         */
        TriggerTag: string;
    }[];
}
