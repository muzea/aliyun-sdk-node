export interface DescribeSagRemoteAccessResponse {
    /**
     * 错误码。200标识查询任务成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。Successful标识查询任务成功。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `E38E950D-28A4-4C41-9428-A8908EC6AE5C`
     */
    RequestId: string;
    /**
     * 标识查询任务是否成功。
     * - **true**：表示查询任务成功。
     * - **false**：表示查询任务未成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 智能接入网关实例ID。
     * @example `sag-1um5x5nwhilymw****`
     */
    SmartAGId: string;
    RemoteAccesses: {
        /**
         * 智能接入网关设备远程登录信息。
         */
        RemoteAccess: {
            /**
             * 智能接入网关设备序列号。
             * @example `sage62x022502****`
             */
            SerialNumber: string;
            /**
             * 远程登录私网IP地址。
             * @example `192.XX.XX.1`
             */
            RemoteAccessIp: string;
        }[];
    };
}
