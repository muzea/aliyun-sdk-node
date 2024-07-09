export interface GetGwpInventorySummaryResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题。
     * @example `83A5A7DD-8974-5769-952E-590A97BEA34E`
     */
    requestId: string;
    /**
     * 返回结果。
     */
    data: {
        /**
         * 排放单位。
         * @example `tCO₂e/Piece(s)`
         */
        unit: string;
        /**
         * 数量。
         * @example `1.0100`
         */
        quantity: number;
        /**
         * 计算结果生成时间，格式为毫秒时间戳。
         * @example `1709108026000`
         */
        resultGenerateTime: number;
        /**
         * 碳足迹贡献占比的Top4类型详情。
         */
        items: {
            /**
             * 清单类型名。
             * @example `电力清单`
             */
            name: string;
            /**
             * 单位。
             * @example `kgCO₂e/Piece(s)`
             */
            unit: string;
            /**
             * 数量。
             * @example `9.9763`
             */
            quantity: number;
            /**
             * 所占百分比。
             * @example `99.01`
             */
            percent: string;
        }[];
    };
}
