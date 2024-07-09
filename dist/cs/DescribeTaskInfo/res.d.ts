export interface DescribeTaskInfoResponse {
    /**
     * 任务ID。
     * @example `T-5faa48fb31b6b8078d000006`
     */
    task_id: string;
    /**
     * 集群ID。
     * @example `c78592bfe92244365b3c3ad47f1de****`
     */
    cluster_id: string;
    /**
     * 任务类型，扩容任务的类型为`cluster_scaleout`。
     * @example `cluster_scaleout`
     */
    task_type: string;
    /**
     * 代表任务的运行状态。取值：
     * - `running`：任务正在运行中。
     * - `fail`：任务运行失败。
     * - `success`：任务运行完成。
     * @example `running`
     */
    state: string;
    /**
     * 任务创建时间。
     * @example `2020-11-10T16:02:04+08:00`
     */
    created: string;
    /**
     * 任务更新时间。
     * @example `2020-11-10T16:03:06+08:00`
     */
    updated: string;
    /**
     * 任务执行对象。
     */
    target: {
        /**
         * 任务执行对象ID。
         * @example `c78592bfe92244365b3c3ad47f1de****
        `
         */
        id: string;
        /**
         * 任务执行对象类型。
         * @example `cluster`
         */
        type: string;
    };
    /**
     * 任务参数。
     */
    parameters: any;
    /**
     * 任务阶段。
     */
    stages: {
        /**
         * 任务阶段状态。
         * @example `running`
         */
        state: string;
        /**
         * 任务阶段开始时间。
         * @example `2022-12-15 23:00:00`
         */
        start_time: string;
        /**
         * 任务阶段结束时间。
         * @example `2022-12-15 23:00:00`
         */
        end_time: string;
        /**
         * 任务阶段信息。
         * @example `success to xxxxx`
         */
        message: string;
        /**
         * 任务阶段输出。
         */
        outputs: any;
    }[];
    /**
     * 任务当前运行阶段。
     * @example `DrainNodes`
     */
    current_stage: string;
    /**
     * 任务产生的事件。
     */
    events: {
        /**
         * 事件动作。
         * @example `start`
         */
        action: string;
        /**
         * 事件等级。
         * @example `Normal`
         */
        level: string;
        /**
         * 事件消息。
         * @example `start to xxx`
         */
        message: string;
        /**
         * 事件原因。
         * @example `NodePoolUpgradeStart`
         */
        reason: string;
        /**
         * 事件来源。
         * @example `ACK`
         */
        source: string;
        /**
         * 事件生成时间。
         * @example `1669706229286`
         */
        timestamp: string;
    }[];
    /**
     * 任务执行详情。
     */
    task_result: {
        /**
         * 任务操作的资源，例如：扩容时操作资源是实例，那么此处就是实例ID。
         * @example `i-xxx`
         */
        data: string;
        /**
         * 资源扩容的状态。取值：
         * - `success`：扩容成功。
         * - `failed`：扩容失败。
         * - `initial`：初始化中。
         * @example `success`
         */
        status: string;
    }[];
    /**
     * 任务错误信息。
     */
    error: {
        /**
         * 错误码。
         * @example `400`
         */
        code: string;
        /**
         * 错误消息。
         * @example `failed to xxx`
         */
        message: string;
    };
}
