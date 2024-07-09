export interface GetGwpBenchmarkListResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题。
     * @example `A8AEC6D9-A359-5169-BD1A-BD848BA60D65`
     */
    requestId: string;
    /**
     * 返回数据。
     */
    data: {
        /**
         * 排放单位。默认为kgCO₂e/productUnit，productUnit为产品选择的单位。随着排放数量quantity的大小不同，unit会自适应转变为tCO₂e/productUnit或者gCO₂e/productUnit，具体转换规则见quantity栏的备注。
         * @example `kgCO₂e/kg`
         */
        unit: string;
        /**
         * 主动减碳排行列表。
         */
        items: {
            /**
             * 清单名称。
             * @example `PVC废料回收`
             */
            name: string;
            /**
             * 清单排放量。保留四位小数。单位为上层unit。
             * @example `-0.2061`
             */
            carbonEmission: number;
            /**
             * 暂未使用。
             * @example `暂为null`
             */
            percent: string;
            /**
             * 基准线名称。
             * @example `PVC废料焚烧`
             */
            benchmarkName: string;
            /**
             * 清单所关联的基准线排放量。保留四位小数。单位为上层unit。
             * @example `0.0108`
             */
            benchmarkEmission: number;
            /**
             * 主动减排量=基准线排放量-清单排放量。一般地，基准线排放量大于清单排放量。保留四位小数。 单位为上层unit。
             * @example `0.2169`
             */
            activeReduction: number;
        }[];
    };
}
