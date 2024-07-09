export interface ListTagsResponse {
    /**
     * 请求ID。
     * @example `A731A84D-55C9-44F7-99BB-E1CF0CF19197`
     */
    RequestId: string;
    /**
     * 标签列表。
     */
    Tags: {
        /**
         * 标签的创建者的Uid，在阿里云内为RAM用户ID（阿里云账号创建则直接为阿里云账号ID）。
         * @example `276065346797410278`
         */
        UserId: string;
        /**
         * 标签的资源拥有者的Uid，在阿里云内为阿里云账号ID。
         * @example `1557702098194904`
         */
        OwnerId: string;
        /**
         * 标签创建的时间。格式使用ISO8601（RFC3339）。
         * @example `2014-10-02T15:01:23Z`
         */
        GmtCreateTime: string;
        /**
         * 标签最后更新的时间。格式使用ISO8601（RFC3339）。
         * @example `2014-10-02T15:01:23Z`
         */
        GmtModifiedTime: string;
        /**
         * 标签所属的资源的类型，可能值：
         * - Instance：数据集加速实例。
         * - Slot：数据集加速槽。
         * @example `Instance`
         */
        ResourceType: string;
        /**
         * 标签所属的资源的ID。
         * @example `inst-my1tk3jggooi5uwks`
         */
        ResourceId: string;
        /**
         * 标签的键值。
         * 长度限制为64 Unicode字符。
         * @example `dataset_version`
         */
        Key: string;
        /**
         * 标签的值。
         * 长度限制为64 Unicode字符。
         * @example `v0.1.0`
         */
        Value: string;
    }[];
    /**
     * 列表内元素数量总和。
     * @example `100`
     */
    TotalCount: number;
}
