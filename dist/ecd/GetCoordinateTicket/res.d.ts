export interface GetCoordinateTicketResponse {
    /**
     * 协同流ID。
     * @example `co-0sot77uale3****`
     */
    CoId: string;
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 任务状态。
     * @example `Finished`
     */
    TaskStatus: string;
    /**
     * 桌面连接任务ID。
     * @example `39cc15e5-6998-4b9f-9b2c-7a4cc3e2****`
     */
    TaskId: string;
    /**
     * 协同流凭证。
     * @example `W0VuY29kaW5nXQ0KSW5wdXRFbmNvZGluZz1V********`
     */
    Ticket: string;
}
