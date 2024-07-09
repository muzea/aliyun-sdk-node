export interface DescribeBackMenuResponse {
    /**
     * 请求结果。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `60C21BE4-EDFE-454C-95ED-3A5C74******`
     */
    RequestId: string;
    List: {
        /**
         * 备份信息列表。
         */
        list: {
            /**
             * 是否支持备份恢复。
             * @example `true`
             */
            Support: boolean;
            /**
             * 备份方式，取值范围如下：
             * * **logic**：逻辑备份
             * * **phy**：物理备份
             * @example `phy`
             */
            MenuName: string;
        }[];
    };
}
