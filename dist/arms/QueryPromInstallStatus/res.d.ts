export interface QueryPromInstallStatusResponse {
    /**
     * 请求ID，一次请求的唯一标识。
     * @example `27E653FA-5958-45BE-8AA9-14D884DC****`
     */
    RequestId: string;
    /**
     * 返回结构体。
     */
    Data: {
        /**
         * 操作是否成功。取值：
         * true：成功。
         * false：失败。
         * @example `true`
         */
        isControllerInstalled: boolean;
    };
}
