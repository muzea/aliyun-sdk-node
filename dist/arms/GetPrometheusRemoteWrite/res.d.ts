export interface GetPrometheusRemoteWriteResponse {
    /**
     * 请求ID
     * @example `40B10E04-81E8-4643-970D-F1B38F2E****`
     */
    RequestId: string;
    /**
     * 返回prometheus的remote write配置。
     * @example `name: rw1
    url: "http://cn-hangzhou-intranet.arms.aliyuncs.com/prometheus/uid/xx/cn-hangzhou/api/v3/write"
    basic_auth: username: xxx
    password: xxx
    write_relabel_configs: - source_labels: [instance_id]
    separator: ;
    regex: si
    replacement: $1
    action: keep`
     */
    Data: {
        /**
         * prometheus实例id
         * @example `c589a1b8db05c4561aefbb898ca8fb1cf`
         */
        ClusterId: string;
        /**
         * remote write名称
         * @example `abc123`
         */
        RemoteWriteName: string;
        /**
         * prometheus remote write配置（yaml格式）。
         * @example `参见返回参数补充说明。`
         */
        RemoteWriteYaml: string;
    };
    /**
     * 查询是否成功。
     * - `true`：成功。
     * - `false`：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结果的提示信息。
     * @example `message`
     */
    Message: string;
    /**
     * 状态码。说明 200表示成功。
     * @example `200`
     */
    Code: number;
}
