export interface GetChangeOrderInfoResponse {
    /**
     * 接口状态或POP错误码
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `4JFR-FV9F***************`
     */
    RequestId: string;
    /**
     * 变更流程详情
     */
    changeOrderInfo: {
        /**
         * 变更状态
         * - 0：准备
         * - 1：执行中
         * - 2：执行成功
         * - 3：执行失败
         * - 6：终止
         * - 7：部分成功
         * - 8：手动分批发布模式下，等待手工确认执行下一批
         * - 9：自动分批发布模式下，等待下一批执行中
         * - 10：系统异常执行失败
         * @example `2`
         */
        Status: number;
        /**
         * 变更流程ID
         * @example `1074f3e2-e974-4a0e-****-************`
         */
        ChangeOrderId: string;
        /**
         * 分批发布时，下一批变更的执行方式。
         * - Automatic：自动
         * - Manual：手动
         * @example `Automatic`
         */
        BatchType: string;
        /**
         * 变更流程分类
         * @example `Application Scale Out`
         */
        CoType: string;
        /**
         * 创建时间
         * @example `2019-11-13 14:23:46`
         */
        CreateTime: string;
        /**
         * 变更流程描述
         * @example `应用扩容`
         */
        ChangeOrderDescription: string;
        /**
         * 变更分批数
         * @example `1`
         */
        BatchCount: number;
        /**
         * 变更流程的负责人
         * @example `edas_com***_****@******-*****.***`
         */
        CreateUserId: string;
        /**
         * 是否支持回滚。
         * - true：支持回滚
         * - false：不支持回滚
         * @example `false`
         */
        SupportRollback: boolean;
        /**
         * 变更流程描述
         * @example `IP of Scale-Out Instance: 47.107.XX.XX`
         */
        Desc: string;
        PipelineInfoList: {
            /**
             * 分批变更任务列表
             */
            PipelineInfo: {
                /**
                 * 批次名称
                 * @example ` Batch: 1`
                 */
                PipelineName: string;
                /**
                 * 开始时间的时间戳
                 * @example `1583911702158`
                 */
                StartTime: string;
                /**
                 * 更新时间的时间戳
                 * @example `1583911743633`
                 */
                UpdateTime: string;
                /**
                 * 任务状态：
                 * - 0：准备
                 * - 1：执行中
                 * - 2：执行成功
                 * - 3：执行失败
                 * - 6：终止
                 * - 8：手动分批发布模式下，等待手工确认执行下一批
                 * - 9：自动分批发布模式下，等待下一批执行中
                 * - 10：系统异常执行失败
                 * @example `2`
                 */
                PipelineStatus: number;
                /**
                 * 分批变更时各批次流程的ID
                 * @example `4c4ee320-5e47-4a48-****-************`
                 */
                PipelineId: string;
                StageList: {
                    /**
                     * 变更流程的任务阶段列表
                     */
                    StageInfoDTO: {
                        /**
                         * 阶段ID
                         * @example `358a143f-09a0-45e0-****-************@**_*******_*****`
                         */
                        StageId: string;
                        /**
                         * 阶段状态
                         * - 0：准备
                         * - 1：执行中
                         * - 2：执行成功
                         * - 3：执行失败
                         * - 6：终止
                         * - 8：手动分批发布模式下，等待手工确认执行下一批
                         * - 9：自动分批发布模式下，等待下一批执行中
                         * - 10：系统异常执行失败
                         * @example `2`
                         */
                        Status: number;
                        /**
                         * 阶段名称
                         * @example `Scale Out`
                         */
                        StageName: string;
                        /**
                         * 阶段任务的执行结果
                         */
                        StageResultDTO: {
                            InstanceDTOList: {
                                /**
                                 * 运行在每台ECS实例上阶段执行结果
                                 */
                                InstanceDTO: {
                                    /**
                                     * 运行状态
                                     * - 0：准备
                                     * - 1：执行中
                                     * - 2：执行成功
                                     * - 3：执行失败
                                     * - 6：终止
                                     * - 8：手动分批发布模式下，等待手工确认执行下一批
                                     * - 9：自动分批发布模式下，等待下一批执行中
                                     * - 10：系统异常执行失败
                                     * @example `2`
                                     */
                                    Status: number;
                                    /**
                                     * 实例IP
                                     * @example `47.XX.XX.12 (Public)<br>***.**.*.*** (*******)`
                                     */
                                    InstanceIp: string;
                                    /**
                                     * 节点名称
                                     * @example `canary-test`
                                     */
                                    PodName: string;
                                    /**
                                     * 实例名称
                                     * @example `EDAS-scaled`
                                     */
                                    InstanceName: string;
                                    /**
                                     * Pod状态
                                     * @example `执行中`
                                     */
                                    PodStatus: string;
                                    InstanceStageDTOList: {
                                        /**
                                         * 每个实例上阶段执行的结果列表
                                         */
                                        InstanceStageDTO: {
                                            /**
                                             * 阶段ID
                                             * @example `5dd4c0f2-d81a-406f-****-************`
                                             */
                                            StageId: string;
                                            /**
                                             * 阶段状态
                                             * - 0：准备
                                             * - 1：执行中
                                             * - 2：执行成功
                                             * - 3：执行失败
                                             * - 6：终止
                                             * - 8：手动分批发布模式下，等待手工确认执行下一批
                                             * - 9：自动分批发布模式下，等待下一批执行中
                                             * - 10：系统异常执行失败
                                             * @example `2`
                                             */
                                            Status: number;
                                            /**
                                             * 开始时间
                                             * @example `2020-03-11T07:28:49Z`
                                             */
                                            StartTime: string;
                                            /**
                                             * 阶段信息
                                             * @example `Pulling image \"registry-vpc.cn-hangzhou.aliyuncs.com****-user/1172745****_shared_repo:428084d6-265f-****-911a-7eb0d2c3****_15839117****\`
                                             */
                                            StageMessage: string;
                                            /**
                                             * 结束时间
                                             * @example `2020-03-11T07:28:52Z`
                                             */
                                            FinishTime: string;
                                            /**
                                             * 阶段名称
                                             * @example ` scale out `
                                             */
                                            StageName: string;
                                        }[];
                                    };
                                }[];
                            };
                            /**
                             * 服务型阶段执行结果
                             */
                            ServiceStage: {
                                /**
                                 * 阶段ID
                                 * @example `358a143f-09a0-45e0-****-************`
                                 */
                                StageId: string;
                                /**
                                 * 运行状态
                                 * - 0：准备
                                 * - 1：执行中
                                 * - 2：执行成功
                                 * - 3：执行失败
                                 * - 6：终止
                                 * - 8：手动分批发布模式下，等待手工确认执行下一批
                                 * - 9：自动分批发布模式下，等待下一批执行中
                                 * - 10：系统异常执行失败
                                 * @example `2`
                                 */
                                Status: number;
                                /**
                                 * 执行结果信息
                                 * @example `Success`
                                 */
                                Message: string;
                                /**
                                 * 阶段名称
                                 * @example `Enable Tengine`
                                 */
                                StageName: string;
                            };
                        };
                    }[];
                };
                StageDetailList: {
                    /**
                     * 阶段执行结果列表
                     */
                    StageDetailDTO: {
                        /**
                         * 阶段ID
                         * @example `d7561440-10a6-452f-8a90-62f6e7ec****`
                         */
                        StageId: string;
                        /**
                         * 阶段状态：
                         * - 0：准备
                         * - 1：执行中
                         * - 2：执行成功
                         * - 3：执行失败
                         * - 6：终止
                         * - 8：手动分批发布模式下，等待手工确认执行下一批
                         * - 9：自动分批发布模式下，等待下一批执行中
                         * - 10：系统异常执行失败
                         * @example `2`
                         */
                        StageStatus: number;
                        /**
                         * 阶段名称
                         * @example `Process Start`
                         */
                        StageName: string;
                        TaskList: {
                            /**
                             * 任务列表
                             */
                            TaskInfoDTO: {
                                /**
                                 * 表示任务本身是否能容忍错误，如果容忍，则发生错误时，变更流程将忽略错误来继续下一个任务。
                                 * - 0：不容忍错误
                                 * - 1：容忍错误
                                 * @example `0`
                                 */
                                TaskErrorIgnorance: number;
                                /**
                                 * 是否显示`忽略错误按钮`。
                                 * - true：忽略变更流程中出现的错误。目前只有执行URL健康检查时，该参数的取值可为true。
                                 * - false：不忽略变更流程中出现的错误。
                                 * @example `false`
                                 */
                                ShowManualIgnorance: boolean;
                                /**
                                 * 任务状态
                                 * - 0：准备
                                 * - 1：执行中
                                 * - 2：执行成功
                                 * - 3：执行失败
                                 * - 6：终止
                                 * - 8：手动分批发布模式下，等待手工确认执行下一批
                                 * - 9：自动分批发布模式下，等待下一批执行中
                                 * - 10：系统异常执行失败
                                 * @example `2`
                                 */
                                TaskStatus: string;
                                /**
                                 * 任务信息
                                 * @example `[CALLBACK] 2020-03-11 15:28:44.781  requestId: c952ab99-8c5b-4ff1-9412-ae3bf9b1****, message: success`
                                 */
                                TaskMessage: string;
                                /**
                                 * 任务名称
                                 * @example `Build Image`
                                 */
                                TaskName: string;
                                /**
                                 * 错误码
                                 * @example `400`
                                 */
                                TaskErrorCode: string;
                                /**
                                 * 重试类型，0 表示不重试，1表示自动重试，2表示手动重试
                                 * @example `0`
                                 */
                                RetryType: number;
                                /**
                                 * 任务ID
                                 * @example `d6d3b934-90a1-4ae8-8cbd-2446003d****`
                                 */
                                TaskId: string;
                                /**
                                 * 任务错误信息
                                 * @example `400`
                                 */
                                TaskErrorMessage: string;
                            }[];
                        };
                    }[];
                };
            }[];
        };
        Targets: {
            Items: string[];
        };
        /**
         * 流控规则
         */
        TrafficControl: {
            /**
             * 路由转发策略
             * @example `[{"app":"9c8247da-91b6-42bb-8f99-92a0b9c6f****","type":"GROUP"}]`
             */
            Routes: string;
            /**
             * 流量的路由规则
             * @example `[{"conditionType":"content","conditions":[{"key":"name","operator":"EQ","strategy":"PARAM","values":["jim"]},{"key":"name","operator":"EQ","strategy":"COOKIE","values":["jim"]}],"percent":100,"protocol":"SPRINGCLOUD","triggerPolicy":"AND"}]`
             */
            Rules: string;
            /**
             * 流量规则的提示说明文案
             * @example `灰度批次发布完毕，已确认继续下一批。`
             */
            Tips: string;
        };
    };
}
