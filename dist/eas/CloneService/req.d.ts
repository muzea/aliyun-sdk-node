export interface CloneServiceRequest {
    /**
     * 集群Id。
     * @example `cn-hangzhou`
     */
    "ClusterId": string;
    /**
     * 服务名。如何查看服务名称，请参见[ListServices](~~412109~~)。
     * @example `foo`
     */
    "ServiceName": string;
    /**
     * 请求body。参数配置说明，请参见[CreateService](~~412086~~)。
     * @example `{   "name": "foo",   "model_path": "http://path/to/model.tar.gz",   "processor": "tensorflow_cpu",   "metadata": {     "instance": 2,     "memory": 7000,     "cpu": 4   } }`
     */
    "body"?: string;
}
