export interface CreateSampleFormatConfigResponse {
    /**
     * 请求ID。
     * @example `8B90B646-1678-41A3-B23F-EAC6587B0E48`
     */
    requestId: string;
    /**
     * 格式化配置详情。
     * @example `{
        "result": {
            "meta": {
                "metaType": "SampleFormatConfig",
                "sampleId": "Sample1",
                "config": {
                    "features": [
                        {
                            "feature_type": "id_feature",
                            "value_type": "String",
                            "hash_bucket_size": 100000,
                            "expression": "user:user_id",
                            "feature_name": "user_id",
                            "embedding_dim": 16,
                            "combiner": "mean",
                            "group": "user"
                        }
                    ]
                }
            },
            "status": "",
            "gmtCreate": "2021-12-07T08:58:19.000Z",
            "gmtModified": "2021-12-07T08:58:19.000Z",
            "sampleFormatConfigId": "99D369F6-0A73-4247-9E9F-F693A16CD6AC"
        }
    }`
     */
    result: any;
}
