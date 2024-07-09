export interface DescribeCenPrivateZoneRoutesResponse {
    /**
     * 请求ID。
     * @example `461EC1B5-04A8-4706-8764-8F5BCEF48A6F`
     */
    RequestId: string;
    /**
     * PrivateZone服务的DNS服务器IP地址。
     * @example `100.100.XX.XX/32,100.100.XX.XX/32`
     */
    PrivateZoneDnsServers: string;
    /**
     * 云企业网实例ID。
     * @example `cen-7qthudw0ll6jmc****	`
     */
    CenId: string;
    /**
     * 查询页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时每页显示的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总条目数。
     * @example `2`
     */
    TotalCount: number;
    PrivateZoneInfos: {
        /**
         * PrivateZone服务的详细配置信息。
         */
        PrivateZoneInfo: {
            /**
             * PrivateZone服务的状态。
             * - **Creating**：创建中。
             * - **Active**：可用。
             * - **Deleting**：删除中。
             * @example `Active`
             */
            Status: string;
            /**
             * 访问PrivateZone服务的地域ID。
             * @example `cn-hangzhou`
             */
            AccessRegionId: string;
            /**
             * PrivateZone服务所在的地域ID。
             * @example `cn-hangzhou`
             */
            HostRegionId: string;
            /**
             * PrivateZone服务关联的VPC实例ID。
             * @example `vpc-bp18sth14qii3pnvo****`
             */
            HostVpcId: string;
        }[];
    };
}
