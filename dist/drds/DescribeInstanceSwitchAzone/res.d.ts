export interface DescribeInstanceSwitchAzoneResponse {
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `DSSDF-SEWE-23ERW`
     */
    RequestId: string;
    /**
     * 查询结果列表。
     */
    Result: {
        /**
         * 源可用区ID。
         * @example `cn-hangzhou-a`
         */
        OriginAzoneId: string;
        /**
         * 是否可以切换可用区。
         * @example `true`
         */
        SwitchAble: boolean;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        TargetAzones: {
            TargetAzone: string[];
        };
    };
}
