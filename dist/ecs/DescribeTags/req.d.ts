export interface DescribeTagsRequest {
    /**
     *  分页查询时设置的每页行数。
     * 最大值：100。
     * 默认值：50 。
     * @example `50`
     */
    "PageSize"?: number;
    /**
     *  标签列表的页码。
     * 起始值：1。
     * 默认值：1 。
     * @example `1`
     */
    "PageNumber"?: number;
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
     * - keypair：SSH密钥对。
     * - launchtemplate：启动模板。
     * - reservedinstance：预留实例券。
     * - snapshotpolicy：自动快照策略。
     * 以上取值均为小写。
     * @example `snapshot`
     */
    "ResourceType"?: string;
    /**
     * 标签绑定的资源ID。例如，当资源类型（ResourceType）为实例（instance）时，资源ID可以理解为实例ID。
     * @example `s-946ntx4wr****`
     */
    "ResourceId"?: string;
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * > 该参数即将被弃用，为提高兼容性，建议您尽量使用其他参数。
     * @example `null`
     */
    "Category"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 资源的标签键。
         * >为提高兼容性，建议您尽量使用Tag.N.Key参数。
         * @example `testkey`
         */
        key: string;
        /**
         * 资源的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以aliyun和acs:开头，不能包含http://或者https://。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 资源的标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。
         * @example `TestValue`
         */
        Value: string;
        /**
         * 资源的标签值。
         * >为提高兼容性，建议您尽量使用Tag.N.Value参数。
         * @example `testvalue`
         */
        value: string;
    }[];
}
