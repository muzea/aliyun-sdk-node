export interface InsertK8sApplicationResponse {
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `b197-40ab-9155-****`
     */
    RequestId: string;
    /**
     * 应用详情。
     */
    ApplicationInfo: {
        /**
         * 变更流程ID，可调用GetChangeOrderInfo接口获取，详情请参见[GetChangeOrderInfo](~~62072~~)。
         * @example `cd65b247-****-475b-ad4b-7039040d625c`
         */
        ChangeOrderId: string;
        /**
         * 应用名称。
         * @example `test`
         */
        AppName: string;
        /**
         * 是否为Docker应用。
         * - true：是。
         * - false：否。
         * @example `true`
         */
        Dockerize: boolean;
        /**
         * 负责人。
         * @example `zp`
         */
        Owner: string;
        /**
         * 用户账号ID。
         * @example `1172****6608****`
         */
        EdasId: string;
        /**
         * 应用集群环境类型如下：
         * - 0：普通Docker集群。
         * - 1：Swarm集群（已下线）。
         * - 2：ECS集群。
         * - 3：EDAS自建K8s集群（已下线）。
         * - 4：Pandora自动注册应用集群类型。
         * - 5：容器服务K8s集群和Serverless K8s集群。
         * @example `5`
         */
        ClusterType: number;
        /**
         * 应用ID，可通过调用ListApplication接口获取，详情请参见[ListApplication](~~149390~~)。
         * @example `e83acea6-****-47e1-96ae-c0e95377****`
         */
        AppId: string;
        /**
         * 用户主账号。
         * @example `edas_test****@aliyun****.com`
         */
        UserId: string;
        /**
         * 地域ID。
         * @example `cn-beijing`
         */
        RegionId: string;
    };
}
