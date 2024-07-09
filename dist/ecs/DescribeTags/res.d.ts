export interface DescribeTagsResponse {
    /**
     * 请求ID。
     * @example `B04B8CF3-4489-432D-83BA-6F128E4F2295`
     */
    RequestId: string;
    /**
     * 分页查询时设置的每页行数。
     * @example `50`
     */
    PageSize: number;
    /**
     * 标签列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 标签总个数。
     * @example `1`
     */
    TotalCount: number;
    Tags: {
        /**
         * 满足所有筛选条件的标签。
         */
        Tag: {
            /**
             * 标签值。
             * @example `TestValue`
             */
            TagValue: string;
            /**
             * 标签键。
             * @example `TestKey`
             */
            TagKey: string;
            /**
             * 资源类型计数。
             */
            ResourceTypeCount: {
                /**
                 * 该标签标记了多少实例。
                 * @example `45`
                 */
                Instance: number;
                /**
                 * 该标签标记了多少镜像。
                 * @example `6`
                 */
                Image: number;
                /**
                 * 该标签标记了多少专有宿主机。
                 * @example `1`
                 */
                Ddh: number;
                /**
                 * 该标签标记了多少自动快照策略。
                 * @example `4`
                 */
                SnapshotPolicy: number;
                /**
                 * 该标签标记了多少安全组。
                 * @example `4`
                 */
                Securitygroup: number;
                /**
                 * 该标签标记了多少快照。
                 * @example `15`
                 */
                Snapshot: number;
                /**
                 * 该标签标记了多少预留实例券。
                 * @example `4`
                 */
                ReservedInstance: number;
                /**
                 * 该标签标记了多少启动模板。
                 * @example `6`
                 */
                LaunchTemplate: number;
                /**
                 * 该标签标记了多少弹性网卡。
                 * @example `5`
                 */
                Eni: number;
                /**
                 * 该标签标记了多少磁盘。
                 * @example `15`
                 */
                Disk: number;
                /**
                 * 该标签标记了多少密钥对。
                 * @example `17`
                 */
                KeyPair: number;
                /**
                 * 该标签标记了多少存储卷。
                 * @example `6`
                 */
                Volume: number;
            };
        }[];
    };
}
