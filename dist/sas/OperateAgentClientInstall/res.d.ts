export interface OperateAgentClientInstallResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `AE79B457-877C-51C6-AD72-0D34A025D***`
     */
    RequestId: string;
    /**
     * 安装Agent客户端调用请求的返回结果。
     */
    AegisCelintInstallResposeList: {
        /**
         * 服务器UUID。
         * @example `1587bedb-fdb4-48c4-9330-****`
         */
        Uuid: string;
        /**
         * 服务器的实例ID。
         * @example `i-uf6j8vq9l4r5ntht****`
         */
        InstanceId: string;
        /**
         * 客户端安装任务ID。
         * @example `2856`
         */
        RecordId: number;
    }[];
}
