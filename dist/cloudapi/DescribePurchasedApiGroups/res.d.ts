export interface DescribePurchasedApiGroupsResponse {
    /**
     * 返回指定的页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 本次请求的ID。
     * @example `36BBBAD4-1CFB-489F-841A-8CA52EEA787E`
     */
    RequestId: string;
    /**
     * 每页数目。
     * @example `20`
     */
    PageSize: number;
    /**
     * 数据总条数。
     * @example `2`
     */
    TotalCount: number;
    PurchasedApiGroupAttributes: {
        /**
         * 采购的API分组属性
         */
        PurchasedApiGroupAttribute: {
            /**
             * 分组状态
             * - **NORMAL**：正常
             * - **DELETE**：删除
             * @example `NORMAL`
             */
            Status: string;
            /**
             * 购买时间
             * @example `2021-12-19T00:00:00`
             */
            PurchasedTime: string;
            /**
             * 失效时间
             * @example `2021-12-19T00:00:00`
             */
            ExpireTime: string;
            /**
             * 分组描述
             * @example `1`
             */
            Description: string;
            /**
             * API分组名称
             * @example `group1`
             */
            GroupName: string;
            /**
             * API分组 ID
             * @example `8e91f23f88f94348855b82c9a73209f3`
             */
            GroupId: string;
            /**
             * 最大调用次数
             * @example `10`
             */
            InvokeTimesMax: number;
            /**
             * 当前调用次数
             * @example `10`
             */
            InvokeTimesNow: number;
            /**
             * 计费方式
             * @example `POSTPAID`
             */
            BillingType: string;
            /**
             * 地域ID。
             * @example `cn-shanghai`
             */
            RegionId: string;
        }[];
    };
}
