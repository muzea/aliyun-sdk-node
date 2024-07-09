export interface GetCarbonEmissionTrendResponse {
    /**
     * Id of the request
     * @example `9bc20a5a-b26b-4c28-922a-7cd10b61f96f`
     */
    requestId: string;
    /**
     * 返回数据
     */
    data: {
        /**
         * 目标排放列表
         */
        targetEmissionList: {
            /**
             * 年份。
             * @example `2024`
             */
            year: string;
            /**
             * 数据项列表
             */
            items: {
                /**
                 * 年份。
                 * @example `2024`
                 */
                year: string;
                /**
                 * 月份。
                 * @example `10`
                 */
                month: number;
                /**
                 * 碳排放量
                 * @example `20.22`
                 */
                carbonEmissionData: number;
            }[];
        }[];
        /**
         * 实际排放列表
         */
        actualEmissionList: {
            /**
             * 年份。
             * @example `2024`
             */
            year: string;
            /**
             * 数据项列表
             */
            items: {
                /**
                 * 年份。
                 * @example `2024`
                 */
                year: string;
                /**
                 * 月份。
                 * @example `11`
                 */
                month: number;
                /**
                 * 碳排放量
                 * @example `20.22`
                 */
                carbonEmissionData: number;
            }[];
        }[];
    };
}
