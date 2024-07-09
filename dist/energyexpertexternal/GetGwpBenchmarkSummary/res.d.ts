export interface GetGwpBenchmarkSummaryResponse {
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
         * 减碳量贡献top4详情。
         */
        items: {
            /**
             * 减碳详情的名称。
             * @example `原材料`
             */
            name: string;
            /**
             * 排放百分比。字符串类型，数字保留两位小数。例如 "99.01"表示该类排放占总排放的99.01%，需要注意返回的字符串中本身不含百分号。
             * @example `99.01`
             */
            percent: string;
            /**
             * 排放数量。数值保留四位小数，一般地，建模下该值不会出现负数，但是用户可以构造出主动减碳量为负数的值。quantity和unit共同构成排放量，quantity和unit会自适应。当排放量大于1000kgCO₂e/productUnit时，那么quantity和unit会转换为以tCO₂e/productUnit单位的数值；当排放量小于1kgCO₂e/productUnit时，那么quantity和unit会转换为以gCO₂e/productUnit单位的数值；其他情况下，quantity保持unit为kgCO₂e/productUnit的数值。
             * @example `9.9763`
             */
            quantity: number;
            /**
             * 排放单位。默认为kgCO₂e/productUnit，productUnit为产品选择的单位。随着排放数量quantity的大小不同，unit会自适应转变为tCO₂e/productUnit或者gCO₂e/productUnit，具体转换规则见quantity栏的备注。
             * @example `kgCO₂e/kg`
             */
            unit: string;
        }[];
        /**
         * 排放数量。数值保留四位小数，一般地，建模下该值不会出现负数，但是用户可以构造出主动减碳量为负数的值。quantity和unit共同构成排放量，quantity和unit会自适应。当排放量大于1000kgCO₂e/productUnit时，那么quantity和unit会转换为以tCO₂e/productUnit单位的数值；当排放量小于1kgCO₂e/productUnit时，那么quantity和unit会转换为以gCO₂e/productUnit单位的数值；其他情况下，quantity保持unit为kgCO₂e/productUnit的数值。
         * @example `1000.0000`
         */
        quantity: number;
        /**
         * 排放单位。默认为kgCO₂e/productUnit，productUnit为产品选择的单位。随着排放数量quantity的大小不同，unit会自适应转变为tCO₂e/productUnit或者gCO₂e/productUnit，具体转换规则见quantity栏的备注。
         * @example `kgCO₂e/t`
         */
        unit: string;
    };
}
