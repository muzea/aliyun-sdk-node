export interface UpdateServiceRequest {
    /**
     * 服务所在的地域ID。
     * @example `cn-shanghai`
     */
    "ClusterId": string;
    /**
     * 服务名称。如何查看服务名称，请参见[ListServices ](~~412109~~)。
     * @example `foo`
     */
    "ServiceName": string;
    /**
     * 服务更新类型，目前支持合并模式和替换模式。不传默认为合并模式。
     * - merge（合并模式）：若原服务配置JSON为
     * `{"a":"b"}`，更新配置为`{"c":"d"}` ，则合并模式下最终配置为`{"a":"b","c":"d"}`。
     * - replace（替换模式）：若原服务配置JSON为
     * `{"a":"b"}`，更新配置为`{"c":"d"}` ，则替换模式下最终配置为`{"c":"d"}`。
     * @example `merge`
     */
    "UpdateType"?: string;
    /**
     * 更新配置。参数配置说明，请参见[CreateService](~~412086~~)。
     * @example `{
          "name": "foo",
          "model_path": "http://path/to/model.tar.gz",
          "processor": "tensorflow_cpu",
          "metadata": {
                "instance": 2,
                "memory": 7000,
                "cpu": 4
          }
    }`
     */
    "body"?: string;
}
