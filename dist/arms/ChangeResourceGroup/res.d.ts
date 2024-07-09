export interface ChangeResourceGroupResponse {
    /**
     * 请求ID。
     * @example `46355DD8-FC56-40C5-BFC6-269DE4F9****`
     */
    RequestId: string;
    /**
     * 返回结构体。
     */
    Data: {
        /**
         * 资源ID。
         * @example `ggxw4lnjuz@cfd34a78f******`
         */
        ResourceId: string;
        /**
         * 资源组 ID。
         * @example `rg-aek2vezare****`
         */
        ResourceGroupId: string;
    };
    /**
     * 接口状态或pop错误码。
     * @example `200`
     */
    Code: string;
    /**
     * 返回结果的提示信息。
     * @example `message`
     */
    Message: string;
}
