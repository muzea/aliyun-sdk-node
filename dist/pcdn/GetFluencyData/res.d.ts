export interface GetFluencyDataResponse {
    /**
     * 业务码，成功返回0。
     * @example `0`
     */
    Code: number;
    /**
     * 请求ID。
     * @example `05870F21-0700-4770-A19C-13CA610884B7`
     */
    RequestId: string;
    Labels: {
        Label: string[];
    };
    DataList: {
        /**
         * 返回的信息列表。
         */
        UsageData: {
            /**
             * 数据的时间片起始时刻。
             * @example `2017-05-06 00:00:00`
             */
            Date: string;
            Values: {
                Values: string[];
            };
        }[];
    };
}
