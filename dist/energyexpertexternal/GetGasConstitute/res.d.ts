export interface GetGasConstituteResponse {
    /**
     * 请求ID。
     * @example `83A5A7DD-8974-5769-952E-590A97BEA34E
    `
     */
    requestId: string;
    /**
     * 返回数据。
     */
    data: {
        /**
         * 气体类型。
         * @example `1`
         */
        type: number;
        /**
         * 气体名称。
         * @example `CO₂`
         */
        name: string;
        /**
         * 气体排放量。
         * @example `3.14`
         */
        gasEmissionData: number;
        /**
         * 碳排放当量。
         * @example `3.14`
         */
        carbonEmissionData: number;
        /**
         * 碳排占比，示例值：0.5（即占50%）。
         * @example `0.5`
         */
        ratio: number;
    }[];
}
