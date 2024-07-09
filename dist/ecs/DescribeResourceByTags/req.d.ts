export interface DescribeResourceByTagsRequest {
    /**
     * 查询结果显示的每页的信息条目数。最大值：100。
     * 默认值：50。
     * @example `50`
     */
    "PageSize"?: number;
    /**
     * 查询结果显示的页码。起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 资源类型。取值范围：
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
     * 以上取值均为小写。
     * @example `instance`
     */
    "ResourceType"?: string;
    /**
     * 资源所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
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
         * 资源的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 资源的标签值。N的取值范围：1~20。一旦传入该值，允许为空字符串。最多支持128个字符。
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
