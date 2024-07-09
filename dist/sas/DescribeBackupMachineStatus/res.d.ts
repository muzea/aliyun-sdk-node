export interface DescribeBackupMachineStatusResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `09969D2C-4FAD-429E-BFBF-9A60DEF8****`
     */
    RequestId: string;
    /**
     * 服务器备份状态。
     */
    BackupMachineStatus: {
        /**
         * 防勒索客户端状态。取值：
         * - **NOT_INSTALLED**：未安装
         * - **CLIENT\_CONNECTION\_ERROR**：客户端状态异常
         * - **ACTIVATED**：正常
         * @example `ACTIVATED`
         */
        Status: string;
        /**
         * 服务器UUID。
         * @example `eb2c782e-64f2-4590-a86c-d90164df****`
         */
        Uuid: string;
        /**
         * 备份数据存入的仓库的ID。
         * @example `v-0005i2qh5fcr6seo****`
         */
        VaultId: string;
        /**
         * 异常状态返回的错误码。
         * @example `CLIENT_CONNECTION_ERROR`
         */
        ErrorCode: string;
        /**
         * 可恢复版本数。
         * @example `7`
         */
        SavedBackupCount: number;
        /**
         * 服务器实例的ID。
         * @example `i-2zeaqkb80vloxjcj****`
         */
        InstanceId: string;
        /**
         * 服务状态。取值：
         * - **ONLINE**：状态正常
         * - **CLIENT\_CONNECTION\_ERROR**：客户端连接异常
         * - **UNINSTALLING**：卸载中
         * - **UNINSTALL\_FAILED**：卸载失败
         * - **UPGRADING**：升级中
         * - **UPGRADE\_FAILED**：升级失败
         * @example `ONLINE`
         */
        ClientStatus: string;
        /**
         * 服务器所在的地域的ID。
         * @example `cn-shenzhen`
         */
        RegionId: string;
        /**
         * 防勒索客户端版本号。
         * @example `2.11.0`
         */
        ClientVersion: string;
        /**
         * 防勒索客户端ID。
         * @example `c-000dbefaw9f7gnbw****`
         */
        ClientId: string;
        /**
         * 备份服务器上报的错误信息列表。
         */
        ErrorList: {
            /**
             * 错误码。
             * @example `TARGET_NOT_EXIST`
             */
            ErrorCode: string;
            /**
             * 错误状态信息。
             * @example `FAILED`
             */
            ErrorStatus: string;
        }[];
        /**
         * 服务状态。取值：
         * - **SERVICE_EXCEPTION**：服务异常
         * - **RESTORING**：恢复中
         * - **BACKING_UP**：备份中
         * @example `RESTORING`
         */
        ServiceStatus: string;
    };
}
