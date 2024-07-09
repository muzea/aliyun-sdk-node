export interface GetClusterRunTimeInfoResponse {
    /**
     * 请求id。
     * @example `E45380E8-994A-5402-9806-F114B3295FCF`
     */
    requestId: string;
    /**
     * 结果集
     */
    result: {
        /**
         * 集群名称
         * @example `vpc_hz_domain_1`
         */
        clusterName: string;
        /**
         * 查询结点信息
         */
        queryNode: {
            /**
             * 服务状态
             */
            serviceStatus: {
                /**
                 * 集群名称
                 * @example `vpc_hz_domain_1
                `
                 */
                name: string;
                /**
                 * 总大小
                 * @example `100`
                 */
                totalSize: number;
                /**
                 * 完成大小
                 * @example `100`
                 */
                doneSize: number;
                /**
                 * 进度
                 * @example `100`
                 */
                donePercent: number;
            };
            /**
             * 配置状态列表。
             */
            configStatusList: {
                /**
                 * 集群更新时间
                 * @example `2024-05-21 16:05:26`
                 */
                configUpdateTime: string;
                /**
                 * 集群名称
                 * @example `vpc_hz_domain_1
                `
                 */
                name: string;
                /**
                 * 总大小
                 * @example `6`
                 */
                totalSize: number;
                /**
                 * 完成大小
                 * @example `100`
                 */
                doneSize: number;
                /**
                 * 进度
                 * @example `100`
                 */
                donePercent: number;
            }[];
        };
        /**
         * 数据结点信息
         */
        dataNodes: {
            /**
             * 节点数据列表。
             */
            dataStatusList: {
                /**
                 * 存储容量 (单位:GB)
                 * @example `2`
                 */
                docSize: number;
                /**
                 * 全量版本
                 * @example `1718846192`
                 */
                fullVersion: number;
                /**
                 * 增量版本
                 * @example `1718846192`
                 */
                incVersion: number;
                /**
                 * 增量更新时间
                 * @example `2024-05-21 16:05:26`
                 */
                incUpdateTime: string;
                /**
                 * 全量更新时间
                 * @example `2024-05-21 16:05:26`
                 */
                fullUpdateTime: string;
                /**
                 * 索引配置
                 */
                indexConfigInfo: {
                    /**
                     * 索引配置名称
                     * @example `index_meta_name`
                     */
                    configMetaName: string;
                    /**
                     * 索引模板的版本。
                     * @example `1.0.0`
                     */
                    version: number;
                };
                /**
                 * 高级配置信息
                 */
                advanceConfigInfo: {
                    /**
                     * 索引配置名称
                     * @example `index_meta_name`
                     */
                    configMetaName: string;
                    /**
                     * 版本号。
                     * @example `1.0`
                     */
                    version: number;
                };
                /**
                 * 因缺少内存而失败的worker的name
                 */
                lackMemWorker: string[];
                /**
                 * 因部署失败而失败的worker的name
                 */
                deployFailedWorker: string[];
                /**
                 * 因缺少磁盘而失败的worker的name
                 */
                lackDiskWorker: string[];
                /**
                 * 错误信息。
                 * @example `0A3B1C48006A6C0905F6375F4821EB50`
                 */
                errorMsg: string;
                /**
                 * 索引长度
                 * @example `100`
                 */
                indexSize: number;
                /**
                 * 节点名称
                 * @example `ha-cn-pl32rf0****_qrs`
                 */
                name: string;
                /**
                 * 总大小
                 * @example `1`
                 */
                totalSize: number;
                /**
                 * 完成大小
                 * @example `100`
                 */
                doneSize: number;
                /**
                 * 总共完成的进度
                 * @example `100`
                 */
                donePercent: number;
            }[];
            /**
             * 服务状态。
             */
            serviceStatus: {
                /**
                 * 名称
                 * @example `ha-cn-pl32rf0****_qrs`
                 */
                name: string;
                /**
                 * 集群总节点数
                 * @example `100`
                 */
                totalSize: number;
                /**
                 * 集群处理中的节点数。
                 * @example `100`
                 */
                doneSize: number;
                /**
                 * 总共完成进度
                 * @example `100`
                 */
                donePercent: number;
            };
            /**
             * 配置状态列表
             */
            configStatusList: {
                /**
                 * 集群更新时间
                 * @example `2024-05-21 16:05:26`
                 */
                configUpdateTime: string;
                /**
                 * 集群名称
                 * @example `test_0704`
                 */
                name: string;
                /**
                 * 总大小
                 * @example `0`
                 */
                totalSize: number;
                /**
                 * 完成大小
                 * @example `1`
                 */
                doneSize: number;
                /**
                 * 总共完成的进度
                 * @example `100`
                 */
                donePercent: number;
            }[];
        }[];
    }[];
}
