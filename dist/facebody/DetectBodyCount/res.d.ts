export interface DetectBodyCountResponse {
    /**
     * 请求ID。
     * @example `1C709078-8886-4C91-AEDE-4E04EED0A689`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 人体的个数。
         * @example `6`
         */
        PersonNumber: number;
    };
}
