export interface CreateSavepointRequest {
    /**
     * 工作空间ID。
     * @example `a14bd5d90a****`
     */
    "workspace": string;
    /**
     * 项目空间名称。
     * @example `default-namespace`
     */
    "namespace": string;
    /**
     * 触发savepoint参数。
     */
    "body"?: {
        /**
         * 作业ID。
         * @example `58718c99-3b29-4c5e-93bb-c9fc4ec6****`
         */
        deploymentId: string;
        /**
         * savepoint描述信息。
         * @example `作业快照描述`
         */
        description: string;
        /**
         * 是否使用nativeFormat模式：
         * - true：使用
         * - false：不使用
         * @example `true`
         */
        nativeFormat: boolean;
    };
}
