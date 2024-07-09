export interface QueryDomainAdminDivisionResponse {
    /**
     * 唯一请求识别码。
     * @example `4EA05A10-D4BC-47EA-AD9E-370A46BB4FB9`
     */
    RequestId: string;
    AdminDivisions: {
        /**
         * 一级行政区划。
         */
        AdminDivision: {
            /**
             * 行政区划名称。
             * @example `河北`
             */
            DivisionName: string;
            Children: {
                /**
                 * 下级行政区划。
                 */
                Children: {
                    /**
                     * 下级行政区划名称。
                     * @example `石家庄`
                     */
                    ChildDivisionName: string;
                }[];
            };
        }[];
    };
}
