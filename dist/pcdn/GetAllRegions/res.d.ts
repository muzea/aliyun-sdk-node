export interface GetAllRegionsResponse {
    /**
     * 业务码，成功返回0。
     * @example `0`
     */
    Code: number;
    /**
     * 资源ID。
     * @example `FB3AA371-2230-4FF8-8E94-952EBF2CF30C`
     */
    RequestId: string;
    DataList: {
        /**
         * 返回的数据。
         */
        UsageData: {
            /**
             * 中文名称。
             * @example `北京`
             */
            Name: string;
            /**
             * 地区编号。
             * @example `11`
             */
            Code: string;
        }[];
    };
}
