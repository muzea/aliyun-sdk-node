export interface CancelInstancePublishTaskResponse {
    /**
     * 请求ID
     * @example `5CBF0581-EAE7-1DC4-95C6-A089656A1E2D`
     */
    RequestId: string;
    /**
     * 任务ID
     * @example `8522`
     */
    Id: number;
    /**
     * 任务ID
     * @example `8522`
     */
    Response: string;
    /**
     * 任务状态
     * @example `FE_ABORTED`
     */
    Status: string;
    /**
     * 业务类型列表
     */
    BizTypeList: string[];
    /**
     * job失败信息
     * @example `检查待发布模块是否空闲发生错误，faq`
     */
    Error: string;
    /**
     * 任务创建的 UTC 时间
     * @example `2022-04-12T06:30:17Z`
     */
    CreateTime: string;
    /**
     * 任务修改的 UTC 时间
     * @example `2022-04-12T06:30:33Z`
     */
    ModifyTime: string;
}
