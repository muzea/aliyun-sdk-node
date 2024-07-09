export interface UpdatePrometheusRemoteWriteRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * prometheus实例Id。仅支持aliyun-cs、ecs两种类型的实例。
     * @example `cc7a37ee31aea4ed1a059eff8034b****`
     */
    "ClusterId": string;
    /**
     * prometheus remote write配置名称。
     * @example `rw1`
     */
    "RemoteWriteName": string;
    /**
     * prometheus remote write配置（yaml格式）。
     * @example `remote_write:
      - name: rw1
        url: "http://cn-hangzhou-intranet.arms.aliyuncs.com/prometheus/uid/xx/cn-hangzhou/api/v3/write"
        basic_auth:
          username: xxx
          password: xxx
        write_relabel_configs:
          - source_labels: [ instance_id ]
            separator: ;
            regex: si
            replacement: $1
            action: keep`
     */
    "RemoteWriteYaml": string;
}
