export interface ListIncidentTimelinesRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 幂等校验Id
         * @example `FD200FAE-E98F-496E-BFE6-4CE61E59A2E9`
         */
        clientToken: string;
        /**
         * 页
         * @example `1`
         */
        pageNumber: number;
        /**
         * 行
         * @example `10`
         */
        pageSize: number;
    };
}
