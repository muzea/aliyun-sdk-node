export interface DescribeZonesResponse {
    /**
     * 请求 ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 可用区列表信息。
     */
    Zones: {
        /**
         * 可用区 ID 列表。
         * 对于多可用区集群，其可用区名称以逗号连接。
         * @example `cn-hangzhou-i,cn-hangzhou-j,cn-hangzhou-h`
         */
        ZoneId: string;
        /**
         * 可用区名称。
         * @example `H/I/J`
         */
        ZoneName: string;
        /**
         * OceanBase 集群系列。
         * NORMAL（默认）：高可用版本。
         * @example `NORMAL`
         */
        Series: string;
        /**
         * 部署模式。
         * @example `1-1-1`
         */
        DeployType: string;
    }[];
}
