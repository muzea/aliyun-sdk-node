export interface ListInstancesResponse {
    /**
     * 查询返回的实例信息列表。
     */
    instances: {
        /**
         * 实例ID。
         * @example `1ef6b6ff-7f7b-485e-ab49-501ac681****`
         */
        instanceId: string;
        /**
         * 实例所属的服务版本。如果是LATEST别名下的函数实例，则返回版本号为0。
         * @example `1`
         */
        versionId: string;
    }[];
}
