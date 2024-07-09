export interface ListClientAlertModeResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `A4EB8B1C-1DEC-5E18-BCD0-D1BBB3936FA7`
     */
    RequestId: string;
    /**
     * 请求接口返回的数据
     */
    Data: {
        /**
         * 资产UUID列表。
         */
        Uuids: string[];
        /**
         * 返回数据总数。
         * @example `5`
         */
        Count: number;
    };
}
