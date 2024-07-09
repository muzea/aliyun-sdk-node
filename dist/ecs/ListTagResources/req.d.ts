export interface ListTagResourcesRequest {
    /**
     * 资源所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 下一个查询开始Token。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 资源类型定义。取值范围：
     * - instance：ECS实例。
     * - disk：磁盘。
     * - snapshot：快照。
     * - image：镜像。
     * - securitygroup：安全组。
     * - volume：存储卷。
     * - eni：弹性网卡。
     * - ddh：专有宿主机。
     * - ddhcluster：专有宿主机集群。
     * - keypair：SSH密钥对。
     * - launchtemplate：启动模板。
     * - reservedinstance：预留实例券。
     * - snapshotpolicy：自动快照策略。
     * - elasticityassurance：弹性保障。
     * - capacityreservation：容量预定。
     * - command：云助手命令。
     * - invocation：云助手命令执行或文件下发结果。
     * - activation：云助手托管实例激活码。
     * - managedinstance：云助手托管实例。
     * @example `instance`
     */
    "ResourceType": string;
    /**
     * ECS资源ID。N的取值范围为1~50。
     * @example `i-bp1j6qtvdm8w0z1o****`
     */
    "ResourceId"?: string[];
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 精确查找ECS资源时使用的标签键。标签键长度的取值范围为1~128。N的取值范围为1~20。
         * `Tag.N`参数使用说明：
         * - 方式一：用于精确查找绑定了指定标签的ECS资源，由一个键值对组成。
         *     - 仅指定`Tag.N.Key`时，则返回关联该标签键的所有资源。
         *     - 仅指定`Tag.N.Value`，则报错`InvalidParameter.TagValue`。
         *     - 同时指定多个标签键值对时，仅同时满足所有标签键值对的ECS资源会被查找到。
         * - 方式二：用于查询非默认资源组内的资源信息。`Key`的取值固定为`acs:rm:rgId`，对应的`Value`取值为资源组ID。
         *     - 如果`Key`取值为`acs:rm:rgId`，则`Value`的取值只能是非默认资源组ID。如果指定的资源组ID为默认资源组，则会返回错误信息。
         *     - 如果`Key`取值为`acs:rm:rgId`，则不支持再指定其他标签键值对。如果通过多个`Tag.N`参数同时查询资源组和标签对应的资源，则会返回错误信息。
         *
         * @example `TestKey`
         */
        Key: string;
        /**
         * 精确查找ECS资源时使用的标签值。标签值长度的取值范围为1~128。N的取值范围为1~20。
         * > 当`Key=acs:rm:rgId`时，该参数只能传入资源组ID，且资源组ID不能为默认资源组。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * Tag过滤规则。
     */
    "TagFilter"?: {
        /**
         * 模糊查找ECS资源时使用的标签值。标签值长度的取值范围为1~128。N的取值范围为1~5。具体的参数说明请参见`TagFilter.N.TagKey`参数描述。
         * @example `TestTagFilter`
         */
        TagValues: string[];
        /**
         * 模糊查找ECS资源时使用的标签键。标签键长度的取值范围为1~128。N的取值范围为1~5。
         *  `TagFilter.N`用于模糊查找绑定了指定标签的ECS资源，由一个键和一个或多个值组成。模糊查询可能会有2秒延时，仅支持模糊过滤后资源数小于等于5000的情况。
         * - 通过标签键（`TagFilter.N.TagKey`）模糊查找ECS资源时，标签值（`TagFilter.N.TagValues.N`）必须为空。例如，模糊搜索标签键为`environment`的ECS资源时，`TagFilter.1.TagKey`可以设置为`env*`（前缀匹配的模糊搜索方式）、`*env*`（两边匹配的模糊搜索方式）或者`env`（精确搜索方式），而`TagFilter.1.TagValues`必须为空。
         * - 通过标签值（`TagFilter.N.TagValues.N`）模糊查找ECS资源时，标签键（`TagFilter.N.TagKey`）必须设置为精确值。例如，模糊搜索标签键为`env`，标签值为`product`的ECS资源时，`TagFilter.1.TagKey`必须精确设置为`env`，`TagFilter.1.TagValues.1`可以设置为`proc*`（前缀匹配的模糊搜索方式）、`*proc*`（两边匹配的模糊搜索方式）或者`proc`（精确搜索方式）。同一个`TagKey`下只能用同一种搜索方式，如果设置了多个不同的搜索方式，则以第一个方式为准。
         * - 标签键之间为交集关系，即仅同时满足您指定的所有标签键的ECS资源才会被查找到。
         * - 同一标签键下的标签值之间为并集关系，即满足您为该标签键指定的任一标签值的ECS资源均会被查找到。
         * > `TagFilter.N`与`Tag.N`参数不能同时使用，否则会返回错误信息。
         * @example `env`
         */
        TagKey: string;
    }[];
}
