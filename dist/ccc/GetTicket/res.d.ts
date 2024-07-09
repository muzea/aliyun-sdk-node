export interface GetTicketResponse {
    /**
     * 数据。
     */
    Data: {
        /**
         * 实例ID。
         * @example `ccc-test`
         */
        InstanceId: string;
        /**
         * 工单ID。
         * @example `b3a6a131-359e-46bd-9bc5-1f5cb0ea093f`
         */
        TicketId: string;
        /**
         * 工单模板ID。
         * @example `ccc-test_43c2671b-8939-4223-86d0-6bd187905cc8_*****0666238`
         */
        TemplateId: string;
        /**
         * 工单模板版本。
         * @example `0`
         */
        TemplateVersion: string;
        /**
         * 工单标题。
         * @example `售后工单`
         */
        Title: string;
        /**
         * 工单字段信息。
         * @example `{"productName":"商品A"}`
         */
        Context: string;
        /**
         * 处理人ID。
         * @example `agent1@ccc-test`
         */
        Assignee: string;
        /**
         * 处理人名称。
         * @example `坐席A`
         */
        AssigneeName: string;
        /**
         * 创建人ID。
         * @example `creator@ccc-test
        `
         */
        Creator: string;
        /**
         * 创建者名称
         * @example `坐席B`
         */
        CreatorName: string;
        /**
         * 工单类目ID。
         * @example `8939-4223-86d0-6bd187905cc8`
         */
        CategoryId: string;
        /**
         * 工单类目名称。
         * @example `售后类目`
         */
        CategoryName: string;
        /**
         * 话务ID。
         * @example `job-399383842187575296`
         */
        JobId: string;
        /**
         * 工单处理开始时间。
         * @example `1620259200000`
         */
        StartTime: number;
        /**
         * 工单处理完成时间。
         * @example `1687846259999`
         */
        EndTime: number;
        /**
         * 工单创建时间。
         * @example `1620259200000`
         */
        CreatedTime: number;
        /**
         * 最近一次更新时间。
         * @example `1693793208075`
         */
        UpdatedTime: number;
        /**
         * 当前节点ID。
         * @example `912f0b78-6639-4a93-ae18-0d832885c27e`
         */
        CurrentTaskId: string;
        /**
         * 当前节点名称。
         * @example `节点1`
         */
        CurrentTaskName: string;
        /**
         * 当前节点开始时间。
         * @example `1693793208075`
         */
        CurrentTaskStartTime: number;
        /**
         * 工单来源。
         * - AUDIO： 语音业务。
         * - CHAT: 网络业务。
         * - Console：工单控制台创建。
         * @example `Audio`
         */
        Source: string;
        /**
         * 客户ID，云呼客户资料中的客户ID。
         * @example `4223-86d0-6bd187905-891798749`
         */
        CustomerId: string;
        /**
         * 工单状态。
         * - Processing(处理中)
         * - Withdrawal(已撤回)
         * - Rejected(已退回)
         * - Closed(已关单)
         * @example `Processing`
         */
        State: string;
        /**
         * 关单原因。
         * - Completed(处理完成)
         * - Terminated(取消)
         * @example `Completed`
         */
        CloseCode: string;
        /**
         * 处理意见。
         * @example `无`
         */
        Comment: string;
    };
    /**
     * 请求ID。
     * @example `BF268B34-09C2-43FD-BAC4-5D31EA633111`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 错误参数列表。
     */
    Params: string[];
}
