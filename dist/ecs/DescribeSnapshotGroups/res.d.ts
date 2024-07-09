export interface DescribeSnapshotGroupsResponse {
    /**
     * 下一个查询起始标志。
     * > 该返回值为空时，表示无更多返回的数据信息。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `3F9A4CC4-362F-469A-B9EF-B3204EF8AA3A`
     */
    RequestId: string;
    SnapshotGroups: {
        /**
         * 快照一致性组的信息组成的数组。
         */
        SnapshotGroup: {
            /**
             * 快照一致性组的状态。可能值：
             * - progressing：创建中。
             * - accomplished：创建成功。
             * - failed：创建失败。
             * @example `accomplished`
             */
            Status: string;
            /**
             * 创建时间。
             * @example `2021-03-23T10:58:48Z`
             */
            CreationTime: string;
            /**
             * 描述。
             * @example `This is description.`
             */
            Description: string;
            /**
             * > 该参数暂未开放使用。
             * @example `null`
             */
            ProgressStatus: string;
            /**
             * 快照一致性组ID。
             * @example `ssg-j6ciyh3k52qp7ovm****`
             */
            SnapshotGroupId: string;
            /**
             * 快照一致性组所属的实例ID。该参数仅当快照一致性组内的所有云盘快照属于同一实例时有返回值。如果您的快照一致性组内的多个云盘快照分别属于不同的ECS实例，则您可以通过返回结果中的`Snapshots.Snapshot.Tags.*`参数，查看组内单个快照所属的实例ID。
             * @example `i-j6ca469urv8ei629****`
             */
            InstanceId: string;
            /**
             * 快照一致性组的名称。
             * @example `testName`
             */
            Name: string;
            /**
             * 快照一致性组所属的资源组ID。
             * @example `rg-bp67acfmxazb4p****`
             */
            ResourceGroupId: string;
            Tags: {
                /**
                 * 快照一致性组的标签键值对。
                 */
                Tag: {
                    /**
                     * 快照一致性组的标签键。
                     * @example `TestKey`
                     */
                    Key: string;
                    /**
                     * 快照一致性组的标签值。
                     * @example `TestValue`
                     */
                    Value: string;
                }[];
            };
            Snapshots: {
                /**
                 * 快照一致性组中包含的快照信息组成的数组。
                 */
                Snapshot: {
                    /**
                     * 源云盘ID。如果快照的源云盘已经被释放，该字段仍旧保留。
                     * @example `d-j6c3ogynmvpi6wy7****`
                     */
                    SourceDiskId: string;
                    /**
                     * 快照创建进度，单位为百分比。
                     * @example `100%`
                     */
                    Progress: string;
                    /**
                     * 快照是否可用于创建云盘、回滚云盘。可能值：
                     * - true：可用。
                     * - false：不可用。
                     * @example `false`
                     */
                    Available: boolean;
                    /**
                     * 快照极速可用功能的保留时间，保留时间到期后快照将自动释放。
                     * >该参数已弃用。ESSD云盘普通快照已升级为[默认极速可用](~~193667~~)，您无需额外配置，且不产生额外花销。
                     * @example `3`
                     */
                    InstantAccessRetentionDays: number;
                    /**
                     * 快照ID。
                     * @example `s-j6cbzmrlbf09w72q****`
                     */
                    SnapshotId: string;
                    /**
                     * 是否开启了快照极速可用能力。可能值：
                     * - true：开启。ESSD云盘默认开启该能力。
                     * - false：关闭。即快照为未开启极速可用能力的普通快照。
                     * @example `true`
                     */
                    InstantAccess: boolean;
                    /**
                     * 源云盘类型。可能值：
                     * - system：系统盘。
                     * - data：数据盘。
                     * @example `system`
                     */
                    SourceDiskType: string;
                    Tags: {
                        /**
                         * 快照一致性组内各个快照的标签键值对。默认包含了快照来源的信息。
                         */
                        Tag: {
                            /**
                             * 快照一致性组内各个快照的标签键。Key和Value的默认值中提供了快照来源信息。
                             * @example `acs:ecs:createFrom`
                             */
                            Key: string;
                            /**
                             * 快照一致性组内各个快照的标签值。Key和Value的默认值中提供了快照来源信息。
                             * @example `i-bp11qm0o3dk4iuc****`
                             */
                            Value: string;
                        }[];
                    };
                }[];
            };
        }[];
    };
}
