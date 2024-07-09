export interface CreatePublishGroupTaskRequest {
    /**
     * 租户ID。
     * > 鼠标移动到界面右上角的头像处，查看租户ID。具体操作，请参见[查看租户信息](~~181330~~)。
     * @example `10****`
     */
    "Tid"?: number;
    /**
     * 工单ID，可通过调用接口[ListOrders](~~144643~~)获取该参数的值。
     * @example `34****`
     */
    "OrderId": number;
    /**
     * 数据库ID，可通过调用接口[ListDatabases](~~141873~~)获取物理库ID的值，调用接口[ListLogicDatabases](~~141874~~)获取逻辑库ID的值。
     * >DatabaseId的值即为DbId的值。
     * @example `1860****`
     */
    "DbId": number;
    /**
     * 是否为逻辑库。
     * @example `false`
     */
    "Logic": boolean;
    /**
     * 执行策略。
     * @example `IMMEDIATELY`
     */
    "PublishStrategy": string;
    /**
     * 任务计划开始时间。
     * @example `2023-10-09 15:24:11`
     */
    "PlanTime"?: string;
}
