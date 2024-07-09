export interface AddContainerAppResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE7****`
     */
    RequestId: string;
    ContainerId: {
        /**
         * 容器ID。
         */
        ContainerId: string[];
    };
}
