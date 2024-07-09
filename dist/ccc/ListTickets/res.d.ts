export interface ListTicketsResponse {
    /**
     * 请求ID。
     * @example `7BEEA660-A45A-45E3-98CC-AFC65E715C23`
     */
    RequestId: string;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 数据。
     */
    Data: {
        /**
         * 总数。
         * @example `10`
         */
        TotalCount: number;
        /**
         * 分页序号，范围1-100。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页大小，范围1-100。
         * @example `10`
         */
        PageSize: number;
        /**
         * 工单列表。
         */
        List: {
            /**
             * 实例ID。
             * @example `ccc-test`
             */
            InstanceId: string;
            /**
             * 工单ID。
             * @example `feb83abd-9f08-49d2-9b56-41d1b66ca0ac`
             */
            TicketId: string;
            /**
             * 工单标题。
             * @example `标题`
             */
            Title: string;
            /**
             * 模板ID。
             * @example `c844a5f0-496c-4c5b-8a0c-dd27686e8ff6`
             */
            TemplateId: string;
            /**
             * 模板版本。
             * @example `0`
             */
            TemplateVersion: string;
            /**
             * 工单类目ID。
             * @example `43c2671b-*****-4223-86d0-6bd187905cc8`
             */
            CategoryId: string;
            /**
             * 工单类目名称。
             * @example `类目1`
             */
            CategoryName: string;
            /**
             * 工单开始时间。
             * @example `1631440860000`
             */
            StartTime: number;
            /**
             * 工单结束时间。
             * @example `1631440860000`
             */
            EndTime: number;
            /**
             * 状态。
             * @example `Processing`
             */
            State: string;
            /**
             * 工单结束原因。
             * @example `Completed`
             */
            CloseCode: string;
            /**
             * 处理人ID。
             * @example `assignee@ccc-test`
             */
            Assignee: string;
            /**
             * 处理意见。
             * @example `无`
             */
            Comment: string;
            /**
             * 处理人姓名。
             * @example `Assignee`
             */
            AssigneeName: string;
            /**
             * 创建人ID。
             * @example `creator@ccc-test
            `
             */
            Creator: string;
            /**
             * 创建者名称。
             * @example `Creator`
             */
            CreatorName: string;
            /**
             * 工单表单信息。
             * @example `{"productName":"alynx"}`
             */
            Context: string;
            /**
             * 创建时间。
             * @example `1631440860000`
             */
            CreatedTime: string;
            /**
             * 更新时间。
             * @example `1631440860000`
             */
            UpdatedTime: string;
            /**
             * 当前节点ID。
             * @example `0707dab6-34a8-11ef-9823-161e3802b2d4`
             */
            CurrentTaskId: string;
            /**
             * 当前节点名称。
             * @example `节点1`
             */
            CurrentTaskName: string;
            /**
             * 当前节点开始时间。
             * @example `1631440860000`
             */
            CurrentTaskStartTime: number;
            /**
             * 客户ID。
             * @example `51e155ce-*****1-b402-13c69597b920`
             */
            CustomerId: string;
            /**
             * 话务ID。
             * @example `job-47150***150396416`
             */
            JobId: string;
            /**
             * 工单来源。
             * @example `CHAT`
             */
            Source: string;
        }[];
    };
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
}
