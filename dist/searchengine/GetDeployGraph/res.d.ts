export interface GetDeployGraphResponse {
    /**
     * Id of the request
     * @example `E7B7D598-B080-5C8E-AA35-D43EC0D5F886`
     */
    requestId: string;
    /**
     * 返回结果。
     * @example `{}`
     */
    result: {
        /**
         * 部署信息
         */
        graph: {
            /**
             * 在线集群元信息
             */
            onlineMaster: {
                /**
                 * 机房id
                 * @example `1`
                 */
                id: number;
                /**
                 * 在线集群名称
                 * @example `
                ha-cn-pl32rf0****_hz_pre_vpc_domain_1`
                 */
                name: string;
                /**
                 * 机房
                 * @example `hz_pre_vpc_domain_1`
                 */
                domainName: string;
                /**
                 * 资源id
                 * @example `5377`
                 */
                hippoId: string;
            }[];
            /**
             * zone元信息列表
             */
            zoneMetas: {
                /**
                 * 节点名称
                 * @example `ha-cn-pl32rf0****_qrs`
                 */
                name: string;
                /**
                 * 标签
                 * @example `
                ha-cn-pl32rf0****_qrs_hz_pre_vpc_domain_1`
                 */
                tag: string;
                /**
                 * suez admin名称
                 * @example `
                ha-cn-pl32rf0****_hz_pre_vpc_domain_1`
                 */
                suezAdminName: string;
                /**
                 * 类型
                 * @example `qrs`
                 */
                type: string;
                /**
                 * 机房
                 * @example `hz_pre_vpc_domain_1`
                 */
                domainInfo: string;
            }[];
            /**
             * 数据源元信息
             */
            tableMetas: {
                /**
                 * 表部署id
                 * @example `2177`
                 */
                tableDeployId: number;
                /**
                 * 数据源名称
                 * @example `ha-cn-pl32rf0****_test_api`
                 */
                name: string;
                /**
                 * 标签
                 * @example `ha-cn-pl32rf0****_test_api_hz_pre_vpc_domain_1`
                 */
                tag: string;
                /**
                 * 机房
                 * @example `hz_pre_vpc_domain_1`
                 */
                domainName: string;
                /**
                 * 离线部署id
                 * @example `1`
                 */
                buildDeployId: number;
                /**
                 * 数据源类型
                 * @example `odps`
                 */
                type: string;
            }[];
            /**
             * 索引元信息列表
             */
            indexMetas: {
                /**
                 * 索引名称
                 * @example `test_api`
                 */
                name: string;
                /**
                 * 标签
                 * @example `test_api_hz_pre_vpc_domain_1`
                 */
                tag: string;
                /**
                 * 机房
                 * @example `hz_pre_vpc_domain_1`
                 */
                domainName: string;
                /**
                 * 表部署id
                 * @example `2409`
                 */
                tableDeployId: number;
                /**
                 * 数据源名称
                 * @example `ha-cn-pl32rf0****_test_api`
                 */
                tableName: string;
                /**
                 * 节点名称
                 * @example `ha-cn-pl32rf0****_qrs`
                 */
                zoneName: string;
            }[];
            /**
             * zone和索引关联关系列表
             */
            zoneIndexRelation: any;
            /**
             * 数据源和索引关联关系列表
             */
            tableIndexRelation: any;
        };
    };
}
