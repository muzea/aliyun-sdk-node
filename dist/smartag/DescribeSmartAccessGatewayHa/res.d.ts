export interface DescribeSmartAccessGatewayHaResponse {
    /**
     * 设备级别备份状态。取值：
     * - **ON**：开启。
     * - **OFF**：关闭。
     * @example `OFF`
     */
    DeviceLevelBackupState: string;
    /**
     * 请求ID。
     * @example `582FE511-FEFE-42BC-BBF4-4F8ECF92Exxx`
     */
    RequestId: string;
    /**
     * 备用设备序列号。
     * @example `sag11axxxx`
     */
    BackupDeviceId: string;
    LinkBackupInfoList: {
        /**
         * 链路备份信息。
         */
        LinkBackupInfoList: {
            /**
             * 主连接ID。
             * @example `lte`
             */
            MainLinkId: string;
            /**
             * 备份链路状态。取值：
             * - **up**：链路可用。
             * - **down**：链路不可用。
             * @example `down`
             */
            BackupLinkState: string;
            /**
             * 链路级备份状态。取值：
             * - **ON**：开启。
             * - **OFF**：关闭。
             * @example `ON`
             */
            LinkLevelBackupState: string;
            /**
             * 备份链路ID。
             * @example `wan1`
             */
            BackupLinkId: string;
            /**
             * 主链路状态。取值：
             * - **up**：可用。
             * - **down**：不可用。
             * @example `up`
             */
            MainLinkState: string;
            /**
             * 链路级备份类型。取值：
             * - **DedicatedLineBackupMode**：专线备份模式。
             * - **StandbyMode**：双WAN口主备模式。
             * - **Off**：无备份。
             * @example `StandbyMode`
             */
            LinkLevelBackupType: string;
        }[];
    };
    /**
     * 智能接入网关实例ID。
     * @example `sag-i8mogwi9kisigc3xxxx`
     */
    SmartAGId: string;
    /**
     * 设备级别高可用类型。取值：
     * - **warm_backup**：双机热备。
     * - **cold_backup**：双机冷备。
     * - **no_backup**：无备份。
     * @example `cold_backup`
     */
    DeviceLevelBackupType: string;
    /**
     * 主设备序列号。
     * @example `sag11axxxx`
     */
    MainDeviceId: string;
}
