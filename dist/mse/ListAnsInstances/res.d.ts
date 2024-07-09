export interface ListAnsInstancesResponse {
    /**
     * HTTP状态码。
     * @example `202`
     */
    HttpCode: string;
    /**
     * 实例总数。
     * @example `7`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `52BA6DA6-A702-4362-A32F-DFF79655****`
     */
    RequestId: string;
    /**
     * 信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 每页展示实例数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 数据概览。
     */
    Data: {
        /**
         * 缺省键。
         * @example `30.5.XX.XX:unknown`
         */
        DefaultKey: string;
        /**
         * 临时节点，取值如下：
         * - `true`：获取成功。
         * - `false`：获取失败。
         * @example `true`
         */
        Ephemeral: boolean;
        /**
         * 标记，取值如下：
         * - `true`：标记成功。
         * - `false`：标记失败。
         * @example `true`
         */
        Marked: boolean;
        /**
         * 公网IP。
         * @example `30.5.XX.XX`
         */
        Ip: string;
        /**
         * 实例ID。
         * @example `30.5.XX.XX#0#DEFAULT#DEFAULT_GROUP@@consumers:com.alibaba.edas.IHelloService`
         */
        InstanceId: string;
        /**
         * 端口号
         * @example `8080`
         */
        Port: number;
        /**
         * 最近一次的心跳时间。
         * @example `20201010`
         */
        LastBeat: number;
        /**
         * 成功计数。
         * @example `0`
         */
        OkCount: number;
        /**
         * 权重。
         * @example `1`
         */
        Weight: number;
        /**
         * 实例心跳间隔，单位：秒。
         * @example `5000`
         */
        InstanceHeartBeatInterval: number;
        /**
         * IP删除超时。
         * @example `30000`
         */
        IpDeleteTimeout: number;
        /**
         * 应用名。
         * @example `app`
         */
        App: string;
        /**
         * 失败计数。
         * @example `0`
         */
        FailCount: number;
        /**
         * 实例健康状态，取值如下：
         * - `true`：实例健康。
         * - `false`：实例不健康。
         * @example `true`
         */
        Healthy: boolean;
        /**
         * 生效状态，取值如下：
         * - `true`：生效。
         * - `false`：不生效。
         * @example `true`
         */
        Enabled: boolean;
        /**
         * 基准键。
         * @example `30.5.XX.XX:unknown:DEFAULT`
         */
        DatumKey: string;
        /**
         * 集群名称。
         * @example `DEFAULT`
         */
        ClusterName: string;
        /**
         * 实例心跳超时。
         * @example `15000`
         */
        InstanceHeartBeatTimeOut: number;
        /**
         * 服务名称。
         * @example `DEFAULT_GROUP@@consumers:com.alibaba.edas.IHelloService::`
         */
        ServiceName: string;
        /**
         * 元数据。
         * @example `[int]`
         */
        Metadata: any;
    }[];
    /**
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
}
