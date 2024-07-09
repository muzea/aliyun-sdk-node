export interface DescribeBackupClientsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `E3ED094C-9EB7-4239-962B-D0FB3D5F23C7`
     */
    RequestId: string;
    /**
     * 防勒索客户端信息。
     */
    Clients: {
        /**
         * 已安装防勒索客户端的ECS服务器的UUID。
         * @example `22f6550d-f294-449b-b6e6-90638fd1****`
         */
        Uuid: string;
        /**
         * 已安装防勒索客户端的ECS服务器的实例ID。
         * @example `i-bp15hyph4aci99dv****`
         */
        InstanceId: string;
        /**
         * 防勒索客户端的状态。
         * 取值：
         * - **INSTALLING**：客户端安装中
         * - **ONLINE**：正常在线
         * - **UNINSTALLING**：客户端卸载中
         * - **NOT_INSTALLED**：客户端未安装
         * - **ACTIVATED**：客户端已启用
         * - **CLIENT_CONNECTION_ERROR**：客户端连接错误
         * @example `ONLINE`
         */
        ClientStatus: string;
        /**
         * 防勒索客户端ID。
         * @example `c-000az2f537r73dyh****`
         */
        ClientId: string;
        /**
         * 防勒索客户端版本号。
         * @example `2.0.0`
         */
        ClientVersion: string;
    }[];
}
