export interface DescribeImageCachesResponse {
    /**
     * 请求ID，唯一标识。
     * @example `39FC2E43-3DD7-4CEF-9EF4-E4AD6E635301`
     */
    RequestId: string;
    /**
     * 镜像缓存信息列表。
     */
    ImageCaches: {
        /**
         * 镜像缓存包含的镜像列表。
         */
        Images: string[];
        /**
         * 创建时间。
         * @example `2021-02-09T02:24:07Z`
         */
        CreationTime: string;
        /**
         * 镜像缓存状态。可能值：
         * - Preparing：准备中
         * - Creating：创建中
         * - Ready：创建完成
         * - Failed：创建失败
         * - Updating：更新中
         * - UpdateFailed：更新失败
         * 当状态为Ready时，即可使用该镜像缓存。
         * @example `Ready`
         */
        Status: string;
        /**
         * 镜像缓存对应快照的创建进度。
         * > 如果开启了极速镜像缓存功能，将先创建一份临时使用的本地快照再创建一份普通快照，该进度为普通快照的创建进度。
         * @example `100%`
         */
        Progress: string;
        /**
         * 到期时间。
         * @example `2019-11-10T09:00:48Z`
         */
        ExpireDateTime: string;
        /**
         * 最新一次匹配到镜像缓存的时间。
         * @example `2021-08-18T03:48:10Z`
         */
        LastMatchedTime: string;
        /**
         * 容器组ID。
         * @example `eci-bp18oq3m15prd9jb****`
         */
        ContainerGroupId: string;
        /**
         * 镜像缓存的标签列表信息。
         */
        Tags: {
            /**
             * 标签键。
             * @example `imc`
             */
            Key: string;
            /**
             * 标签值。
             * @example `test`
             */
            Value: string;
        }[];
        /**
         * 镜像缓存拉取镜像事件信息。
         */
        Events: {
            /**
             * 事件类型。
             * @example `Normal`
             */
            Type: string;
            /**
             * 事件结束时间。
             * @example `2021-02-09T02:24:48Z`
             */
            LastTimestamp: string;
            /**
             * 事件消息。
             * @example `Successfully check image cache resource.`
             */
            Message: string;
            /**
             * 事件名称。
             * @example `imagetest.1661f31f851a****`
             */
            Name: string;
            /**
             * 事件数。
             * @example `1`
             */
            Count: number;
            /**
             * 事件开始时间。
             * @example `2021-02-09T02:24:48Z`
             */
            FirstTimestamp: string;
            /**
             * 事件原因。
             * @example `Started`
             */
            Reason: string;
        }[];
        /**
         * 镜像缓存ID。
         * @example `imc-bp195erqe9o2pb09****`
         */
        ImageCacheId: string;
        /**
         * 所属地域。
         * @example `cn-beijing`
         */
        RegionId: string;
        /**
         * 镜像缓存对应的快照ID。
         * @example `s-2zec5oj8e1yhxijt****`
         */
        SnapshotId: string;
        /**
         * 本地快照ID。开启极速镜像缓存功能后，将临时创建一份本地快照。
         * @example `s-bp12w3v37sit96t6****`
         */
        FlashSnapshotId: string;
        /**
         * 所属资源组ID。
         * @example `rg-2df3isufhi38****`
         */
        ResourceGroupId: string;
        /**
         * 镜像缓存大小。单位：GiB。
         * @example `20`
         */
        ImageCacheSize: number;
        /**
         * 镜像缓存名称。
         * @example `imagetest`
         */
        ImageCacheName: string;
        /**
         * 镜像缓存的淘汰策略。默认为空，表示一直保留。
         * 支持配置为LRU，表示可以被自动删除。当镜像缓存数量达到配额限制时，系统将自动删除最不常用的EliminationStrategy为LRU的镜像缓存。
         * @example `LRU`
         */
        EliminationStrategy: string;
    }[];
    /**
     * 本次调用返回的查询凭证值。
     * @example `AAAAAdDWBF2****`
     */
    NextToken: string;
    /**
     * 查询结果总条数。
     * @example `15`
     */
    TotalCount: number;
}
