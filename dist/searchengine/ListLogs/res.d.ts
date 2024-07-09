export interface ListLogsResponse {
    /**
     * id of request
     * @example `022F36C7-9FB4-5D67-BEBC-3D14B0984463`
     */
    requestId: string;
    /**
     * ListResult
     */
    result: {
        /**
         * 结果
         */
        result: any[];
        /**
         * 总记录数。
         * @example `5`
         */
        totalCount: number;
    };
}
