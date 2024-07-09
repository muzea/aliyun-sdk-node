export interface GetAllIspResponse {
    /**
     * 业务码，成功返回0。
     * @example `0`
     */
    Code: number;
    /**
     * 请求ID。
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
             * @example `长宽`
             */
            NameCn: string;
            /**
             * 资源ID。
             * @example `tp4xpa`
             */
            ResourceId: string;
            /**
             * 英文名称。
             * @example `greatwall`
             */
            NameEn: string;
        }[];
    };
}
