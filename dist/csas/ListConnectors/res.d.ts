export interface ListConnectorsResponse {
    /**
     * 本次请求的ID。
     * @example `58D6B23E-E5DA-5418-8F61-51A3B5A30049`
     */
    RequestId: string;
    /**
     * Connector总数。
     * @example `1`
     */
    TotalNum: number;
    /**
     * Connector列表。
     */
    Connectors: {
        /**
         * ConnectorID。
         * @example `connector-94db94e06b98****`
         */
        ConnectorId: string;
        /**
         * Connector名称。
         * @example `connector_name`
         */
        Name: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * Connector实例状态。取值：
         * - **Enabled**：开启。
         * - **Disabled**：关闭。
         * @example `Enabled`
         */
        SwitchStatus: string;
        /**
         * Connector连接状态。取值：
         * - **Online**：在线。
         * - **Offline**：离线。
         * @example `Online`
         */
        Status: string;
        /**
         * 关联的内网访问应用集合。
         */
        Applications: {
            /**
             * 内网访问应用ID。
             * @example `pa-application-e12860ef6c48****
            `
             */
            ApplicationId: string;
            /**
             * 内网访问应用名称。
             * @example `application_name`
             */
            ApplicationName: string;
        }[];
        /**
         * Connector升级时间。
         */
        UpgradeTime: {
            /**
             * 开始时间。
             * @example `20:00`
             */
            Start: string;
            /**
             * 结束时间。
             * @example `23:00`
             */
            End: string;
        };
        /**
         * 部署的ConnectorClient集合。
         */
        ConnectorClients: {
            /**
             * ConnectorClient的设备唯一标识。
             * @example `C50A2386-F851-4F11-920B-DF7148DA0C22`
             */
            DevTag: string;
            /**
             * ConnectorClient主机名。
             * @example `connector_client`
             */
            Hostname: string;
            /**
             * ConnectorClient和ConnectorServer的连接状态。
             * @example `Disconnected`
             */
            ConnectionStatus: string;
            /**
             * ConnectorClient公网IP。
             * @example `192.0.2.1`
             */
            PublicIp: string;
        }[];
        /**
         * Connector创建时间。
         * @example `2022-09-27 18:10:25`
         */
        CreateTime: string;
    }[];
}
