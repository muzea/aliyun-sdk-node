export interface GetGwpInventoryConstituteResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题。
     * @example `06DA2909-7736-5738-AA31-ACD617D828F1`
     */
    requestId: string;
    /**
     * 返回数据。
     */
    data: {
        /**
         * 当前层级结构含义。
         * @example `总碳排放量`
         */
        name: string;
        /**
         * 排放单位。
         * @example `kgCO₂e/t`
         */
        unit: string;
        /**
         * 排放数量：可能为正数、负数、0。为保证计算精度，计算过程保留24位小数，为方便显示和使用，建议根据业务需要进行截取。
         * @example `1009.976265540000000000000000000000`
         */
        carbonEmission: number;
        /**
         * 按类型聚合，各种类型的排放详情
         */
        byResourceType: any[];
        /**
         * 按层级从高到低的结构组织，按照环节->工序->清单层级。
         */
        items: any[];
    };
}
