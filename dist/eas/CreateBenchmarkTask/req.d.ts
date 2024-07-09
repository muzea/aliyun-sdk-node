export interface CreateBenchmarkTaskRequest {
    /**
     * 压测任务的配置参数。
     * @example `{
        "base": {
            "duration": 600
        },
        "service": {
            "serviceName": "test_service",
            "requestToken": "test_token"
        },
        "data": {
            "path": "https://larec-benchmark-cd.oss-cn-chengdu.aliyuncs.com/youbei/sv_dbmtl/data/youbei.warmup.tf.bin",
            "dataType": "binary"
        },
        "optional": {
           "maxRt": 100
        }
    }`
     */
    "body"?: string;
}
