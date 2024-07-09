export interface DeleteInstanceResponse {
    /**
     * 请求ID
     * @example `5CBF0581-EAE7-1DC4-95C6-A089656A1E2D`
     */
    RequestId: string;
    /**
     * 任务状态，可以在GetInstancePublishTaskState API 了解更多的状态
     * @example `FE_RUNNING`
     */
    Status: string;
    /**
     * 任务ID
     * @example `8521`
     */
    Response: number;
    /**
     * 业务类型列表
     */
    BizTypeList: string[];
    /**
     * 任务创建的 UTC 时间
     * @example `2021-09-11T09:26:14Z`
     */
    CreateTime: string;
    /**
     * 任务创建人ID
     * @example `9052`
     */
    CreateUserId: number;
    /**
     * 错误信息
     * @example `检查待发布模块是否空闲发生错误，faq`
     */
    Error: string;
    /**
     * 任务ID
     * @example `8521`
     */
    Id: number;
    /**
     * 任务创建人
     * @example `xuqiang_test`
     */
    CreateUserName: string;
}
