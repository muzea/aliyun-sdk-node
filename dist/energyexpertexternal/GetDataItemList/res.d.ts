export interface GetDataItemListResponse {
    /**
     * 请求ID。
     * @example `83A5A7DD-8974-5769-952E-590A97BEA34E`
     */
    requestId: string;
    /**
     * 返回数据
     */
    data: {
        /**
         * 单位
         * @example `kg`
         */
        unit: string;
        /**
         * 数据填报方式，
         * 1：月度值 2：年度值。
         * @example `1`
         */
        period: number;
        /**
         * API数据标识。
         * @example `demo_api_code`
         */
        code: string;
        /**
         * 数据项名称。
         * @example `锅炉数据`
         */
        name: string;
    }[];
}
