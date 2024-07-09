export interface ListPrometheusRemoteWritesResponse {
    /**
     * 请求ID
     * @example `9319A57D-2D9E-472A-B69B-CF3CD16D****`
     */
    RequestId: string;
    /**
     * 返回prometheus的remote write配置列表
     * @example `[
      {
        "name": "TiDBxxx",
        "yaml": "remote_write:\\n- basic_auth: {password: '******', username: xxx}\\n  name: TiDBxxx\\n  write_relabel_configs:\\n  - regex: si-6e2ca86444db4e55a7c1\\n    source_labels: [instance_id]\\n    action: keep\\n    separator: ;\\n    replacement: $1\\n  url: http://xxx:8080/prometheus/xxx/ddd/cn-hangzhou/api/v3/write\\n"
      },
      {
        "name": "TiDBxxx1",
        "yaml": "remote_write:\\n- basic_auth: {password: '******', username: xxx}\\n  name: TiDBxxx1\\n  write_relabel_configs:\\n  - regex: si-6e2ca86444db4e55a7c1\\n    source_labels: [instance_id]\\n    action: keep\\n    separator: ;\\n    replacement: $1\\n  url: http://xxx:8080/prometheus/xxx/ddd/cn-hangzhou/api/v3/write\\n"
      }
    ]`
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
    }[];
    /**
     * 操作是否成功：true：操作成功                                 false：操作失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结果的提示信息。
     * @example `message`
     */
    Message: string;
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: number;
}
