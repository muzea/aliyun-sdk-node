export interface CreateWmEmbedTaskResponse {
    /**
     * 本次请求的ID。
     * @example `BE4FB974-11BC-5453-9BE1-1606A73EACA6`
     */
    RequestId: string;
    /**
     * 任务信息。
     */
    Data: {
        /**
         * 任务ID，用于后续查询任务执行结果。
         * @example `job:5GfrJYsoaffmCE7Z5bZtjUefzxfd****`
         */
        TaskId: string;
    };
}
