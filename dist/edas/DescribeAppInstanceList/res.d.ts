export interface DescribeAppInstanceListResponse {
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `03FD1520-0FD6-436A-****-265318D7****`
     */
    RequestId: string;
    /**
     * 应用实例列表。
     */
    InstanceList: {
        /**
         * 节点标签，内容为JSON格式字符串。
         * @example `{"alibabacloud.com/nodepool-id":"np0*5b9377fa907","beta.kubernetes.io/arch":"amd64","beta.kubernetes.io/instance-type":"ecs.*","beta.kubernetes.io/os":"linux","failure-domain.beta.kubernetes.io/region":"cn-hangzhou","failure-domain.beta.kubernetes.io/zone":"cn-hangzhou-b","kubernetes.io/arch":"amd64","kubernetes.io/hostname":"cn-hangzhou*","kubernetes.io/os":"linux","node.kubernetes.io/instance-type":"ecs.*","topology.diskplugin.csi.alibabacloud.com/zone":"cn-hangzhou-b","topology.kubernetes.io/region":"cn-hangzhou","topology.kubernetes.io/zone":"cn-hangzhou-b"}`
         */
        NodeLabels: string;
        /**
         * 部署分组ID。
         * @example `93fdd228-*****-ed2ae98de18d`
         */
        GroupId: string;
        /**
         * 部署分组名。
         * @example `_DEFAULT_GROUP`
         */
        GroupName: string;
        /**
         * 是否是金丝雀发布实例。
         * - `true`：是
         * - `false`：否
         * @example `false`
         */
        Canary: boolean;
        /**
         * 节点名称。
         * @example `cn-hangzhou.192.168.0.*`
         */
        NodeName: string;
        /**
         * Pod信息，内容为JSON格式字符串。
         * @example `{"metadata":{"name":"oambuild-group-1-*4xthz","generateName":"oambuild-group-*96-","namespace":"default","selfLink":"/api/v1/namespaces/default/pods/oambuild-grou*96-4xthz","uid":"7a23399c-*fe7ff4018","resourceVersion":"969614830","creationTimestamp":"2021-04-06T11:38:46Z","labels":{"ARMSApmAppId":"*","ARMSApmLicenseKey":"*"...`
         */
        PodRaw: string;
        /**
         * 节点部署的包版本。
         * @example `2021-04-06 19:37:42`
         */
        Version: string;
        /**
         * 应用ID。
         * @example `93fdd228-*****-ed2ae98de18d`
         */
        AppId: string;
    }[];
}
