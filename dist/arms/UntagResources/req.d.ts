export interface UntagResourcesRequest {
    /**
     * 需要删除的标签键列表，不超过20个。不填可通过**All**参数删除所有标签。
     */
    "TagKey"?: string[];
    /**
     * 应用的PID或实例ID，最多50个。
     */
    "ResourceId": string[];
    /**
     * 需要修改标签的ARMS资源类型。
     * - WEB-前端监控
     * - APPLICATION-应用监控
     * - PROMETHEUS-可观测监控 Prometheus 版
     * - SYNTHETICTASK-云拨测
     * - ALERTRULE-应用监控告警
     * - PROMETHEUSALERTRULE-可观测监控 Prometheus 版告警
     * - XTRACEAPP - 可观测链路 OpenTelemetry 版应用
     * @example `APPLICATION`
     */
    "ResourceType": string;
    /**
     * 是否全部删除，只针对TagKey.N为空时有效。取值范围：
     * - true：全部删除
     * - false（默认）：不全部删除
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 标签键值对，当您未输入ResourceIds参数时必填。取值说明如下：
     * - key：标签键，字符长度范围[1,128]。
     * - value：标签值，字符长度范围[1,128]。
     *
     * 区分大小写。如果指定多个标签，则会为指定资源同时创建并绑定多个标签。同一个资源上的同一个标签键只能对应一个标签值。如果您尝试添加已有标签键，则对应的标签值会更新为新值。不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
     */
    "Tags"?: {
        /**
         * 标签键。必填参数，不允许为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或 `https://`。
         * @example `TestTag`
         */
        Key: string;
        /**
         * 实例的标签值。
         * 如果传入该值，则允许为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
