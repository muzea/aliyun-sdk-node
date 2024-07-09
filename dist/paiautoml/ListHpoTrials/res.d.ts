export interface ListHpoTrialsResponse {
    /**
     * POP的请求id
     * @example `3F190916-B3E5-5D1E-AD0C-35C0DF105F51`
     */
    RequestId: string;
    /**
     * 内部错误码。只在响应出错时被设置。
     * @example `INVALID_USER_OR_EXP`
     */
    Code: string;
    /**
     * 响应错误信息。只在响应出错时被设置。
     * @example `Missing 'user_id' in request.`
     */
    Message: string;
    /**
     * TotalCount本次请求条件下的数据总量，此参数为可选参数，默认可不返回
     * @example `5`
     */
    TotalCount: number;
    /**
     * trial数据结构体列表
     */
    Trials: {
        /**
         * trial的id
         * @example `asdf`
         */
        TrialId: string;
        /**
         * HPO实验id
         * @example `abcde`
         */
        ExperimentId: string;
        /**
         * trail所对应的后台任务给这个trial分配的一个id
         * @example `未使用。空字符串`
         */
        ParameterId: number;
        /**
         * trial配置的超参(hyper parameter)值
         * @example `{"${centerCount}": 5, "${distanceType}": "cityblock"}`
         */
        Hyperparam: string;
        /**
         * Trial 状态
         * @example `UNKNOWN, RUNNING, WAITING, EARLY_STOPPED, SUCCEEDED, FAILED, USER_CANCELED, SYS_CANCELED`
         */
        Status: string;
        /**
         * 这个Trial 所对应的后台任务生成的模型的存储位置。
         * @example ` pai_kmeans_test_output_model_sy9zkpvc_zleam`
         */
        Model: string;
        /**
         * 未填充。不在使用中。
         * @example `空字符串`
         */
        MetricName: string;
        /**
         * trial计算metric的结果数组。包括一个或多个计算过程中产生的临时值，和一个最终值。
         * @example `[{"default":9999.2,"type":"PERIODICAL","vrc":9999.2}, {"default":9999.2,"type":"FINAL","vrc":9999.2}`
         */
        Metric: string;
        /**
         * trial所对应的后台任务的meta信息。json string格式。
         * @example `{"nni_trial_id": "ZLeAM", "nni_exp_id": "sy9zkpvc", "nni_trial_sequence_id": 0}`
         */
        JobMeta: string;
        /**
         * 未填充。不在使用中。
         * @example `空字符串`
         */
        UserScore: number;
        /**
         * 未填充。不在使用中。
         * @example `空字符串`
         */
        UserComment: string;
        /**
         * trial成功结束后，后台任务计算出的最终的metric值。来自metric数组里的FINAL 类型的metric项里的default key所对应的值。
         * @example `9999.2`
         */
        FinalMetric: string;
        /**
         * Trial创建时间 UTC time。
         * @example `2023-06-07T13:17:13Z`
         */
        GmtCreateTime: string;
        /**
         * Trial 最后更新时间 UTC time
         * @example `2023-02-27T07:01:12Z`
         */
        GmtModifiedTime: string;
    }[];
    /**
     * 额外的错误信息。只在响应出错时被设置。
     */
    Detail: any;
}
