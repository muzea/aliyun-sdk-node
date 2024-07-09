export interface GetInventoryListResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题。
     * @example `83A5A7DD-8974-5769-952E-590A97BEA34E`
     */
    requestId: string;
    /**
     * 返回数据。
     */
    data: {
        /**
         * 排放单位：默认为kgCO₂e/productUnit，productUnit为产品选择的单位。随着排放数量quantity的大小不同，unit会自适应转变为tCO₂e/productUnit或者gCO₂e/productUnit，具体转换规则见quantity栏。
         * @example `kgCO₂e/kg`
         */
        unit: string;
        /**
         * 产品的单位。
         * @example `kg`
         */
        productUnit: string;
        /**
         * 排放列表详情。
         */
        items: {
            /**
             * 名称
             * > 与请求参数group有关。请求参数为：resource，返回name参数含义为：清单名称；请求参数为：process，返回name参数含义为：工序名称；请求参数为：resourceType，返回name参数含义为：清单类型名称；请求参数为：processType，返回name参数含义为：环节名称。
             * @example `电力`
             */
            name: string;
            /**
             * 排放数量：可能为正数、负数、0。为保证计算精度，计算过程保留24位小数，为方便显示和使用，建议根据业务需要进行截取。
             * @example `1000.000000000000000000000000000000`
             */
            carbonEmission: number;
            /**
             * 百分比。
             * @example `99.01`
             */
            percent: string;
            /**
             * 工序名称：仅对于请求参数group为resource时候有意义，其他时候无意义。
             * @example `Process-1`
             */
            processName: string;
        }[];
    };
}
