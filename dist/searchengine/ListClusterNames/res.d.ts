export interface ListClusterNamesResponse {
    /**
     * id of request
     * @example `F6E3D968-529C-5C40-AFDD-133A8B8FD930`
     */
    requestId: string;
    /**
     * 结果集
     */
    result: {
        /**
         * 集群名称
         * @example `hz_pre_vpc_domain_1`
         */
        name: string;
        /**
         * 集群描述
         * @example `自定义描述`
         */
        description: string;
        /**
         * 集群id
         * @example `25030`
         */
        id: number;
    };
}
