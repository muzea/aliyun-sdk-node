export interface GetAreaElecConstituteRequest {
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 企业code。
         * @example `Z-20240115-2`
         */
        code: string;
        /**
         * 年份。
         * @example `2024`
         */
        year: number;
    };
}
