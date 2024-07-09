export interface QueryResourcePackageInstancesResponse {
    /**
     * 请求ID。
     * @example `6000EE23-274B-4E07-A697-FF2E999520A4`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Successful!`
     */
    Message: string;
    /**
     * 每页条数。
     * @example `20`
     */
    PageSize: number;
    /**
     * 总记录数。
     * @example `12`
     */
    Total: number;
    /**
     * 页码。
     * @example `1`
     */
    Page: number;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 页码。
         * @example `1`
         */
        PageNum: string;
        /**
         * 每页条数。
         * @example `20`
         */
        PageSize: string;
        /**
         * 总记录数。
         * @example `12`
         */
        TotalCount: string;
        /**
         * 主机ID。
         * @example `cn`
         */
        HostId: string;
        Instances: {
            /**
             * 实例详情数组。
             */
            Instance: {
                /**
                 * 失效时间。
                 * @example `2019-03-12T16:00:00Z`
                 */
                ExpiryTime: string;
                /**
                 * 资源包状态，取值：
                 * - Available（有效）。
                 * - Expired（失效）。
                 * @example `Available`
                 */
                Status: string;
                /**
                 * 资源包商品的备注说明，只提供中文说明
                 * @example `标准存储包(华东2)`
                 */
                Remark: string;
                /**
                 * 剩余量单位。
                 * @example `GB`
                 */
                RemainingAmountUnit: string;
                /**
                 * 实例ID。
                 * @example `OSSBAG-cn-v0h1s4hma01`
                 */
                InstanceId: string;
                /**
                 * 资源包类型。
                 * @example `FPT_ossbag_absolute_Storage_sh`
                 */
                PackageType: string;
                /**
                 * 生效时间。
                 * @example `2018-09-12T09:51:56Z`
                 */
                EffectiveTime: string;
                /**
                 * 地域。
                 * @example `cn-hangzhou`
                 */
                Region: string;
                /**
                 * 总量。
                 * @example `40.000`
                 */
                TotalAmount: string;
                /**
                 * 扣费类型：Absolute。
                 * @example `Absolute`
                 */
                DeductType: string;
                /**
                 * 总量单位。
                 * @example `GB`
                 */
                TotalAmountUnit: string;
                /**
                 * 剩余量。
                 * @example `40.000`
                 */
                RemainingAmount: string;
                ApplicableProducts: {
                    /**
                     * 适用产品列表。
                     */
                    Product: string[];
                };
                /**
                 * 商品code
                 * @example `rds`
                 */
                CommodityCode: string;
            }[];
        };
    };
}
