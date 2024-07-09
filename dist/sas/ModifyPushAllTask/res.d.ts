export interface ModifyPushAllTaskResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `91EB4AC7-7FEF-4C72-BE49-4414E459AEC2`
     */
    RequestId: string;
    /**
     * 安全检查任务执行的结果。
     */
    PushTaskRsp: {
        /**
         * 安全检查任务执行失败的服务器的信息。
         */
        PushTaskResultList: {
            /**
             * 服务器UUID。
             * @example `5493fe42-61f5-4627-9aa2-8c449bbe****`
             */
            Uuid: string;
            /**
             * 服务器分组的ID。
             * @example `226`
             */
            GroupId: number;
            /**
             * 安全检查是否执行成功。取值：
             * - **true**：是
             * - **false**：否
             * @example `false`
             */
            Success: boolean;
            /**
             * 服务器所在地域。
             * @example `cn-beijing`
             */
            Region: string;
            /**
             * 服务器的名称。
             * @example `TestInstance`
             */
            InstanceName: string;
            /**
             * 云安全中心客户端是否在线。取值：
             * - **true**：是
             * - **false**：否
             * > 如果客户端不在线，则云安全中心无法对该型服务器提供安全防护。
             * @example `false`
             */
            Online: boolean;
            /**
             * 安全检查任务执行失败的详细信息。
             * @example `successful`
             */
            Message: string;
            /**
             * 服务器的IP。
             * @example `127.136.XX.XX`
             */
            Ip: string;
            /**
             * 服务器操作系统的版本。
             * @example `linux`
             */
            OsVersion: string;
            /**
             * 服务器实例的ID。
             * @example `i-wz9f7wlklxqnvdk****`
             */
            InstanceId: string;
        }[];
    };
}
