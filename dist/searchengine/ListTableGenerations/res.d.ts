export interface ListTableGenerationsResponse {
    /**
     * requestId
     * @example `F6E3D968-529C-5C40-AFDD-133A8B8FD930`
     */
    requestId: string;
    /**
     * List
     */
    result: {
        /**
         * 索引全量版本
         * @example `1708674867`
         */
        generationId: number;
    }[];
}
