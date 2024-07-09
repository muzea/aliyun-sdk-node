export interface GetWorkerListResponse {
    /**
     * Id of the request
     * @example `4F68ABED-AC31-4412-9297-D9A8F0401108****`
     */
    RequestId: string;
    /**
     * 接口状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `Cannot find product according to your domain.`
     */
    Message: string;
    /**
     * 调用接口是否成功。取值如下：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 指定任务信息。
     */
    Data: {
        /**
         * worker信息。
         */
        WorkerInfos: {
            /**
             * worker的ip
             * @example `30.225.16.49`
             */
            Ip: string;
            /**
             * worker的端口
             * @example `60831`
             */
            Port: number;
            /**
             * worker的地址信息，格式为${worker_id}@${worker_ip}:${worker_port}
             * @example `030225016049_11734_25917@30.225.16.49:60831`
             */
            WorkerAddress: string;
            /**
             * worker的标签
             * @example `gray`
             */
            Label: string;
            /**
             * worker的版本
             * @example `1.3.4`
             */
            Version: string;
            /**
             * worker的启动方式
             * @example `springboot`
             */
            Starter: string;
        }[];
    };
}
