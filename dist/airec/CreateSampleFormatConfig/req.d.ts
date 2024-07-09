export interface CreateSampleFormatConfigRequest {
    /**
     * 实例ID。
     * @example `airec-cn-****`
     */
    "instanceId": string;
    /**
     * 样本ID。
     * @example `Sample1`
     */
    "sampleId": string;
    /**
     * 请求Body参数。
     * @example `{
        "type": "SampleFormatConfig",
        "meta": {
            "metaType": "SampleFormatConfig",
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
                    },
                    {
                        "feature_type": "id_feature",
                        "value_type": "String",
                        "hash_bucket_size": 100,
                        "expression": "user:cms_segid",
                        "feature_name": "cms_segid",
                        "embedding_dim": 16,
                        "combiner": "mean",
                        "group": "user"
                    },
                    {
                        "feature_type": "id_feature",
                        "value_type": "String",
                        "hash_bucket_size": 100,
                        "expression": "user:cms_group_id",
                        "feature_name": "cms_group_id",
                        "embedding_dim": 16,
                        "combiner": "mean",
                        "group": "user"
                    },
                    {
                        "feature_type": "combo_feature",
                        "hash_bucket_size": 10,
                        "expression": [
                            "user:pvalue_level",
                            "item:brand"
                        ],
                        "feature_name": "combo__pvalue_level_brand",
                        "embedding_dim": 16,
                        "group": "combo"
                    }
                ]
            }
        }
    }`
     */
    "body"?: any;
}
