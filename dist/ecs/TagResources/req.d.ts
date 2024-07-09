export interface TagResourcesRequest {
    /**
     * 资源所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
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
     * - invocation：云助手命令执行结果。
     * @example `instance`
     */
    "ResourceType": string;
    /**
     * 资源ID。N的取值范围为：1~50
     * @example `i-bp67acfmxazb4ph****`
     */
    "ResourceId": string[];
    /**
     * 标签列表。
     */
    "Tag": {
        /**
         * 资源的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 资源的标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
