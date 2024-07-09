export interface ListProgramTypeCountResponse {
    /**
     * 请求的ID，用于定位日志，排查问题。
     * @example `E6F0DBDD-5AD****`
     */
    RequestId: string;
    /**
     * 节点的类型和数量。
     */
    ProgramTypeAndCounts: {
        /**
         * 节点的数量。
         * @example `3`
         */
        Count: number;
        /**
         * 节点的类型。
         * @example `ODPS_SQL`
         */
        ProgramType: string;
    }[];
}
