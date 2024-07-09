export interface DescribeLicenseResponse {
    /**
     * 请求 ID
     * @example `6EF60BEC-0242-43AF-BB20-270359FB54A7`
     */
    RequestId: string;
    /**
     * 激活码对象
     */
    License: {
        /**
         * 激活时间
         * @example `2019-05-25 09:00:00`
         */
        ActivateTime: string;
        /**
         * 激活码状态
         * - ACTIVATED
         * - INACTIVATED
         * - DISCARD
         * - EXPIRED
         * @example `ACTIVATED`
         */
        LicenseStatus: string;
        /**
         * 商品名称
         * @example `LNMP环境`
         */
        ProductName: string;
        /**
         * 过期时间
         * @example `2019-06-25 09:00:00`
         */
        ExpiredTime: string;
        /**
         * 商品规格ID
         * @example `cmgj02****-prepay`
         */
        ProductSkuId: string;
        /**
         * 创建时间
         * @example `2019-05-25 09:00:00`
         */
        CreateTime: string;
        /**
         * 激活码
         * @example `-`
         */
        LicenseCode: string;
        /**
         * 业务实例ID
         * @example `1551111111`
         */
        InstanceId: string;
        /**
         * 供应商名称
         * @example `**科技股份有限公司`
         */
        SupplierName: string;
        /**
         * 商品Code
         * @example `cmgj02****`
         */
        ProductCode: string;
        ExtendArray: {
            /**
             * 扩展对象数组
             */
            LicenseAttribute: {
                /**
                 * 对象code
                 * @example `-`
                 */
                Code: string;
                /**
                 * 对象值
                 * @example `-`
                 */
                Value: string;
            }[];
        };
        /**
         * 扩展属性
         */
        ExtendInfo: {
            /**
             * 阿里云UID
             * @example `190311111111****`
             */
            AliUid: number;
            /**
             * 账号信息
             * @example `-`
             */
            AccountQuantity: number;
            /**
             * 邮箱
             * @example `id***@**.com`
             */
            Email: string;
            /**
             * 电话
             * @example `129****1111`
             */
            Mobile: string;
        };
    };
}
