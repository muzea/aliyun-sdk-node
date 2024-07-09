export interface DescribeZonesResponse {
    /**
     * 请求ID。
     * @example `1D42F072-72FE-4DC4-BB8E-64B1D298****`
     */
    RequestId: string;
    Zones: {
        /**
         * 可用区的集合。
         */
        KVStoreZone: {
            /**
             * 是否属于RDS管控，Redis实例中该参数的返回值固定为**true**。
             * @example `true`
             */
            IsRds: boolean;
            /**
             * 该地域下的某可用区的ID。
             * @example `cn-huhehaote-b`
             */
            ZoneId: string;
            /**
             * 当前可用区是否可创建Redis实例，返回值：
             * * **true**：不支持。
             * * **false**：支持。
             * @example `true`
             */
            Disabled: boolean;
            /**
             * 是否支持将Redis实例从经典网络切换为专有网络，返回值：
             * * **true**：支持。
             * * **false**：不支持。
             * @example `true`
             */
            SwitchNetwork: boolean;
            /**
             * 该地域下的某可用区的名称。
             * @example `呼和浩特 可用区B`
             */
            ZoneName: string;
            /**
             * 该地域的ID。
             * @example `cn-huhehaote`
             */
            RegionId: string;
        }[];
    };
}
