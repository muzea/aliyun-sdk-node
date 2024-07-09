export interface DescribeCenVbrHealthCheckResponse {
    /**
     * 分页查询时每页显示的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `B8C9702E-304A-4E18-AC89-BE2D91C2C176`
     */
    RequestId: string;
    /**
     * 查询页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总条目数。
     * @example `1`
     */
    TotalCount: number;
    VbrHealthChecks: {
        /**
         * VBR实例的健康检查配置信息。
         */
        VbrHealthCheck: {
            /**
             * 健康检查的目标IP地址。
             * @example `192.XX.XX.1`
             */
            HealthCheckTargetIp: string;
            /**
             * VBR实例ID。
             * @example `vbr-bp1kznorjeembsuhl****`
             */
            VbrInstanceId: string;
            /**
             * VBR实例所在的地域ID。
             * @example `cn-hangzhou`
             */
            VbrInstanceRegionId: string;
            /**
             * 云企业网实例ID。
             * @example `cen-6hpdgj7ni6pz1k****`
             */
            CenId: string;
            /**
             * 健康检查发送探测报文的个数。
             * @example `8`
             */
            HealthyThreshold: number;
            /**
             * 健康检查发送连续探测报文的时间间隔。单位：秒。
             * @example `2`
             */
            HealthCheckInterval: number;
            /**
             * 健康检查的源IP地址。
             * @example `172.XX.XX.1`
             */
            HealthCheckSourceIp: string;
            /**
             * 是否只开启了健康检查的检测功能。
             * - **true**：是。
             *         若只开启健康检查的检测功能，健康检查检测到链路不通时不会触发路由切换。
             * - **false**：否。
             *         若未开启本功能，健康检查检测到链路不通时，如果云企业网实例中存在冗余的路由，健康检查会立刻触发路由切换使用可用链路。
             * @example `false`
             */
            HealthCheckOnly: boolean;
            /**
             * 描述信息。
             * @example `healthcheck_description`
             */
            Description: string;
        }[];
    };
}
