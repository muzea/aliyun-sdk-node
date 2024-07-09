export interface GetHpoExperimentResponse {
    /**
     * POP的请求id
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
     * 额外的错误信息。只在响应出错时被设置。
     * @example `TBD`
     */
    Detail: any;
    /**
     * HPO实验id
     * @example `sX5O9Q8`
     */
    ExperimentId: string;
    /**
     * 实验创建人的UserId
     * @example `123456789`
     */
    Creator: string;
    /**
     * search_space.json配置内容
     * @example `{"${centerCount}":{"_type":"choice","_value":[2,3,4,5]},"${distanceType}":{"_type":"choice","_value":["euclidean","cosine","cityblock"]}}`
     */
    SearchSpace: string;
    /**
     * 实验名称
     * @example `my_hpo_exp_1`
     */
    Name: string;
    /**
     * 实验状态
     * @example `INVALID_USER_OR_EXP, SUCCESS, or EXECUTION_FAILURE`
     */
    Status: string;
    /**
     * 实验类型。对于HPO实验，类型值始终是1.
     * @example `1`
     */
    JobType: string;
    /**
     * trial.ini配置内容
     * @example `[odps_config]
    access_id=foo
    access_key=bar
    end_point=http://service.odps.aliyun.com/api
    log_view_host=http://logview.odps.aliyun.com
    project_name=my_project`
     */
    ConfigIni: string;
    /**
     * exp.yml配置内容
     * @example `assessor:
      classArgs:
        optimize_mode: maximize
        start_step: 1
      name: PAIAssessor
    debug: true
    experimentName: maxcompute_kmeans_monitor
    experimentWorkingDirectory: ../expdir
    logLevel: debug
    maxTrialNumber: 10
    searchSpaceFile: search_space.json
    trainingService:
      platform: local
    trialCommand: python3 -m hpo_tools.core.utils.run --config=./config.ini
    trialConcurrency: 2
    tuner:
      classArgs:
        optimize_mode: maximize
      name: TPE`
     */
    ConfigYml: string;
    /**
     * 实验创建时间。
     * @example `2024-01-01 08:30:11`
     */
    GmtCreateTime: string;
    /**
     * 实验数据最近更新时间。
     * @example `2024-01-01 08:30:11`
     */
    GmtModifiedTime: string;
    /**
     * 工作空间ID。
     * @example `12345`
     */
    WorkspaceId: string;
    /**
     * 工作空间可见性，可能值为：
     * - PRIVATE：在此工作空间中，仅对您和管理员可见。
     * - PUBLIC：在此工作空间中，对所有人可见。
     * @example `PRIVATE`
     */
    Accessibility: string;
    /**
     * 实验描述信息
     * @example `我的实验`
     */
    Description: string;
    /**
     * 实验已经产生的trial的数量
     * @example `3`
     */
    TrialCount: number;
    /**
     * trail状态名称和数量
     */
    TrialStatus: any;
    /**
     * 实验配置信息
     * @example `{
        "output_config": {
            "model_path": "bi_ps_${exp_id}_${trial_id}"
        },
        "platform_config": {
            "cmd": [
                "PAI -name ps_smart\n    -project foo",
                "PAI -name prediction\n    -project foo",
                "PAI -name evaluate -project foo",
                "INSERT OVERWRITE TABLE my_table;"
            ],
            "name": "MaxCompute"
        },
        "metric_config": {
            "metric_dict": {
                "recall": 0.5,
                "auc": 0.25,
                "precision": 0.25
            },
            "metric_source": [
                "select * from my_metrics where pt='${exp_id}_${trial_id}';"
            ],
            "metric_type": "table",
            "final_mode": "best"
        },
        "odps_config": {
            "project_name": "my_project",
            "role_arn": "acs:ram::123456789:role/aliyunserviceroleforfoo",
            "region": "cn-shanghai",
            "end_point": "http://service.cn.maxcompute.aliyun-inc.com/api",
            "log_view_host": "http://logview.odps.aliyun.com"
        },
        "yml_config": {
            "max_trial_number": 5,
            "assessor": {
                "name": "PAIAssessor",
                "class_args": {
                    "earlystop": true,
                    "start_step": 5,
                    "optimize_mode": "maximize"
                }
            },
            "experiment_name": "my_exp",
            "tuner": {
                "name": "TPE",
                "class_args": {
                    "optimize_mode": "maximize"
                }
            },
            "trial_concurrency": 2
        },
        "search_space": {
            "${max_depth}": {
                "_type": "choice",
                "_value": [
                    1,
                    3,
                    5
                ]
            },
            "${tree_count}": {
                "_value": [
                    50,
                    100,
                    150
                ],
                "_type": "choice"
            }
        }
    }`
     */
    HpoExperimentConfiguration: any;
    /**
     * 是否已经被删除
     * @example `0`
     */
    Deleted: boolean;
}
