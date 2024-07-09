export interface GetHpoTrialResponse {
    /**
     * POP 请求id
     * @example `3F190916-B3E5-5D1E-AD0C-35C0DF105F51`
     */
    RequestId: string;
    /**
     * 内部错误码。只在响应出错时被设置。
     * @example `INVALID_INPUT_PARAMS`
     */
    Code: string;
    /**
     * 响应错误信息。只在响应出错时被设置。
     * @example `Missing 'user_id' in request.`
     */
    Message: string;
    /**
     * 请求出错的详细信息
     */
    Detail: any;
    /**
     * trial的id
     * @example `mf99W4`
     */
    TrialId: string;
    /**
     * HPO实验id
     * @example `abcde`
     */
    ExperimentId: string;
    /**
     * 这个Trial 所对应的后台任务生成的模型的存储位置。
     * @example `model_table_name_foo`
     */
    Model: string;
    /**
     * trial配置的超参(hyper parameter)值
     * @example `{"${centerCount}": 5, "${distanceType}": "cosine"}`
     */
    Hyperparam: string;
    /**
     * trail所对应的后台任务给这个trial分配的一个id
     * @example `0`
     */
    ParameterId: number;
    /**
     * Trial状态
     * @example `FINISHED, FAILED, USER_CANCELED`
     */
    Status: string;
    /**
     * metric名称。未填充，不在使用中
     * @example `空字符串`
     */
    MetricName: string;
    /**
     * trial计算metric的结果数组。包括一个或多个计算过程中产生的临时值，和一个最终值。
     * @example `[{"default":0.087745,"val_loss=([0-9\\\\.]+)":0.087745},
    {"default":1.085841,"val_loss=([0-9\\\\.]+)":0.085841},
    {"default":0.087745,"type":"FINAL","val_loss=([0-9\\\\.]+)":0.087745}]`
     */
    Metric: string;
    /**
     * trial所对应的后台任务的meta信息。json string格式。
     * @example `{"nni_trial_id": "asdf", "nni_exp_id": "abcde", "nni_trial_sequence_id": 2}`
     */
    JobMeta: string;
    /**
     * 未使用
     * @example `0`
     */
    UserScore: number;
    /**
     * 未使用
     * @example `空字符串`
     */
    UserComment: string;
    /**
     * trial成功结束后，后台任务计算出的最终的metric值。来自metric数组里的FINAL 类型的metric项里的default key所对应的值。
     * @example `{"default":0.087745,"type":"FINAL","val_loss=([0-9\\\\.]+)":0.087745}`
     */
    FinalMetric: string;
    /**
     * Trial创建时间 UTC time。
     * @example `2024-01-02 12:34:56`
     */
    GmtCreateTime: string;
    /**
     * Trial 最后更新时间 UTC time
     * @example `2024-01-02 21:32:56`
     */
    GmtModifiedTime: string;
}
