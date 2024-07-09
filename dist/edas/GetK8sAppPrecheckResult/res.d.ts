export interface GetK8sAppPrecheckResultResponse {
    /**
     * 请求ID。
     * @example `B909AB1F-3763-4963-B1CE-0BDFA192****`
     */
    RequestId: string;
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 接口响应数据。
     */
    Data: {
        /**
         * 应用变更预检状态：
         * - checking：检查中。
         * - pass：通过检查。
         * - failed：未通过检查。
         * @example `checking`
         */
        Status: string;
        /**
         * 应用变更预检未通过的原因说明。预检通过时该字段为空。
         * @example `K8s集群失联。`
         */
        Reason: string;
        /**
         * 应用变更预检结果。
         */
        JobResults: {
            /**
             * 预检任务项名称。
             * @example `Cluster Health Check`
             */
            Name: string;
            /**
             * 预检任务项是否通过预检：
             * - true：通过预检。
             * - false：未通过预检。
             * @example `true`
             */
            Pass: boolean;
            /**
             * 预检任务项是否被中断：
             * - true：任务被中断。
             * - false：任务未被中断。
             * @example `false`
             */
            Interrupted: boolean;
            /**
             * 应用变更预检项未通过或被中断的原因说明。预检通过时该字段为空。
             * @example `K8s集群失联。`
             */
            Reason: string;
        }[];
    };
}
