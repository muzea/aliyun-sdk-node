export interface ListIdpDepartmentsResponse {
    /**
     * 本次请求的ID。
     * @example `102350E7-1A20-58F5-9D63-ABEA820AE6E1`
     */
    RequestId: string;
    /**
     * 部门信息。
     */
    Data: {
        /**
         * 记录总数。
         * @example `2`
         */
        TotalNum: number;
        /**
         * 部门信息列表。
         */
        DataList: {
            /**
             * 部门ID。
             * @example `30520`
             */
            Id: string;
            /**
             * 部门名称。
             * @example `示例部门`
             */
            Name: string;
            /**
             * 自定义身份源配置ID。
             * @example `1440`
             */
            IdpConfigId: string;
        }[];
    };
}
