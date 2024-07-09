export interface ModifyManagedInstanceResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 托管实例信息组成的集合。
     */
    Instance: {
        /**
         * 托管实例的名称。
         * @example `testInstanceName`
         */
        InstanceName: string;
        /**
         * 托管实例的ID。
         * @example `mi-hz01nmcf****`
         */
        InstanceId: string;
    };
}
