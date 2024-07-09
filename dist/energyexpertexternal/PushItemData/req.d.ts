export interface PushItemDataRequest {
    /**
     * 请求体参数
     */
    "body"?: {
        /**
         * 企业编码
         * @example `C-20210223-01`
         */
        code: string;
        /**
         * 年份。
         * @example `2024`
         */
        year: string;
        /**
         * 推送数据列表。
         */
        items: {
            /**
             * API数据标识。字段获取详见<props="china">[GetDataItemList](https://help.aliyun.com/zh/energy-expert/developer-reference/api-energyexpertexternal-2022-09-23-getdataitemlist)。</props>
             * <props="intl">[GetDataItemList](https://www.alibabacloud.com/help/zh/energy-expert/developer-reference/api-energyexpertexternal-2022-09-23-getdataitemlist)。</props>
             * @example `demo_api_code`
             */
            code: string;
            /**
             * 月份。
             * @example `1`
             */
            month: string;
            /**
             * 数据项数据数值。
             * @example `1.11`
             */
            value: number;
        };
    };
}
