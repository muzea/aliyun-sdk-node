export interface DescribeSmartAccessGatewayVersionsResponse {
    /**
     * 请求ID。
     * @example `765AB188-69BF-47C6-BEDD-B9FC72BFBB0`
     */
    RequestId: string;
    SmartAGVersions: {
        /**
         * 智能接入网关设备软件版本信息列表。
         */
        SmartAGVersion: {
            /**
             * 软件版本类型。取值：
             * - **beta**：测试版本。
             * - **release**：发布版本。
             * @example `release`
             */
            Type: string;
            /**
             * 软件版本发布时间戳。
             * @example `1522744623000`
             */
            CreateTime: number;
            /**
             * 软件版本名称。
             * @example `testpackage1`
             */
            VersionName: string;
            /**
             * 软件版本号。
             * @example `1.0`
             */
            VersionCode: string;
        }[];
    };
}
